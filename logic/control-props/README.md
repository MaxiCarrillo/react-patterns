# Control Props
>[!NOTE]
>El patrón Control Props te permite crear componentes aún más flexibles y controlables, dándote el poder de controlar su estado desde fuera.

## ¿Qué es el patrón Control Props?

El **patrón Control Props** es una técnica utilizada en React que permite a un componente ser controlado o no controlado. Esto significa que el estado de un componente puede manejarse internamente (no controlado) o externamente a través de props (controlado).

Un componente controlado recibe su estado y un método para modificarlo como props. Mientras que un componente no controlado mantiene y gestiona su propio estado internamente.

## ¿Por qué es importante?

El patrón Control Props es importante porque:

1. **Flexibilidad**: Permite que el mismo componente funcione tanto en modo controlado como no controlado.
2. **Reutilización**: Facilita la reutilización de un mismo componente en diferentes contextos.
3. **Consistencia**: Proporciona un control centralizado sobre el estado cuando es necesario.
4. **Escalabilidad**: Permite manejar casos más complejos donde el estado debe ser gestionado externamente.

## Ventajas y Desventajas

Las principal ventaja de este patrón es:

- Una manera muy sencilla de dar la opción de delegar el control del estado a los usuarios de tu componente para personalizar la lógica de actualización de estado. Podemos afirmar que deja el manejo de estado abierto a su extensión y cerrado a su modificación (Principio Abierto - Cerrado).
- Funciona tanto en aplicaciones simples como complejas.
- Combina la simplicidad de componentes no controlados con la potencia de componentes controlados.

La principal desventaja es:

- En caso de que el componente consumidor quiera controlar nuestro componente, debe implementar la lógica del estado.
- Puede ser más difícil de entender y mantener para desarrolladores nuevos.

## ¿En qué casos aplicar el patrón Control Props?

El poder de este patrón es la alta flexibilidad de delegar la lógica del control de estado, por lo que es útil aplicarlo cuando requerimos flexibilidad en la manera en que un componente maneje su estado interno.

- **Componentes reutilizables**: Como botones, inputs, sliders o cualquier componente que pueda necesitar control externo.
- **Formularios**: Cuando algunos campos necesitan ser controlados por el estado global.
- **Componentes con estado condicional**: Cuando necesitas que un componente pueda ser controlado o no, dependiendo del contexto.

## Guía de pasos para implementar Control Props

### 1. **Identifica si el estado puede ser controlado externamente**
   - Define si el componente necesita recibir valores y métodos para modificarlos como props.

### 2. **Crea un componente con estado interno**
   - Implementa el estado interno del componente usando hooks como `useState`.

### 3. **Determina si el componente es controlado**
   - Usa una lógica como `isControlled` para verificar si las props necesarias están presentes.

### 4. **Maneja el estado según el modo (controlado/no controlado)**
   - Si el componente es controlado, utiliza las props para manejar el estado.
   - Si no es controlado, usa el estado interno.

### 5. **Implementa funciones auxiliares**
   - Crea funciones como `handleChange` o `handleValue` para gestionar las actualizaciones del estado.

### 6. **Proporciona un valor actual**
   - Retorna el valor actual basado en el modo del componente.
