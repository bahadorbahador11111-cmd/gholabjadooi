@echo off

REM Go to project root
cd /d "C:\projects\gholabjadooi"

REM Generate snapshot
python collect_gholabjadooi_snapshot.py --out snapshot_gholabjadooi.txt

echo.
echo ==========================================
echo Snapshot created successfully
echo.
echo File:
echo %CD%\snapshot_gholabjadooi.txt
echo ==========================================
echo.

pause