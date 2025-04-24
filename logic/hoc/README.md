# HOC (Higher Order Component)

Un **Higher-Order Component (HOC)** es un patrón de diseño en React que permite reutilizar lógica entre componentes. Un HOC es esencialmente una función que toma un componente como argumento y retorna un nuevo componente con funcionalidad adicional.

>[!NOTE]
>En otras palabras, un HOC es una función que recibe un componente y retorna un nuevo componente enriquecido.

Ejemplo básico de un HOC:

```javascript
const withExtraProps = (WrappedComponent) => (props) => {
  const extraProps = { addedProp: 'Valor adicional' };
  return <WrappedComponent {...props} {...extraProps} />;
};
```

---

## ¿Por qué son importantes?

Los HOCs son importantes porque:

1. **Reutilización de lógica**: Permiten compartir y reutilizar lógica en diferentes componentes sin duplicar código.
2. **Mejoran la composición**: Facilitan la combinación de funcionalidades en componentes.
3. **Separación de responsabilidades**: Ayudan a mantener el código modular y legible.

## Ventajas y Desventajas

Las principales ventajas al usar un HOC son:

- Favorece el mantenimiento al tener lógica separada en una función que tenga solo una razón para cambiar **(principio de responsabilidad única)**.
- Evitamos la duplicidad de código.
- Aprovecha la naturaleza de la composición de React (que puede ser un arma de doble filo como veremos a continuación).

Las principales desventajas al usar un HOC son:

- Es posible tener una colisión de nombres de los props que el HOC inyecta y los que nosotros pasamos directamente al componente (en el ejemplo verás a qué me refiero).
- Podemos tender a incrementar demasiado nuestro árbol de componentes conforme nuestra aplicación crece en complejidad pues estamos usando la composición (esta es la parte de doble filo mencionada antes).
- Demasiados HOCs anidados pueden llevar al problema conocido como *Wrapper Hell*
- En algunos casos, **reemplazar un HOC con hooks puede ser más eficiente y moderno**.

## ¿En qué casos aplicar un HOC?

- **Añadir lógica compartida**: Como autenticación, autorización o manejo de formularios.
- **Manipulación de props**: Modificar, añadir o transformar propiedades en componentes.
- **Renderizado condicional**: Mostrar diferentes componentes basados en lógica específica.
- **Integración de funciones globales**: Como manejo de temas, internacionalización o estado global.

## Guía de pasos para crear un HOC

### 1. **Identifica funcionalidad reutilizable**
   - Busca patrones repetidos o lógica común en tus componentes.

### 2. **Crea la función HOC**
   - La función debe recibir un componente como argumento y retornar un nuevo componente con la funcionalidad adicional.

### 3. **Añade lógica específica**
   - Encapsula la lógica compartida dentro del HOC y pasa props al componente original.

### 4. **Establece un `displayName`** *(opcional)*
   - Configura un nombre para mejorar la depuración.

### 5. **Usa el HOC**
   - Envuelve el componente objetivo con el HOC y utiliza el componente resultante.
