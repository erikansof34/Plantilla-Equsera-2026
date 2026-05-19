# 🎓 Plantilla de Cursos Interactivos - Equsera

Bienvenido a la **Plantilla de Cursos Interactivos**, un sistema LMS (Learning Management System) moderno y modular diseñado para ofrecer experiencias de aprendizaje inmersivas. Esta plantilla utiliza tecnologías de vanguardia como **Next.js 15, React 19, Tailwind CSS y TypeScript**.

---

## 🌟 Propósito de la Plantilla

Esta herramienta permite a diseñadores instruccionales y desarrolladores crear cursos digitales con una estructura coherente, navegación fluida y elementos interactivos avanzados sin tener que programar la lógica base desde cero. 

El enfoque principal es la **separación de datos y diseño**: el contenido del curso reside en archivos de configuración simples, mientras que la plantilla se encarga de renderizarlo con una identidad visual profesional.

---

## 🎨 Identidad de Marca

La plantilla cuenta con una identidad visual robusta basada en una paleta de colores sofisticada y una tipografía clara, diseñada para maximizar la legibilidad y el enfoque del estudiante.

### Paleta de Colores Corporativa
- **Verde Oscuro (`--course-green-dark`)**: `#1a3a2f` - Usado para elementos de navegación y fondos principales.
- **Verde Menta (`--course-green-mint`)**: `#7cb342` - Color de acento y éxito.
- **Dorado (`--course-gold`)**: `#c9a227` - Usado para resaltados, medallas y elementos de progreso.
- **Crema/Beige (`--course-cream`, `--course-beige`)**: `#f5f1e8` / `#e8e0d0` - Fondos suaves para tarjetas y áreas de contenido.

### Tipografía
- **Fuente Principal**: Inter (Sanson-serif moderna)
- **Estilos**: Se utilizan jerarquías claras con pesos `900` para títulos y `400/600` para cuerpo de texto.

---

## 🧩 Componentes Reutilizables

La plantilla ofrece una biblioteca de componentes centralizada en `components/course/index.ts`. Estos se dividen en categorías funcionales:

### 1. Navegación y Layout
- **CourseLayout**: Contenedor principal que gestiona el header, footer y área de contenido.
- **CourseHeader**: Barra superior con lección actual, progreso y nombre de zona.
- **BottomNavigation**: Menú inferior para acceso rápido a secciones globales.

### 2. Elementos de Contenido
- **ContentCard**: Tarjetas versátiles para texto (variantes: `cream`, `highlight`, `card`).
- **QuoteCard / CitationCard**: Para resaltar citas importantes o notas editoriales.
- **ExpandableText**: Para manejar textos largos sin saturar la pantalla.
- **GlossaryTermCard**: Tarjetas específicas para definiciones de glosario.

### 3. Media Interactiva
- **AudioPlayer / VideoPlayer**: Reproductores personalizados con controles integrados.
- **ImageCarousel**: Carrusel de imágenes para galerías.
- **ImageWithOverlay**: Imágenes con capas de información superpuestas.

### 4. Actividades y Evaluación
- **MultipleChoice**: Preguntas de opción múltiple con feedback inmediato.
- **ImageMatching**: Ejercicios de emparejamiento visual (drag & drop o select).
- **Checklist**: Listas de verificación interactivas.
- **ScenarioQuestion**: Preguntas basadas en casos de estudio.

---

## 📝 Cómo Anexar Contenido

El contenido del curso es totalmente parametrizado. No necesitas editar los archivos de los componentes para cambiar el contenido.

### Estructura de Datos
Todo el contenido se gestiona en la carpeta `lib/course/content/`. El archivo raíz es `course.ts`, que consolida:
1.  **Meta (`meta.ts`)**: Logo, nombre de empresa, features globales.
2.  **Introducción (`introduction/`)**: Portada, bienvenida, metodología y ruta de aprendizaje.
3.  **Módulos (`modules/`)**: Cada módulo tiene sus lecciones y cada lección sus slides.

### Ejemplo: Añadir un nuevo Slide de Contenido
Para añadir contenido a una lección, simplemente agrégalo al arreglo `slides` en el archivo correspondiente:

```ts
// lib/course/content/modules/module-1/slides/mi-nuevo-slide.ts
export const miSlide = createContentSlide("slide-id-unico", 1, {
  title: "Mi Título",
  paragraphs: [
    { id: "p1", text: "Este es mi nuevo contenido." }
  ],
  media: [
    { id: "m1", type: "image", src: "/img/mi-imagen.jpg" }
  ]
});
```

Luego, asegúrate de importar este slide en la lección correspondiente dentro de `lessons.ts`.

---

## 🚀 Instalación y Desarrollo

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```
2.  **Iniciar entorno de desarrollo**:
    ```bash
    npm run dev
    ```
3.  **Construir para producción**:
    ```bash
    npm run build
    ```

---

## 🛠️ Flujo de Trabajo Recomendado

1.  **Diseño en Figma**: Definir la secuencia de pantallas y el estilo visual.
2.  **Mapeo**: Identificar qué `SlideType` (cover, welcome, content, activity, quiz) corresponde a cada pantalla de Figma.
3.  **Carga de Datos**: Traducir los textos y recursos de Figma a los archivos en `lib/course/content/`.
4.  **Validación**: Usar `validateTemplateSequence(course)` para asegurar que se cumplen los requisitos mínimos del curso.

---
*Desarrollado para la excelencia educativa por Equus Edu Pro, LLC.*
