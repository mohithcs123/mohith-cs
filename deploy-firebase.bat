@echo off
title Deploy to Firebase Hosting - Mohith Portfolio
cd /d "%~dp0"
set "PATH=%APPDATA%\npm;C:\Program Files\nodejs;C:\Users\Athul K V\AppData\Local\Programs\Git\cmd;%PATH%"

echo ==========================================================
echo    Deploy Mohith Portfolio to Firebase Hosting
echo ==========================================================
echo.

echo [1/3] Checking Firebase login...
echo If a browser opens, please select your Google account and click Allow.
echo.
call firebase login

echo.
echo [2/3] Checking Firebase project configuration...
if not exist ".firebaserc" (
    echo.
    echo No project linked yet. Let's link your Firebase project:
    echo (Choose "Use an existing project" or "Create a new project")
    echo.
    call firebase use --add
)

echo.
echo [3/3] Deploying your website to Firebase Hosting...
echo.
call firebase deploy --only hosting

echo.
if %ERRORLEVEL% equ 0 (
    echo ==========================================================
    echo   SUCCESS! Your portfolio is live on Firebase!
    echo   Check your live URL above (e.g. https://your-app.web.app)
    echo ==========================================================
) else (
    echo.
    echo If deployment didn't complete, you can run "firebase init hosting"
    echo in your terminal to select your project.
)

echo.
pause
