# 📋 Guía paso a paso — Publicar IcepopIDE en GitHub y generar el EXE

---

## Antes de empezar

Necesitas:
- Una cuenta en [github.com](https://github.com) (gratis)
- [Git](https://git-scm.com/downloads) instalado en tu PC
- [Node.js 20+](https://nodejs.org) instalado en tu PC

---

## PASO 1 — Crear el repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en el botón verde **"New"** (arriba a la izquierda)
3. Rellena el formulario:
   - **Repository name:** `IcepopIDE` (o el nombre que quieras)
   - **Description:** `IDE moderno con IA integrada`
   - Marca **Public** (para que los Releases sean gratuitos)
   - **NO** marques "Add a README file" (ya tienes uno)
4. Haz clic en **"Create repository"**

---

## PASO 2 — Subir la carpeta a GitHub

Abre una terminal en la **carpeta de este proyecto** y ejecuta estos comandos **uno por uno**:

```bash
git init
```
```bash
git add .
```
```bash
git commit -m "IcepopIDE v2 — lanzamiento inicial"
```
```bash
git branch -M main
```
```bash
git remote add origin https://github.com/TU_USUARIO/IcepopIDE.git
```
> ⚠️ Cambia `TU_USUARIO` por tu nombre de usuario de GitHub

```bash
git push -u origin main
```

GitHub te pedirá tu usuario y contraseña (o un token si ya lo tienes configurado).

---

## PASO 3 — Activar los permisos de Actions

1. En tu repositorio de GitHub ve a **Settings** (arriba a la derecha)
2. En el menú de la izquierda busca **Actions → General**
3. Baja hasta **"Workflow permissions"**
4. Selecciona **"Read and write permissions"**
5. Haz clic en **Save**

> Esto permite que el workflow pueda crear el Release automáticamente.

---

## PASO 4 — Añadir el Logo (opcional pero recomendado)

Si tienes el archivo `Logo.png`:

1. Cópialo dentro de esta carpeta (junto a `main.js`)
2. Ejecuta en la terminal:

```bash
git add Logo.png
git commit -m "Añadir logo"
git push
```

Si no tienes Logo.png, el EXE se compilará igualmente sin icono personalizado.

---

## PASO 5 — Crear un Release y generar el EXE

Cuando quieras publicar una versión nueva y que GitHub genere el EXE automáticamente:

```bash
git tag v2.0.0
```
```bash
git push origin v2.0.0
```

Eso es todo. GitHub Actions empezará a compilar el EXE automáticamente.

---

## PASO 6 — Ver el progreso de la compilación

1. Ve a tu repositorio en GitHub
2. Haz clic en la pestaña **"Actions"** (barra superior)
3. Verás el workflow **"🏗️ Build IcepopIDE Windows EXE"** ejecutándose
4. El proceso tarda aproximadamente **5-10 minutos**
5. Cuando termine aparecerá un ✅ verde

---

## PASO 7 — Descargar el EXE

### Opción A — Desde Releases (recomendada)

1. Ve a tu repositorio en GitHub
2. A la derecha verás la sección **"Releases"**
3. Haz clic en la versión `v2.0.0`
4. Descarga:
   - `IcepopIDE-Setup.exe` — instalador completo con acceso directo
   - `IcepopIDE-Portable.exe` — ejecuta directamente sin instalar

### Opción B — Desde Artifacts (sin tag)

Si ejecutaste el workflow manualmente sin crear un tag:

1. Ve a **Actions**
2. Haz clic en el workflow que terminó
3. Baja hasta **"Artifacts"**
4. Descarga **"IcepopIDE-Windows-Build"**
5. Descomprime el ZIP — dentro estará el `.exe`

---

## PASO 8 — Ejecutar manualmente el workflow (sin crear un tag)

Si quieres compilar sin publicar una release:

1. Ve a **Actions** en GitHub
2. Selecciona **"🏗️ Build IcepopIDE Windows EXE"**
3. Haz clic en **"Run workflow"** (botón gris a la derecha)
4. Selecciona la rama `main` y haz clic en **"Run workflow"**

---

## PASO 9 — Publicar versiones futuras

Cada vez que hagas cambios y quieras una nueva versión:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
git tag v2.1.0
git push origin v2.1.0
```

GitHub compilará y publicará el nuevo EXE automáticamente.

---

## ❓ Preguntas frecuentes

### El workflow falla con un error de permisos
→ Revisa el Paso 3. Asegúrate de haber guardado los permisos de lectura y escritura.

### No encuentro la pestaña "Releases"
→ Los Releases aparecen en la barra lateral derecha del repositorio, o en la pestaña **"Code"** bajando hacia abajo.

### El EXE dice que no es de confianza / Windows Defender lo bloquea
→ Es normal para aplicaciones sin firma de código. Haz clic en **"Más información"** y luego **"Ejecutar de todas formas"**.

### Quiero cambiar el nombre del EXE
→ Edita el campo `"productName"` en `package.json` antes de hacer push.

### El EXE se abre pero la IA no funciona
→ Necesitas tener Ollama ejecutándose en segundo plano con:
```bash
OLLAMA_ORIGINS=* ollama serve
```

---

## Estructura de la carpeta

```
IcepopIDE-release/
├── .github/
│   └── workflows/
│       └── build.yml        ← workflow de GitHub Actions
├── src/
│   └── IcepopIDE_v2.html   ← el IDE completo
├── .gitignore
├── main.js                  ← entrada de Electron (el "lanzador")
├── package.json             ← configuración del proyecto y del EXE
├── Logo.png                 ← pon aquí tu logo (opcional)
├── README.md                ← descripción del proyecto
└── GUIA_PASO_A_PASO.md     ← esta guía
```

---

> BOM STUDIOS · IcepopIDE v2
