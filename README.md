# 🎓 Sitio Web Colegio SAFA

Sitio web institucional desarrollado con **HTML, CSS y JavaScript puro**. Sin dependencias, sin WordPress, sin complicaciones.

## 📁 Estructura del Proyecto

```
safa-sitio-html/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos del sitio
├── js/
│   └── script.js      # Funcionalidad JavaScript
├── images/
│   ├── hero-colegio.jpg      # Imagen de portada
│   ├── actividad-1.jpg       # Deportes
│   ├── actividad-2.jpg       # Ciencias
│   ├── actividad-3.jpg       # Arte y Cultura
│   ├── actividad-4.jpg       # Música
│   ├── actividad-5.jpg       # Tecnología
│   └── actividad-6.jpg       # Laboratorio
└── README.md
```

## 🚀 Cómo usar

### Opción 1: Abrir localmente
1. Abrí el archivo `index.html` en cualquier navegador
2. Listo, el sitio funciona

### Opción 2: Servidor local (recomendado para desarrollo)

**Con Python:**
```bash
# Python 3
python -m http.server 8000

# Luego abrí: http://localhost:8000
```

**Con Node.js:**
```bash
npx serve
```

**Con Visual Studio Code:**
- Instalá la extensión "Live Server"
- Click derecho en `index.html` → "Open with Live Server"

## 📸 Agregar tus imágenes

### 1. Imagen Hero (Portada)
- Nombre: `hero-colegio.jpg`
- Ubicación: carpeta `images/`
- Tamaño recomendado: **1920x1080px** (horizontal)
- Formato: JPG o PNG

### 2. Imágenes de Actividades
Reemplazá estos archivos en la carpeta `images/`:
- `actividad-1.jpg` → Deportes
- `actividad-2.jpg` → Ciencias
- `actividad-3.jpg` → Arte y Cultura
- `actividad-4.jpg` → Música
- `actividad-5.jpg` → Tecnología
- `actividad-6.jpg` → Laboratorio

**Tamaño recomendado:** 800x600px (4:3)

## ⚙️ Configurar el formulario de contacto

El formulario está preparado para usar **Formspree** (gratis):

### Pasos:
1. Andá a https://formspree.io
2. Creá una cuenta gratis
3. Creá un nuevo formulario
4. Copiá el código del formulario
5. En `js/script.js` línea 91, descomentá y agregá tu ID:
   ```javascript
   const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
   ```

### Alternativas:
- **EmailJS** (https://www.emailjs.com)
- **Netlify Forms** (si hospeás en Netlify)
- **Tu propio backend**

## 🌐 Subir a internet (hosting)

### GitHub Pages (GRATIS)
1. Creá un repo en GitHub
2. Subí todos los archivos
3. Andá a Settings → Pages
4. Seleccioná la rama `main` o `master`
5. ¡Listo! Tu sitio estará en `tuusuario.github.io/nombre-repo`

### Netlify (GRATIS - MÁS FÁCIL)
1. Andá a https://netlify.com
2. Arrastrá la carpeta del proyecto
3. ¡Listo! Netlify te da una URL

### Vercel (GRATIS)
Similar a Netlify, muy fácil de usar

## 🎨 Personalizar

### Colores
En `css/style.css` líneas 5-9:
```css
--color-azul: #2563EB;
--color-rojo: #EF4444;
```

### Contenido
Editá directamente `index.html` - es fácil de entender

### Datos de contacto
Líneas 150-180 de `index.html`

## ✨ Características

✅ **100% Responsive** - Se adapta a móviles, tablets y escritorio  
✅ **Sin dependencias** - Solo HTML, CSS y JS  
✅ **Rápido** -  Carga instantánea  
✅ **Menú con submenús** - Navegación completa  
✅ **Animaciones suaves** - AOS (Animate On Scroll)  
✅ **Formulario de contacto** - Integrable con servicios gratuitos  
✅ **SEO básico** - Meta tags incluidos  
✅ **Accesible** - Etiquetas semánticas y ARIA labels  

## 🛠️ Mantenimiento

### Agregar una página nueva
1. Creá un nuevo archivo `.html` (ej: `noticias.html`)
2. Copiá el header y footer de `index.html`
3. Agregá tu contenido
4. Actualizá los enlaces del menú

### Agregar noticias/blog
Podés usar un CMS headless gratuito como:
- **Netlify CMS**
- **Forestry.io**
- **Sanity.io**

## 📞 Soporte

Si necesitás ayuda, estos son recursos útiles:
- MDN Web Docs: https://developer.mozilla.org
- W3Schools: https://www.w3schools.com
- Stack Overflow: https://stackoverflow.com

## 📄 Licencia

Este sitio es propiedad del Colegio SAFA San José de Mayo.

---

**Desarrollado sin WordPress, sin dramas.** 🚀
