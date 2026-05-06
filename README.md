# Integracion de Slides y Componentes Reutilizables

Guia practica para esta plantilla de cursos interactivos con `Next.js + React + Tailwind + TypeScript`.

## Objetivo de este README

Este documento explica especificamente:

1. Como integrar un **slide dentro de una leccion**.
2. Como usar los **componentes reutilizables** sin rehacer estructura visual.

---

## Arquitectura base

La plantilla sigue esta jerarquia de datos:

- `CourseStructure`
  - `modules[]`
    - `lessons[]`
      - `slides[]`

Archivos clave:

- Tipos de datos: `lib/course/types.ts`
- Helpers y navegacion de estructura: `lib/course/course-structure.ts`
- Render por tipo de slide: `components/course/SlideRenderer.tsx`
- Hook de navegacion: `hooks/use-course-navigation.ts`
- Export centralizada de componentes: `components/course/index.ts`

---

## Paso a paso: integrar un slide en una leccion

### 1) Definir la leccion y su arreglo `slides`

En tu objeto de curso (por ejemplo en `lib/course/example-course.ts` o `lib/course/example-data.ts`) agrega slides dentro de una leccion:

```ts
import {
  createContentSlide,
  createActivitySlide,
  createQuizSlide,
} from "@/lib/course/course-structure";

const lesson1Slides = [
  createContentSlide("m1-l1-s1", 1, {
    topLabel: "MODULO 1",
    title: "Partes del caballo",
    paragraphs: [
      { id: "p1", text: "Contenido parametrizado del slide." },
      { id: "p2", text: "Puedes editar texto sin tocar componentes." },
    ],
    media: [
      {
        id: "img-1",
        type: "image",
        src: "/media/caballo/partes.jpg",
        caption: "Anatomia basica",
      },
    ],
  }),
  createActivitySlide("m1-l1-s2", 2, [
    {
      id: "q1",
      type: "multiple-choice",
      question: "¿Cual es la zona mas segura?",
      options: [
        { id: "a", label: "A", text: "Zona verde" },
        { id: "b", label: "B", text: "Zona roja" },
      ],
      correctAnswer: "a",
    },
  ]),
  createQuizSlide("m1-l1-s3", 3, {
    id: "quiz-zonas",
    instructions: "Relaciona cada imagen con su zona correcta.",
    items: [
      {
        id: "item-1",
        image: "/media/zonas/zona-1.jpg",
        label: "Imagen 1",
        options: ["Verde", "Amarilla", "Roja"],
        correctAnswer: "Verde",
      },
    ],
  }),
];
```

### 2) Insertar esos slides en la leccion

```ts
const lesson1 = {
  id: "m1-l1",
  number: 1,
  title: "Leccion 1",
  slides: lesson1Slides,
};
```

Luego la leccion se agrega a `module.lessons`.

### 2.1) Alinear la leccion con la secuencia de plantilla

Ahora tienes una secuencia canónica en `lib/course/course-structure.ts`:

- `DEFAULT_TEMPLATE_SEQUENCE`
- `validateTemplateSequence(course)`

Esto permite validar que el curso conserve la estructura base (portada, bienvenida, metodologia, ruta, glosario, contenido, actividad, evaluacion, completacion), sin casarte con un curso específico.

Ejemplo:

```ts
import { validateTemplateSequence } from "@/lib/course/course-structure";

const validation = validateTemplateSequence(course);

if (!validation.ok) {
  console.warn("Faltan slides requeridos:", validation.missingRequired);
}
```

### 3) Verificar que el `type` exista en el renderer

`SlideRenderer` renderiza por `slide.type`.  
Si usas tipos existentes (`content`, `activity`, `quiz`, etc.), no debes cambiar nada.

Si creas un tipo nuevo:

1. Agregalo en `SlideType` dentro de `lib/course/types.ts`.
2. Agrega su `case` en `components/course/SlideRenderer.tsx`.
3. Crea o conecta su pantalla en `components/course/screens/`.

### 4) Navegar entre slides

`use-course-navigation` ya resuelve:

- siguiente/anterior (`goToNext`, `goBack`)
- progreso (`progressPercentage`)
- slide actual (`currentSlideId`)

Uso tipico:

```tsx
const {
  currentSlideId,
  goToNext,
  goBack,
  progressPercentage,
} = useCourseNavigation({ course });
```

---

## Como usar componentes reutilizables

Todos los componentes del curso salen desde:

`components/course/index.ts`

### Import recomendado

```tsx
import {
  ContentCard,
  AudioPlayer,
  VideoPlayer,
  ImageWithOverlay,
  ContinueButton,
  MultipleChoice,
} from "@/components/course";
```

### Ejemplo real en un bloque de slide

```tsx
export function BloqueDeSlide() {
  return (
    <section className="space-y-4">
      <ContentCard variant="cream">
        <p className="text-sm leading-relaxed">
          Este texto viene de la data del curso.
        </p>
      </ContentCard>

      <AudioPlayer
        src="/audio/leccion-1-intro.mp3"
        duration="01:30"
        variant="card"
        label="Complemento de audio"
      />

      <ContinueButton onClick={() => console.log("Continuar")} />
    </section>
  );
}
```

### Componentes por categoria

- `content/`: `ContentCard`, `QuoteCard`, `ExpandableText`, `KeyComponentCard`
- `media/`: `AudioPlayer`, `VideoPlayer`, `ImageWithOverlay`, `ImageCarousel`
- `interactive/`: `MultipleChoice`, `ImageMatching`, `ScenarioQuestion`, `Checklist`, `GlossarySearch`
- `ui/`: `ContinueButton`, `FeatureBadge`, `ZoneIndicator`
- `screens/`: pantallas completas (`WelcomeScreen`, `GlossaryScreen`, etc.)

---

## Integracion con Figma (flujo recomendado)

Para mantener esta base como **plantilla**, el flujo recomendado desde Figma es:

1. Definir en Figma la identidad de marca (logo, paleta, estilos tipográficos, espaciados).
2. Mapear cada frame a un `slide.type` de la plantilla.
3. Llevar contenido a data (`lib/course/*`) y no a componentes.
4. Reutilizar componentes de `content/`, `media/`, `interactive/`, `ui/`.
5. Validar estructura con `validateTemplateSequence`.

Regla clave: Figma define el sistema visual y la secuencia; el contenido final de cada curso se inyecta por datos.

---

## Buenas practicas para no romper escalabilidad

- Mantener textos, media y actividades en `lib/course/*` (no hardcodear en pantallas).
- Reutilizar componentes existentes antes de crear uno nuevo.
- Respetar `id` unicos por modulo/leccion/slide.
- Pasar `src` validos en media (`AudioPlayer` ya protege `src` vacio, pero evita dejar placeholders en produccion).
- Si agregas una variante visual, documentarla en props del componente.

---

## Scripts utiles

- `npm run dev` -> desarrollo
- `npm run build` -> build
- `npm run start` -> ejecutar build
- `npm run lint` -> revisar calidad de codigo

