@echo off
echo 🔄 Synchronisation automatique avec GitHub...

REM Aller dans le dossier du script
cd /d %~dp0

REM Ajouter tous les fichiers modifiés
git add .

REM Vérifier s'il y a des modifications avant de committer
git diff --cached --quiet
if %ERRORLEVEL% NEQ 0 (
    git commit -m "Mise à jour automatique"
) else (
    echo ✅ Aucun changement à valider.
)

REM Tenter de fusionner avec la branche distante
git pull origin main --allow-unrelated-histories --no-edit

REM Pousser vers GitHub
git push origin main

echo ✅ Modifications synchronisées avec succès !
pause
