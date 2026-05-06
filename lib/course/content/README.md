# 📚 Guía de Contenido del Curso

## 🎯 Propósito
Esta carpeta contiene todo el contenido del curso de forma modular y estandarizada, permitiendo fácil edición y mantenimiento sin tocar la lógica de navegación ni los componentes visuales.

## 🏗️ Estructura General

```
lib/course/content/
├── meta.ts                    # Metadatos del curso (título, descripción, etc.)
├── introduction/               # Sección de introducción
│   ├── cover.ts              # Portada del curso
│   ├── welcome.ts             # Pantalla de bienvenida
│   ├── methodology.ts         # Metodología del curso
│   ├── learning-path.ts       # Ruta de aprendizaje
│   └── index.ts              # Exporta todo introduction
├── modules/                   # Módulos del curso
│   ├── index.ts              # Exporta todos los módulos
│   ├── module-1/             # Módulo 1 (ejemplo)
│   ├── module-2/             # Módulo 2
│   └── module-3/             # Módulo 3
├── glossary/                  # Glosarios por módulo
│   ├── index.ts              # Exporta todos los glosarios
│   └── module-1.ts          # Glosario del módulo 1
├── evaluation/                 # Evaluaciones por módulo
│   ├── index.ts              # Exporta todas las evaluaciones
│   └── module-1-completion.ts
└── course.ts                   # Archivo maestro que une todo
```

## 📝 Cómo Agregar un Nuevo Slide

### 1. En un Módulo Existente

**Paso 1: Crear el archivo del slide**
```typescript
// lib/course/content/modules/module-1/slides/slide6.ts
import type { SlideContent } from "../../../../types";

export const slide6: SlideContent = {
  slideId: "m1-slide6",
  navbarTitle: "TÍTULO PERSONALIZADO",  // ← Esto aparece en el navbar
  title: "Título del Slide",
  subtitle: "Subtítulo opcional",
  // ... resto del contenido
};
```

**Paso 2: Actualizar el index de slides**
```typescript
// lib/course/content/modules/module-1/slides/index.ts
import { slide1 } from "./slide1";
import { slide2 } from "./slide2";
import { slide3 } from "./slide3";
import { slide4 } from "./slide4";
import { slide5 } from "./slide5";
import { slide6 } from "./slide6";  // ← Agregar esta línea

export const module1Slides = [
  slide1, slide2, slide3, slide4, slide5, slide6  // ← Agregar slide6
];
```

**Paso 3: Actualizar el index del módulo**
```typescript
// lib/course/content/modules/module-1/index.ts
import { module1Slides } from "./slides";  // Ya está importado

// No necesitas cambiar nada aquí, module1Slides ya incluye el nuevo slide
```

## 🆕 Cómo Crear un Nuevo Módulo

### Paso 1: Crear estructura de carpetas
```bash
mkdir lib/course/content/modules/module-4
mkdir lib/course/content/modules/module-4/slides
mkdir lib/course/content/modules/module-4/assets
mkdir lib/course/content/modules/module-4/styles
```

### Paso 2: Crear archivos del módulo
```typescript
// lib/course/content/modules/module-4/slides/slide1.ts
export const slide1: SlideContent = {
  slideId: "m4-slide1",
  navbarTitle: "Título Personalizado",
  title: "Primer slide del módulo 4",
  // ... contenido
};

// lib/course/content/modules/module-4/slides/index.ts
import { slide1 } from "./slide1";

export const module4Slides = [slide1];

// lib/course/content/modules/module-4/lessons.ts
export const module4Lessons = [
  {
    id: "m4-lesson1",
    title: "Lección 1",
    slides: module4Slides,
  },
];

// lib/course/content/modules/module-4/index.ts
import type { ModuleStructure } from "../../../course-structure";
import { module4Lessons } from "./lessons";

export const module4: ModuleStructure = {
  id: "module-4",
  number: 4,
  title: "Título del Módulo 4",
  subtitle: "Subtítulo del módulo",
  description: "Descripción del módulo",
  thumbnail: "URL de imagen",
  status: "active",
  glossary: module4Glossary,  // Opcional
  lessons: module4Lessons,
  completion: module4Completion,  // Opcional
};
```

### Paso 3: Agregar glosario y evaluación (opcional)
```typescript
// lib/course/content/glossary/module-4.ts
export const module4Glossary = {
  slideId: "m4-glossary",
  navbarTitle: "Glosario - Módulo 4",
  title: "Módulo 4: Título del Glosario",
  subtitle: "GLOSARIO DEL MÓDULO:",
  // ... términos
};

// lib/course/content/evaluation/module-4-completion.ts
export const module4Completion = {
  slideId: "m4-completion",
  navbarTitle: "Completado - Módulo 4",
  content: {
    moduleNumber: 4,
    // ... contenido de completación
  },
};
```

### Paso 4: Actualizar exports principales
```typescript
// lib/course/content/glossary/index.ts
export { module1Glossary } from "./module-1";
export { module2Glossary } from "./module-2";
export { module3Glossary } from "./module-3";
export { module4Glossary } from "./module-4";  // ← Agregar

// lib/course/content/evaluation/index.ts
export { module1Completion } from "./module-1-completion";
export { module2Completion } from "./module-2-completion";
export { module3Completion } from "./module-3-completion";
export { module4Completion } from "./module-4-completion";  // ← Agregar

// lib/course/content/modules/index.ts
import { module1 } from "./module-1";
import { module2 } from "./module-2";
import { module3 } from "./module-3";
import { module4 } from "./module-4";  // ← Agregar

export const courseModules = [module1, module2, module3, module4];  // ← Agregar
```

## 🎨 Propiedades Importantes

### navbarTitle
Para que el navbar muestre un título personalizado en lugar de "Lección X":

```typescript
export const slideData = {
  slideId: "identificador-único",
  navbarTitle: "TÍTULO PERSONALIZADO",  // ← Esto aparece en el navbar
  // ... resto del contenido
};
```

### slideId
Cada slide debe tener un `slideId` único:
- Formato: `m{numero-modulo}-slide{numero-slide}`
- Ejemplos: `m1-slide1`, `m1-slide2`, `m2-slide1`

## 🔄 Flujo de Datos

```
Datos de contenido → FigmaPresentation → Componente de pantalla → CourseLayout → CourseHeader → Navbar
```

## 📁 Assets y Estilos

### Assets
```
modules/module-1/assets/
├── images/     # Imágenes del módulo
├── audio/       # Archivos de audio
└── video/       # Videos
```

### Estilos
```
modules/module-1/styles/
└── module-1.css    # Estilos específicos del módulo
```

## ✅ Checklist de Creación

- [ ] Crear archivo del slide con contenido
- [ ] Agregar export en slides/index.ts
- [ ] Verificar que module-X/index.ts incluya los slides
- [ ] Probar que el slide se renderice correctamente
- [ ] Agregar assets si son necesarios
- [ ] Actualizar estilos si se requiere

## 🚀 Buenas Prácticas

1. **Nomenclatura consistente**: Usa siempre `slide` + número
2. **IDs únicos**: Cada `slideId` debe ser único en todo el curso
3. **Imports relativos**: Usa rutas relativas dentro de la misma carpeta
4. **Exports en index**: Siempre actualiza los archivos `index.ts`
5. **Prueba incremental**: Agrega un slide a la vez y prueba

## 🐛 Solución de Problemas Comunes

### Error: "Module not found"
- Verifica que las rutas en `import` sean correctas
- Asegúrate que los archivos `index.ts` exporten los módulos

### Error: "Cannot find name 'slideX'"
- Verifica que el archivo `slideX.ts` exista
- Revisa la importación en `slides/index.ts`

### El navbar no muestra el título personalizado
- Verifica que el componente en `FigmaPresentation.tsx` pase el `navbarTitle`
- Confirma que el dato tenga la propiedad `navbarTitle` definida

## 🎯 Estructura de Slides

### Slide1 (Ejemplo)
```typescript
export const slide1: SlideContent = {
  slideId: "m1-slide1",
  navbarTitle: "Partes del Caballo",
  type: "horse-parts" as const,
  title: "Partes del Caballo",
  content: {
    heroImage: "./assets/images/horse-parts-hero.jpg",
    objectives: [
      { id: "obj1", text: "Identificar partes principales" },
      { id: "obj2", text: "Conocer terminología equina" },
    ],
    keyComponents: [
      { id: "kc1", icon: "brain", title: "Cabeza" },
      { id: "kc2", icon: "heart", title: "Corazón" },
    ],
    quotes: [
      { id: "q1", text: "Conocer la anatomía es fundamental", variant: "highlight" as const },
    ],
  },
  assets: {
    images: ["./assets/images/part-cabeza.jpg", "./assets/images/part-patas.jpg"],
    audio: ["./assets/audio/explicacion-partes.mp3"],
  },
};
```

Esta estructura modular hace que sea muy fácil para cualquiera modificar, agregar o reorganizar contenido sin romper el flujo del curso.

## 🎯 Convenciones Estandarizadas

### **Nomenclatura de Slides:**
- `slide1.ts`, `slide2.ts`, `slide3.ts` (secuenciales)
- IDs automáticos: `mX-lY-sZ` (ej: `m1-l1-s1`)

### **Estructura de cada slide:**
```typescript
// modules/module-1/slides/slide1.ts
export const slide1 = {
  type: "zone-detail" as const,
  title: "Título del Slide",
  content: {
    // ... contenido
  },
  assets: {
    images: ["./assets/images/slide1-bg.jpg"],
    audio: ["./assets/audio/slide1.mp3"],
  }
};
```

### **Estructura de assets:**
```
modules/module-X/assets/
├── images/           # .jpg, .png, .webp
├── audio/            # .mp3, .wav
└── video/            # .mp4, .webm
```

### **Estructura de styles:**
```
modules/module-X/styles/
└── module-X.css      # Estilos específicos del módulo
```

## 🚀 Cómo Agregar un Slide Nuevo

1. **Crear archivo estandarizado:**
   ```bash
   # En modules/module-X/slides/
   touch slide4.ts
   ```

2. **Estructura básica:**
   ```typescript
   export const slide4 = {
     type: "content" as const,
     title: "Nuevo Slide",
     content: { /* contenido */ },
     assets: { /* recursos */ }
   };
   ```

3. **Actualizar lessons.ts:**
   ```typescript
   import { slide4 } from "./slides/slide4";
   
   export const lessons = [
     // ... slides existentes
     { id: "mX-lY", slides: [slide1, slide2, slide3, slide4] }
   ];
   ```

## 📋 Módulos Disponibles

- **module-1:** Fundamentos y zonas de seguridad
- **module-2:** Técnicas avanzadas  
- **module-3:** Evaluación final

## 🎨 Personalización por Módulo

Cada módulo puede tener:
- **assets/** propios (imágenes, audio, video)
- **styles/** CSS específico
- **slides/** numerados secuencialmente
- **glossary/** términos del módulo
- **completion/** pantalla final

## 🔄 Flujo de Trabajo

1. **Editar contenido:** Modificar archivos `.ts` en cada carpeta
2. **Agregar recursos:** Colocar en `assets/` correspondiente
3. **Personalizar estilos:** Editar `styles/module-X.css`
4. **Probar cambios:** Recargar la aplicación

Esta estructura hace que sea muy fácil para cualquiera modificar, agregar o reorganizar contenido sin romper el flujo del curso.

