# Cómo Agregar una Noticia Nueva

## Pasos Simples:

### 1. Preparar la imagen
- Guardar la imagen de la noticia en la carpeta `images/`
- Nombre sugerido: `noticia-4.jpg`, `noticia-5.jpg`, etc.
- Tamaño recomendado: 800x600 píxeles

### 2. Abrir index.html
- Buscar la sección `<!-- Sección de Noticias -->`
- Encontrar `<div class="noticias-grid">`

### 3. Copiar este código y pegarlo AL INICIO (después de `<div class="noticias-grid">`):

```html
<!-- Noticia NUEVA -->
<article class="noticia-card" data-aos="fade-up" data-aos-delay="100">
    <div class="noticia-imagen">
        <img src="images/noticia-4.jpg" alt="Título de tu noticia">
        <span class="noticia-fecha">13 Mar 2026</span>
    </div>
    <div class="noticia-contenido">
        <h3>Título de Tu Noticia</h3>
        <p>Breve descripción de la noticia. Máximo 2-3 líneas para que se vea bien.</p>
        <a href="#" class="noticia-link">Leer más <i class="fas fa-arrow-right"></i></a>
    </div>
</article>
```

### 4. Personalizar:
- Cambiar `noticia-4.jpg` por el nombre de tu imagen
- Cambiar la fecha en `<span class="noticia-fecha">`
- Cambiar el título en `<h3>`
- Cambiar el texto en `<p>`
- Cambiar el `alt` en el `<img>` (descripción de la imagen)

### 5. Guardar y subir
- Guardar el archivo `index.html`
- Subir a Netlify (o tu hosting):
  - La carpeta completa `safa-sitio-html`
  - O solo los archivos modificados si sabés usar FTP/Git

---

## Ejemplo Real:

Si querés agregar "Viaje educativo a Montevideo del 15 de marzo":

```html
<!-- Noticia NUEVA -->
<article class="noticia-card" data-aos="fade-up" data-aos-delay="100">
    <div class="noticia-imagen">
        <img src="images/viaje-montevideo-2026.jpg" alt="Viaje educativo a Montevideo">
        <span class="noticia-fecha">15 Mar 2026</span>
    </div>
    <div class="noticia-contenido">
        <h3>Viaje Educativo a Montevideo</h3>
        <p>Los estudiantes de 5to año visitarán el Museo de Historia Natural y el Planetario. Salida 8am desde el colegio.</p>
        <a href="#" class="noticia-link">Leer más <i class="fas fa-arrow-right"></i></a>
    </div>
</article>
```

---

## Consejo:
Para mantener solo las últimas 3-6 noticias, eliminá las más antiguas (el último bloque `<article>...</article>` al final de la lista).
