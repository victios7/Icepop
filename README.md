# 🍦 IcepopIDE v2

<p align="center">
  <img src="Logo.png" alt="IcepopIDE v2" width="25%">
</p>

<p align="center">

---

# 🌐 Enlaces útiles

## 🏠 Página principal

Visita la página oficial de IcepopIDE para usar el modelo en línea del IDE en su última versión y consultar la documentación:

➡️ https://victios7.github.io/Icepop/

---

## 🧠 Carpeta de modelos

Encuentra una colección de modelos de Icepop:

➡️ https://github.com/victios7/Icepop/tree/main/models

---

## El IDE moderno con Inteligencia Artificial para desarrollar proyectos completos

**IcepopIDE** es un entorno de desarrollo moderno pensado para trabajar con modelos de Inteligencia Artificial locales mediante **Ollama**, permitiendo crear aplicaciones completas desde una única interfaz.

Inspirado en la facilidad de uso de los IDE tradicionales y combinado con un asistente IA integrado, IcepopIDE busca ofrecer una experiencia rápida, sencilla y visualmente agradable.

</p>

---

# ✨ Características principales

## 🤖 Inteligencia Artificial integrada

IcepopIDE incluye un chat de IA directamente dentro del editor.

Puedes utilizar modelos locales de Ollama como por ejemplo:

- Phi
- Llama
- Gemma
- DeepSeek
- Mistral
- Qwen
- CodeLlama
- StarCoder
- cualquier otro modelo compatible

También admite modelos remotos mediante API.

---

## 📁 Explorador de proyectos

Gestiona proyectos completos mediante un explorador de archivos.

Puedes:

- crear carpetas
- crear archivos
- renombrar
- duplicar
- eliminar
- mover archivos mediante drag & drop

Todo desde la interfaz.

---

## 📝 Editor profesional

IcepopIDE incorpora un editor avanzado con soporte para:

- resaltado de sintaxis
- autocompletado
- minimapa
- números de línea
- pestañas múltiples
- guardado automático
- ajuste de líneas
- formato configurable

---

## 🆚 Soporte para VS# y VS3 *(nuevo en v2)*

IcepopIDE v2 incluye soporte nativo completo para **VS# (VSharp)**, el lenguaje de programación de BOM STUDIOS, también conocido como **VS3**:

- **Resaltado de sintaxis** con coloreado de palabras clave, tipos, literales y comentarios
- **Autocompletado inteligente** con snippets para funciones, clases, bucles y más
- **Indentación automática** y pares de cierre automáticos
- **Icono exclusivo** 🆚 para archivos `.vs`
- **Documentación integrada** en el panel de ayuda del IDE
- **Plantilla de proyecto** lista para usar con archivos de ejemplo

---

## 🦈 Soporte para Mako Script *(nuevo en v2)*

Soporte completo para **Mako Script 1.0 Alpha**, el lenguaje OOP de BOM STUDIOS:

- **Resaltado de sintaxis** con coloreado de palabras clave (`var`, `fun`, `si`, `sino`, `repeat`, `while`, `forever`, `exit`, `return`, `log`, `class`, `create`, `break`)
- **Autocompletado** con snippets para estructuras típicas de Mako
- **Icono exclusivo** 🦈 para archivos `.mako`
- **Documentación integrada** con referencia completa de tipos y sintaxis
- **Plantilla de proyecto** con archivos de ejemplo (`main.mako`, `clases.mako`, `listas.mako`)

---

## 🎨 Temas de interfaz *(nuevo en v2)*

IcepopIDE v2 incorpora un sistema de temas visuales intercambiables desde **Ajustes → Temas**:

- **☀️ Summer Cartoon** — tema claro y colorido, el estilo original de IcepopIDE
- **🌑 Dark Pro** — tema oscuro profesional para sesiones largas de trabajo

El tema seleccionado se guarda automáticamente y se aplica al reabrir el IDE.

---

## 📦 Plantillas de proyecto ampliadas *(nuevo en v2)*

Además de las plantillas existentes, v2 añade:

- **Plantilla VS#** — genera un proyecto completo con `main.vs`, `utils.vs` y `README.md`
- **Plantilla Mako** — genera un proyecto completo con `main.mako`, `clases.mako`, `listas.mako` y `README.md`

---

## ⚡ Vista previa integrada

Puedes visualizar aplicaciones HTML directamente desde el IDE mediante una vista previa integrada.

No es necesario abrir otro navegador.

---

## 💬 Chat inteligente

El asistente IA permite:

- explicar código
- corregir errores
- generar funciones
- crear proyectos completos
- responder preguntas
- ayudar durante el desarrollo

Todo sin abandonar el editor.

---

## 🧩 Sistema de extensiones

El IDE está preparado para trabajar con distintos lenguajes mediante extensiones.

Esto facilita añadir nuevas tecnologías sin modificar el núcleo del editor.

---

## 💻 Terminal integrada

Incluye una terminal incorporada para ejecutar comandos sin salir del IDE.

---

## 📤 Exportación

Los proyectos pueden exportarse fácilmente como:

- ZIP
- JSON

También es posible importar proyectos nuevamente.

---

## ⚙️ Configuración avanzada

IcepopIDE permite personalizar:

- editor
- apariencia
- parámetros del modelo IA
- Ollama
- APIs remotas
- extensiones
- interfaz
- temas visuales *(nuevo en v2)*

---

# 🚀 Instalación

## Opción A — Ejecutable (recomendada)

Descarga el instalador o el portable desde la sección **EXE** de este repositorio:

-Descarga el zip Descomprimelo y sigue las intrucciones de READ ME md
https://github.com/victios7/Icepop/blob/main/EXE/Icepop%20exe%20build.zip

---

## Opción B — Desde el HTML (sin instalación)

1. Descarga `src/IcepopIDE_v2.html`
2. Ábrelo directamente en tu navegador

> Requiere conexión a internet para cargar Monaco Editor desde CDN.

---

## 1. Instalar Ollama

Descarga Ollama desde:

https://ollama.com

---

## 2. Descargar un modelo

Por ejemplo:

```bash
ollama pull phi
```

o

```bash
ollama pull llama3
```

---

## 3. Ejecutar Ollama

```bash
OLLAMA_ORIGINS=* ollama serve
```

---

## 4. Abrir IcepopIDE

Selecciona el modelo instalado y comienza a trabajar.

---

# 🛠 Tecnologías utilizadas

IcepopIDE está desarrollado completamente con tecnologías web modernas.

- HTML
- CSS
- JavaScript
- Monaco Editor (con lenguajes personalizados VS# y Mako)
- Highlight.js
- Marked
- JSZip
- Ollama API
- Electron *(para el ejecutable nativo)*

---

# 🎯 Objetivos del proyecto

IcepopIDE nace con la idea de ofrecer un IDE que sea:

- en el navegador
- con agentes IA gratis
- sencillo
- moderno
- rápido
- bonito
- totalmente integrado con IA
- fácil de aprender

Todo ello sin depender de servicios externos cuando se utilizan modelos locales.

---

# 📷 Captura

<p align="center">
<img src="Foto de ejmplo.png" width="100%">
</p>

---

# ⚠️ Advertencia

- Mientras usas el IDE debes mantener la terminal abierta para poder usar la IA
- Si el comando no funciona, dale al botón de iconos ocultos, selecciona Ollama y pulsa la opción de quit, luego cierra la terminal y pega el comando que aparece en las instrucciones
- Si el comando continúa sin funcionar, ejecuta el `.bat` en https://github.com/victios7/Icepop/blob/main/launch%20ollama.bat
- Si continúa sin funcionar, desinstala Ollama, elimina todos los modelos locales eliminando la carpeta ollama, reinicia el ordenador y reinstala Ollama
- No está disponible para Android, Linux ni macOS — solo para Windows en navegadores como Google Chrome, Microsoft Edge y otros navegadores de última generación

---

# 📄 Licencia

Proyecto de código abierto.

---

# ❤️ Agradecimientos

- Gracias a Ollama AI por proporcionar modelos abiertos y gratuitos
- Gracias a Microsoft por crear Monaco Editor y facilitar la tarea de crear un IDE
---

# 🗒️ Notas

- Recomiendo usar modelos como Gemma 4, que es estable y razona. Modelos como Qwen 3.6 en la generación de proyectos pueden consumir mucha RAM y memoria.
- ⚠️ No modifiques esta dirección (`http://127.0.0.1:11434`) salvo que sepas exactamente lo que estás haciendo. Es la dirección local utilizada por Ollama para que IcepopIDE se comunique con el modelo de IA. Cambiarla impedirá que el IDE pueda conectarse correctamente. Solo debes modificarla si utilizas Ollama en otro equipo o has configurado un puerto diferente.
- El IDE tiene algunos errores porque está en desarrollo activo, pero es completamente usable.
- Muchos modelos no son funcionales con todas las características.

---

# 🆕 Novedades en v2

| Característica | Detalle |
|---|---|
| 🆚 Soporte VS# / VS3 | Resaltado, autocompletado, snippets y documentación |
| 🦈 Soporte Mako Script | Resaltado, autocompletado, snippets y documentación |
| 🎨 Sistema de temas | Summer Cartoon ☀️ y Dark Pro 🌑 desde Ajustes |
| 📦 Plantillas VS# | Proyecto completo generado automáticamente |
| 📦 Plantillas Mako | Proyecto completo generado automáticamente |
| 🖥️ Ejecutable nativo | Instalador y portable para Windows vía Electron |

---

# IcepopIDE

> Programa más rápido. Crea más. Propiedad de BOM STUDIOS
