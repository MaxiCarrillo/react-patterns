# Compound Components

>[!NOTE]
>El compound component pattern es una solución para compartir un estado entre componentes de manera implícita, sin necesidad de pasar props directamente.
>Este patrón aprovecha al máximo la composición para que podamos implementar componentes muy flexibles que comparten un estado común pero haciendo que se comuniquen internamente sin necesidad de pasar props.

## ¿Qué es el patrón Compound Components?

El **patrón Compound Components** es una técnica en React que permite que varios componentes trabajen juntos de manera cohesiva. En lugar de usar un solo componente grande, este patrón divide la funcionalidad en componentes más pequeños que comparten un contexto común. Los usuarios pueden combinar estos componentes para personalizar la salida.

Por ejemplo, un componente como `<Select>` puede tener subcomponentes como `<Select.Option>` y `<Select.Label>` que comparten un estado común.

## ¿Por qué es importante?

El patrón Compound Components es importante porque:

1. **Flexibilidad**: Permite a los desarrolladores componer interfaces complejas utilizando componentes simples y reutilizables.
2. **Separación de responsabilidades**: Divide lógica y presentación en componentes independientes.
3. **Escalabilidad**: Facilita el crecimiento del proyecto al mantener la modularidad.
4. **Mejor experiencia para el desarrollador**: Ofrece una API declarativa que mejora la legibilidad del código.

## Ventajas y Desventajas

Las principales ventajas al usar este patrón son:

- Máxima flexibilidad en la estructura de un componente debido a que el patrón deja abierto al componente para su extensión y cerrado para su modificación (Principio de abierto - cerrado).
- Reduce la complejidad derivada al implementar otros patrones como render props.
- División de responsabilidades al tener componentes dedicados a hacer una sola cosa y que la hagan bien.
- Los subcomponentes se pueden usar en diferentes combinaciones.
- Facilitan la comprensión del código.
- Todos los componentes trabajan juntos usando un contexto común.

Las principales desventajas al usar este patrón son:

- Los subcomponentes dependen del componente principal y su contexto.
- Si usas una capa de estado como Redux o Mobx considero que aun así puedes usar este patrón, pero tienes que adaptar tus componentes a que se conecten a dicha capa (La mayoría de los ejemplos en la web son con React context).
- Requiere entender y configurar el contexto.
- Si no se maneja correctamente, puede afectar el rendimiento.

## ¿En qué casos aplicar el patrón Compound Components?

- Tienes un componente que debido a los cambios naturales de un proyecto, necesitas que sea muy flexible.
- Como corolario del punto anterior, normalmente vas a aplicar este patrón como un refactor y no a priori, es decir, no desde un inicio a menos que sepas de antemano que necesitarás la máxima flexibilidad.

## Guía de pasos para implementar Compound Components

### 1. **Identifica la lógica compartida**
   - Encuentra qué estado y lógica necesitan compartir los componentes.

### 2. **Crea un contexto**
   - Define un contexto para compartir estado y funciones.

### 3. **Implementa el proveedor (Provider)**
   - Usa un componente principal que envuelva los subcomponentes y proporcione el contexto.

### 4. **Crea los subcomponentes**
   - Define subcomponentes que utilicen el contexto para acceder al estado y las funciones.

### 5. **Ofrece una API declarativa**
   - Proporciona una estructura clara y fácil de usar para los desarrolladores.

## Ejemplo práctico: Dropdown con Compound Components

En este ejemplo, implementaremos un Dropdown con un patrón Compound Components.

```typescript
import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

// Contexto para compartir estado y funciones entre los componentes
interface DropdownContextProps {
  isOpen: boolean;
  toggleDropdown: () => void;
}

const DropdownContext = createContext<DropdownContextProps | undefined>(undefined);

const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdownContext must be used within a DropdownProvider");
  }
  return context;
};

// Proveedor del contexto
export const DropdownProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <DropdownContext.Provider value={{ isOpen, toggleDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};

// Componente principal del Dropdown
export const Dropdown: FC<PropsWithChildren> = ({ children }) => {
  return <DropdownProvider>{children}</DropdownProvider>;
};

// Botón del Dropdown
export const DropdownButton: FC<PropsWithChildren> = ({ children }) => {
  const { toggleDropdown } = useDropdownContext();
  return <button onClick={toggleDropdown}>{children}</button>;
};

// Contenido del Dropdown
export const DropdownMenu: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen } = useDropdownContext();
  return isOpen ? <div>{children}</div> : null;
};

// Elemento del Dropdown
export const DropdownItem: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

// Ejemplo de uso
export const App = () => {
  return (
    <Dropdown>
      <DropdownButton>Toggle Menu</DropdownButton>
      <DropdownMenu>
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
```

## Cheat Sheet: Implementar Compound Components en React JS

1. **Crea un contexto**:
     
```typescript
const ArticleContext = React.createContext()
```

2. **Crea Componentes que Consuman el Contexto**: Estos componentes accederán al estado y funciones compartidos a través del contexto.

```typescript
function Title() {
  const { title } = React.useContext(ArticleContext)
  return <h1>{title}</h1>
}

function Content() {
  const { content } = React.useContext(ArticleContext)
  return <p>{content}</p>
}
```

3. **Combina los Componentes en un Componente Padre con Proveedor de Contexto**: Este componente actuará como el componente compuesto, proporcionando el estado y funciones a sus hijos.

```typescript
function Article(props) {
  return (
    <ArticleContext.Provider value={props}>
      <div>
        <Title />
        <Content />
      </div>
    </ArticleContext.Provider>
  )
}
```

4. **Usa tu Componente Compuesto con Contexto**:

```typescript
<Article title="Título del Artículo" content="Contenido del artículo..." />
```
