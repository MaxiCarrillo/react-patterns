# Custom Hooks
> [!NOTE]  
> “Un Hook personalizado es una función de JavaScript cuyo nombre comienza con ”use” y que puede llamar a otros Hooks”.

## ¿Qué son los Custom Hooks?


Los **Custom Hooks** consisten en la posibilidad de crear nuestros propios hooks para poder reusar lógica de estado entre componente.

## ¿Por qué son importantes?

Los Custom Hooks son importantes porque simplifican la gestión de lógica compleja en aplicaciones React al:

1. **Reutilización de lógica**: Permiten extraer lógica común para ser reutilizada en varios componentes.
2. **Legibilidad y mantenimiento**: Ayudan a mantener los componentes más simples y comprensibles.
3. **Organización del código**: Facilitan la separación de responsabilidades y la modularización del código.

## Ventajas y desventajas de los Custom Hooks
Las principales ventajas de usar custom hooks son:

- Permiten encapsular lógica compleja y reutilizarla en múltiples componentes.
- Favorece el mantenimiento al tener lógica de estado separada en funciones que tengan solo una sola responsabilidad.
- Fácil de testear al ser una función de javascript.
- Complemento de otros patrones.
- Puedes combinar múltiples hooks en un solo Custom Hook para casos específicos.

Las principales desventajas de usar custom hooks son:

- Limitados a la versión 16.8 de React. Aunque en teoría siempre hay que actualizar las versiones de las dependencias en nuestros proyectos.
- Si no se implementan correctamente, pueden agregar complejidad innecesaria.
- La lógica compartida puede ser más difícil de rastrear al depurar.

## ¿En qué casos aplicar los Custom Hooks?

- Cuando necesitas compartir lógica entre diferentes componentes. Ejemplos:
  1. Formularios.
  2. Suscripciones.
  3. Temporizadores.
  4. Animaciones.
- Para encapsular lógica relacionada con API (ejemplo: fetch de datos).
- Manipulación de almacenamiento local o de sesión.
- Gestión de eventos globales como `window` o `document`.

## Guía de pasos para crear un Custom Hook

1. **Identificar lógica reutilizable**:
   - Busca patrones repetidos en los componentes.

2. **Crear el Custom Hook**:
   - Define una función que comience con `use` (ejemplo: `useCustomHook`).
   - Usa hooks estándar como `useState`, `useEffect`, etc.

3. **Encapsular lógica**:
   - Mueve la lógica repetitiva al Custom Hook y retorna valores o funciones necesarias.

4. **Usar el Custom Hook**:
   - Importa el hook en los componentes donde sea necesario.

5. **Pruebas y validación**:
   - Asegúrate de que el hook funcione correctamente y tenga un manejo adecuado de errores.
