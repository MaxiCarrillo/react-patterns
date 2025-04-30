# Render Props

>[!NOTE]
>A render prop is a function prop that a component uses to know what to render”.

Es decir: un render prop es una función que un componente usa para saber qué renderizar.

## ¿Qué es el patrón Render Props?

El **patrón Render Props** es una técnica en React que permite compartir lógica entre componentes al pasar una función como prop. Esta función se utiliza para renderizar contenido dinámico o para proporcionar acceso a datos y funcionalidades del componente padre.

Por ejemplo, un componente que utiliza Render Props pasaría una función como `prop`, que se ejecuta para determinar qué contenido renderizar.

## ¿Por qué es importante?

El patrón Render Props es importante porque:

1. **Separación de responsabilidades**: Facilita la separación entre lógica y presentación.
2. **Composición flexible**: Proporciona una manera declarativa de componer componentes con lógica compleja.

## Ventajas y Desventajas

Las principales ventajas al usar este patrón son:

- Reusar código entre componentes haciendo componentes más reusables.
- Flexibilidad en los componentes dejando abierto para su extensión y cerrado para su modificación (Principio Abierto - Cerrado).
- Permite personalizar la salida de un componente.
- Mejora la legibilidad y la estructura de los componentes.

Las principales desventajas al usar este patrón son:

- Puede tender al anti patrón callback hell en estructuras de componentes complejas (un componente que use un render prop donde se use otro componente que use otro render prop, etc).
- Puede generar anidación excesiva si se usa en exceso.

## ¿En qué casos aplicar el patrón Render Props?

- Tengas un componente cuyo render va a ser dinámico, es decir, puede ser un render completamente diferente (en estructura de componentes, en visualización).
- Quieras reusar lógica entre componentes usando un HOC. Si no quieres la complejidad que un HOC agrega a tu código, puedes usar render props como alternativa.

## Guía de pasos para implementar Render Props

### 1. **Identifica la lógica compartida**
   - Encuentra lógica común que pueda ser utilizada en diferentes componentes.

### 2. **Crea un componente con Render Props**
   - Define un componente que acepte una función como prop para renderizar contenido dinámico.

### 3. **Pasa la lógica al Render Prop**
   - Proporciona acceso al estado, funciones o datos necesarios a través de la función.

### 4. **Implementa el renderizado personalizado**
   - Usa la función pasada como prop para definir la salida del componente.

## Ejemplo práctico: Componente de seguimiento del mouse

En este ejemplo, crearemos un componente que utiliza el patrón Render Props para rastrear la posición del mouse.

```typescript
import { useState } from "react";

// Componente MouseTracker que utiliza Render Props
interface MouseTrackerProps {
  render: (mouse: { x: number; y: number }) => JSX.Element;
}

export const MouseTracker = ({ render }: MouseTrackerProps) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMouse({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      style={{ height: "300px", border: "1px solid black" }}
      onMouseMove={handleMouseMove}
    >
      {render(mouse)}
    </div>
  );
};

// Componente de ejemplo que usa MouseTracker
export const App = () => {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <p>
          La posición del mouse es: ({x}, {y})
        </p>
      )}
    />
  );
};
```

---

## Cheat Sheet: Implementar Render Props en React JS

1. **Crea un componente que acepte una función como prop**:
   - Define un prop como `render` o `children` que reciba una función.
   ```typescript
   interface ExampleProps {
     render: (data: any) => JSX.Element;
   }
   ```

2. **Implementa lógica compartida**:
   - Proporciona datos o funciones a la función pasada como Render Prop.
   ```typescript
   const ExampleComponent = ({ render }: ExampleProps) => {
     const [state, setState] = useState("Hello, Render Props!");
     return <div>{render(state)}</div>;
   };
   ```

3. **Usa el Render Prop para personalizar el contenido**:
   - Pasa una función al componente para definir el contenido dinámico.
   ```typescript
   <ExampleComponent render={(data) => <p>{data}</p>} />;
   ```

4. **Combina lógica y presentación**:
   - Usa el patrón Render Props para componer componentes reutilizables.
   ```typescript
   <MouseTracker
     render={({ x, y }) => <p>Mouse position: {x}, {y}</p>}
   />
   ```
