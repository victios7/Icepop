@echo off
powershell -NoExit -Command "$env:OLLAMA_ORIGINS='*'; ollama serve"