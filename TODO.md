# Sitio Web Colegio SAFA - Lista de Tareas

## ✅ Completado
- Header con logo y menú
- Hero con slideshow de 4 imágenes (auto + manual)
- Sección de Actividades (estructura lista)
- Sección de Noticias (estructura lista)
- Sección de Contacto con formulario
- Footer
- Diseño responsive (mobile + desktop)

## 📸 Imágenes Necesarias

### Actividades (6 imágenes)
Agregar en la carpeta `images/`:
- `actividad-1.jpg` - Deportes
- `actividad-2.jpg` - Ciencias
- `actividad-3.jpg` - Arte y Cultura
- `actividad-4.jpg` - Música
- `actividad-5.jpg` - Tecnología
- `actividad-6.jpg` - Laboratorio

**Tamaño recomendado:** 800x600 píxeles

### Noticias (3 imágenes iniciales)
Agregar en la carpeta `images/`:
- `noticia-1.jpg` - Inicio de clases
- `noticia-2.jpg` - Inscripciones
- `noticia-3.jpg` - Torneo deportivo

**Tamaño recomendado:** 800x480 píxeles

## 📋 Configuraciones Pendientes

### 1. Formulario de Contacto
Opciones:
- **Formspree** (recomendado): [formspree.io](https://formspree.io)
  - Crear cuenta gratis
  - Obtener código del formulario
  - Agregar `action` al `<form>` en index.html
  
- **EmailJS**: Otra alternativa gratuita

### 2. Redes Sociales
Actualizar en el footer (líneas 286-288 de index.html):
```html
<a href="URL_FACEBOOK" aria-label="Facebook">
<a href="URL_INSTAGRAM" aria-label="Instagram">
<a href="URL_TWITTER" aria-label="Twitter">
```

### 3. Contenido de Secciones
Si querés páginas individuales para:
- Misión, Visión, Historia (menú Institucional)
- Inicial, Primaria, Secundaria, Bachillerato (menú Propuesta Educativa)

Tendrías dos opciones:
- Crear páginas separadas (`mision.html`, `vision.html`, etc.)
- Agregar esas secciones en `index.html` y que los links hagan scroll

## 🚀 Publicación

### Opción A: Netlify (Recomendada)
1. Ir a [netlify.com](https://netlify.com)
2. Crear cuenta
3. Arrastrar carpeta `safa-sitio-html`
4. ¡Listo! Te da una URL temporal
5. Conectar dominio `safasanjosedemayo.edu.uy` en configuración DNS

### Opción B: GitHub Pages
1. Subir a repositorio de GitHub
2. Activar Pages en Settings
3. Conectar dominio

### Opción C: Hosting tradicional
1. Contratar hosting en Uruguay
2. Subir por FTP

## 📝 Agregar Noticias
Ver el archivo: **COMO-AGREGAR-NOTICIA.md**

## 🎨 Personalizaciones Futuras
- Agregar galería de fotos del colegio
- Sistema de calendario de eventos
- Área de descargas (circulares, formularios)
- Blog de noticias más completo
