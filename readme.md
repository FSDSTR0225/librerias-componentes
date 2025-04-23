# Componentes en React sin CSS-in-JS

🕒 **Duración total: 2 horas**

---

## 🧑‍🏫 0. Contexto inicial (5 min)

- React facilita la creación de aplicaciones basadas en componentes reutilizables.
- Las librerías de componentes optimizan este enfoque, ofreciendo elementos predefinidos para acelerar el desarrollo y garantizar consistencia. (esta es la teória)
- Sin embargo, no todas las herramientas son iguales. Algunas imponen limitaciones que pueden afectar el rendimiento o la experiencia de desarrollo

## 🟡 1. Introducción (10 min)

- ¿Por qué evitamos CSS-in-JS?
  - Problemas de rendimiento y experiencia de desarrollo.
  - Ejemplo: librerías como Material-UI, ChakraUI, etc.
- Qué usaremos: Componentes headless, TailwindCSS, DaisyUI y funcionales personalizables.

---

## 🧩 2. Componentes Headless (30 min)

- ¿Qué es un componente headless?
  - Solo lógica, tú decides los estilos.
- **Headless UI**: Dialog, Listbox, Switch
- **TanStack Table**: Sorting, paginación, filtrado
- **Radix UI**: Popover, Tabs, Slider

---

## 🎨 3. TailwindCSS + DaisyUI (25 min)

- ¿Qué es Tailwind?
  - Framework CSS utilitario.
  - Clases predefinidas para aplicar estilos.
  - Flexibilidad sin imponer un diseño preconfigurado.
- Beneficios:
  - Rapidez en el desarrollo.
  - Diseño uniforme.
  - Alta personalización.
  - Utilidades como: `px-4`, `text-lg`, `bg-primary`, etc.
- ¿Qué es DaisyUI?
  - Temas, diseño rápido, compatible con Tailwind.
  - Componentes predefinidos.
  - Eficiencia en el prototipado.
  - Temas personalizables.
- Ejercicio exprés: ficha de producto con Tailwind + DaisyUI
  - Crear una ficha de producto con Tailwind y DaisyUI.
  - Usar clases como `bg-base-100`, `text-primary`, `btn-primary`, etc.
  - Ejemplo: [DaisyUI Docs](https://daisyui.com/components/card/)

---

## 🛠️ 4. Componentes funcionales personalizables (30 min)

- 🔔 React Toastify – Notificaciones configurables
- 🧠 React Hook Form – Formularios sin dolor
- 🎨 React Icons – Iconos listos para usar
- 🔎 React Select – Selects con búsqueda y estilos
- 📅 React Datepicker – Calendario personalizable
- ⏳ React Spinners – Loaders visuales con props

---

## ✅ 5. Cierre y recursos (15 min)

- Recap de cuándo usar qué tipo de librería.
- Buenas prácticas:
  - Usa Daisy para lo visual básico.
  - Headless para lógica controlada.
  - Componentes funcionales como shortcut profesional.
- Recursos y ejercicios propuestos.
