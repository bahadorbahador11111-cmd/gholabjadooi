#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
GholAbJadooi project snapshot collector

Usage:
  python collect_gholabjadooi_snapshot.py
  python collect_gholabjadooi_snapshot.py --root "C:/projects/gholabjadooi" --out snapshot_gholabjadooi.txt

Features:
- Default root: C:/projects/gholabjadooi
- Excludes useless folders/files (node_modules, .git, build outputs, etc.)
- Detects text files even without extension
- Masks secrets (.env, api keys, tokens, passwords)
- Metadata: mtime, size, sha1
- Truncates very large files safely
"""

from __future__ import annotations
import argparse
import datetime as dt
import hashlib
import os
import re
from pathlib import Path
from typing import Iterable, Tuple, Optional, Set

# ===== DEFAULT CONFIG =====
DEFAULT_ROOT = Path(r"C:/projects/gholabjadooi")

# Completely excluded directories
EXCLUDE_DIR_NAMES: Set[str] = {
    ".git",
    ".next",
    "node_modules",
    "dist",
    "build",
    "out",
    ".expo",
    ".vscode",
    ".idea",
    "__pycache__",
    ".venv",
    "venv",
}

# Excluded files
EXCLUDE_FILES_REL: Set[str] = {
    "package-lock.json",
    "yarn.lock",
    "pnpm-lock.yaml",
    "collect_gholabjadooi_snapshot.py",
    "collect_gholabjadooi_snapshot.bat",
    "snapshot_gholabjadooi.txt",
    "PRODUCT_ENTRY_SOP.md",
}

# Force include specific files if needed
FORCE_INCLUDE: Set[Path] = {
    # Path("package.json"),
}

# Always text extensions
ALWAYS_TEXT_EXTS = {
    ".ts", ".tsx", ".js", ".jsx",
    ".json", ".mjs", ".cjs",
    ".css", ".scss",
    ".html", ".htm",
    ".md", ".mdx",
    ".env",
    ".yml", ".yaml",
    ".toml", ".ini", ".conf",
    ".lock",
    ".gitignore", ".gitattributes",
    ".py",
    ".txt",
}

# ===== SECRET MASKING =====
SECRET_LINE_REGEX = re.compile(
    r'''(?ix)
    (?P<key>
        (?:api[_-]?key|secret(?:[_-]?key)?|
        token|bearer|password|passwd|pwd|
        access[_-]?key|client[_-]?secret|
        smtp[_-]?pass|jwt)
    )
    \s*[:=]\s*
    (?P<val>[^\r\n#]+)
    '''
)

ENV_KV_REGEX = re.compile(r'^\s*([A-Za-z0-9_\.:-]+)\s*=\s*(.*)$')

# ===== HELPERS =====

def sha1_bytes(b: bytes) -> str:
    h = hashlib.sha1()
    h.update(b)
    return h.hexdigest()

def is_probably_text(path: Path, peek_bytes: int = 2048) -> bool:
    try:
        with path.open("rb") as f:
            chunk = f.read(peek_bytes)

        if not chunk:
            return True

        if b"\x00" in chunk:
            return False

        printable = sum(
            1 for c in chunk
            if c >= 32 or c in (9, 10, 13)
        )

        return printable / max(1, len(chunk)) > 0.9

    except Exception:
        return False

def safe_read_text(path: Path) -> Tuple[Optional[str], Optional[str], Optional[bytes]]:
    encodings = ("utf-8", "utf-8-sig", "utf-16", "latin-1")

    try:
        raw = path.read_bytes()
    except Exception as e:
        return None, f"read-error: {e}", None

    last_err = None

    for enc in encodings:
        try:
            return raw.decode(enc), None, raw
        except Exception as e:
            last_err = str(e)

    try:
        return raw.decode("utf-8", errors="replace"), f"decoded-with-replacement: {last_err}", raw
    except Exception as e:
        return None, f"decode-error: {e}", raw

def mask_secrets(text: str, path: Path) -> str:
    is_env = path.name.lower().startswith(".env") or path.suffix.lower() == ".env"

    out = []

    for line in text.splitlines():

        if is_env:
            if not line.strip() or line.strip().startswith("#"):
                out.append(line)
                continue

            m = ENV_KV_REGEX.match(line)

            if m:
                out.append(f"{m.group(1)}=***")
            else:
                out.append(line)

        else:
            out.append(
                SECRET_LINE_REGEX.sub(
                    lambda m: f"{m.group('key')}=***",
                    line
                )
            )

    return "\n".join(out)

def format_header(root: Path, path: Path, size: int, sha1: str) -> str:

    try:
        mtime = dt.datetime.fromtimestamp(
            path.stat().st_mtime
        ).isoformat()
    except Exception:
        mtime = "N/A"

    try:
        rel = path.relative_to(root).as_posix()
    except Exception:
        rel = str(path)

    return (
        f"===== File: {rel} =====\n"
        f"# Modified: {mtime} | Size: {size} bytes | SHA1: {sha1}\n"
    )

def iter_files(base: Path) -> Iterable[Path]:

    for dirpath, dirnames, filenames in os.walk(base, topdown=True):

        dirnames[:] = [
            d for d in dirnames
            if d not in EXCLUDE_DIR_NAMES
        ]

        for fn in filenames:
            yield Path(dirpath) / fn

def should_exclude(path: Path, root: Path) -> bool:

    if any(part in EXCLUDE_DIR_NAMES for part in path.parts):
        return True

    try:
        rel = path.relative_to(root).as_posix()
    except Exception:
        rel = path.name

    return (
        path.name in EXCLUDE_FILES_REL
        or rel in EXCLUDE_FILES_REL
    )

def should_collect(path: Path) -> bool:

    if path.suffix.lower() in ALWAYS_TEXT_EXTS:
        return True

    return is_probably_text(path)

# ===== MAIN =====

def main():

    parser = argparse.ArgumentParser(
        "GholAbJadooi snapshot collector"
    )

    parser.add_argument(
        "--root",
        default=str(DEFAULT_ROOT)
    )

    parser.add_argument(
        "--out",
        default="snapshot_gholabjadooi.txt"
    )

    parser.add_argument(
        "--max-file-kb",
        type=int,
        default=512
    )

    parser.add_argument(
        "--max-out-mb",
        type=int,
        default=60
    )

    args = parser.parse_args()

    root = Path(args.root).resolve()

    out_path = (root / args.out).resolve()

    per_file_limit = args.max_file_kb * 1024
    total_limit = args.max_out_mb * 1024 * 1024

    files = sorted(
        iter_files(root),
        key=lambda p: str(p).lower()
    )

    files_considered = 0
    written = 0
    skipped = 0
    total_written = 0

    with out_path.open(
        "w",
        encoding="utf-8",
        newline="\n"
    ) as out:

        out.write(
            f"### GholAbJadooi Snapshot\n"
            f"# Generated: {dt.datetime.now().isoformat()}\n"
            f"# Root: {root}\n\n"
        )

        for path in files:

            files_considered += 1

            if not path.exists() or not path.is_file():
                skipped += 1
                continue

            if should_exclude(path, root):
                skipped += 1
                continue

            try:
                collect = should_collect(path)
            except Exception:
                skipped += 1
                continue

            if not collect:
                skipped += 1
                continue

            txt, err, raw = safe_read_text(path)

            sha = (
                sha1_bytes(raw)
                if raw is not None
                else "N/A"
            )

            try:
                size = path.stat().st_size
            except Exception:
                size = -1

            content = txt if txt is not None else ""

            try:
                content = mask_secrets(content, path)
            except Exception:
                content = "*** [ERROR MASKING CONTENT] ***\n"

            bytes_out = content.encode("utf-8")

            if len(bytes_out) > per_file_limit:

                trimmed = bytes_out[:per_file_limit]

                while True:
                    try:
                        content = trimmed.decode("utf-8")
                        break
                    except UnicodeDecodeError:
                        trimmed = trimmed[:-1]

                content += (
                    "\n\n*** [TRUNCATED: content larger than per-file limit] ***"
                )

            block = format_header(
                root,
                path,
                size,
                sha
            )

            if err:
                block += f"*** notice: {err}\n"

            block += content + "\n\n"

            if (
                total_written
                + len(block.encode("utf-8"))
                > total_limit
            ):
                out.write(
                    "\n*** HARD STOP: total output exceeded max-out-mb ***\n"
                )

                skipped += 1
                break

            out.write(block)

            total_written += len(
                block.encode("utf-8")
            )

            written += 1

        out.write(
            f"\n### Summary\n"
            f"# Files considered: {files_considered} | Written: {written} | Skipped: {skipped}\n"
            f"# Output size: {total_written} bytes\n"
        )

    print(f"Done. Snapshot written to: {out_path}")

    print("===== SNAPSHOT SUMMARY =====")
    print(f"Files considered : {files_considered}")
    print(f"Files written    : {written}")
    print(f"Files skipped    : {skipped}")
    print(f"Output size      : {total_written} bytes")
    print(f"Output file      : {out_path}")
    print("============================")

if __name__ == "__main__":
    main()