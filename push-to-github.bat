@echo off
title Push Mohith Portfolio to GitHub
set "PATH=C:\Users\Athul K V\AppData\Local\Programs\Git\cmd;%PATH%"
cd /d "%~dp0"

echo ===================================================
echo   Pushing Mohith Portfolio to GitHub...
echo   Repository: https://github.com/mohithcs123/mohith-cs.git
echo ===================================================

git status
git push -u origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo ===================================================
    echo   SUCCESS! Your portfolio is pushed to GitHub!
    echo   View it at: https://github.com/mohithcs123/mohith-cs
    echo ===================================================
) else (
    echo.
    echo If GitHub asked you to sign in, complete the browser sign-in and run this again.
)
pause

