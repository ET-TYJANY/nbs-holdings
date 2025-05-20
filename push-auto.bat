@echo off
echo 🔄 Synchronisation automatique avec GitHub...
cd /d %~dp0

git add .
git commit -m "Mise à jour automatique"
git pull origin main --allow-unrelated-histories
git push origin main

echo ✅ Modifications envoyées avec succès !
pause
