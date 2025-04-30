# Props Getter

>[!NOTE]
>El Props Getters pattern en React consiste en una manera de proveer un conjunto de props a los usuarios de tus componentes que van a necesitar en su implementación. La manera en que esto funciona es proveyendo una función que devolverá los valores de estado, props, funciones o cualquier otros datos de tu componente o custom hook.

## ¿Qué es el patrón Props Getter?

El **patrón Props Getter** es una técnica en React que permite exponer funciones desde un hook o componente para obtener un conjunto de propiedades preconfiguradas que pueden ser aplicadas directamente a un elemento. Este patrón facilita la extensión del comportamiento predeterminado de los componentes al permitir al usuario proporcionar propiedades adicionales que se combinarán con las ya definidas.

Esto nos ayuda a delegar una parte del control a los usuarios (quienes usen tu componente) sobre cómo se van a renderizar sus componentes.

>[!WARNING]
>Lo más común es usar este patrón en conjunto de otros patrones como custom hook, render props y control props.

## ¿Por qué es importante?

El patrón Props Getter es importante porque:

1. **Extensibilidad**: Permite a los desarrolladores añadir o sobrescribir propiedades sin modificar el comportamiento interno del componente.
2. **Reutilización**: Proporciona una manera sencilla y reutilizable de manejar la configuración de propiedades.
3. **Flexibilidad**: Facilita la personalización del comportamiento de los elementos sin comprometer la lógica interna.

## Ventajas y Desventajas

Las principales ventajas de usar custom hooks son:

- Provee un acceso a los props o valores internos de un componente o custom hook que hayas creado junto la posibilidad de extender o modificarlos.
- Flexibilidad al usuario para personalizar sus componentes.
- Combina las propiedades internas y externas de forma segura.
- Es reutilizable en diferentes componentes y casos de uso.

La principal desventaja es:

- Necesitas usarlo en conjunto de otro patrón para obtener los máximos beneficios.
- Puede ser difícil de entender para desarrolladores nuevos en React.
- La combinación de múltiples funciones en un evento puede resultar en errores si no se maneja adecuadamente.

## ¿En qué casos aplicar el patrón Props Getter?

- Quieres proveer un acceso a los props de tu componente o valores internos de un custom hook de una manera centralizada.
- Quieres proveer una extensión en los valores internos de un custom hook con la opción de sobreescribir o extender dichos valores.
- Dar el control al usuario de utilizar los props de tu componente para que los aplique en su interfaz en la manera que desee (flexibilidad).

## Guía de pasos para implementar Props Getters

### 1. **Define la lógica interna del componente o hook**
   - Implementa los manejadores de eventos y el estado necesario.

### 2. **Crea una función getter para las propiedades**
   - Define una función que retorne las propiedades necesarias para un elemento específico.

### 3. **Combina propiedades externas e internas**
   - Usa un método como `Object.assign` o el operador spread (`...`) para combinar las propiedades externas con las internas.

### 4. **Permite la extensión de manejadores**
   - Combina funciones usando un helper como `callAll` para extender el comportamiento de eventos.

### 5. **Expón el getter**
   - Retorna la función getter desde el componente o hook para que pueda ser utilizada por el usuario.

## Ejemplo práctico: Props Getter en un Formulario de Registro

El siguiente ejemplo implementa un hook `useForm` con un patrón Props Getter para manejar formularios:

```typescript
import { useState } from "react";

// Helper para combinar múltiples manejadores de eventos
const callAllHandlers =
  (...handlers: any[]) =>
  (...args: any[]) =>
    handlers.forEach((handler) => handler && handler(...args));

// Hook personalizado con Props Getter
const useForm = (initialValues: Record<string, any> = {}) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (onSubmit: (values: Record<string, any>) => void) => {
    return (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(values);
    };
  };

  // Props Getter para los inputs
  const getInputProps = (name: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => ({
    name,
    value: values[name] || "",
    ...props,
    onChange: callAllHandlers(props.onChange, handleChange),
  });

  // Props Getter para el formulario
  const getFormProps = (onSubmit: (values: Record<string, any>) => void, props: React.FormHTMLAttributes<HTMLFormElement> = {}) => ({
    ...props,
    onSubmit: handleSubmit(onSubmit),
  });

  return { values, getInputProps, getFormProps };
};

export default useForm;

// Ejemplo de uso
import useForm from "./useForm";

const RegistrationForm = () => {
  const { getInputProps, getFormProps } = useForm({ username: "", email: "" });

  const handleSubmit = (formValues: Record<string, any>) => {
    alert(JSON.stringify(formValues, null, 2));
  };

  return (
    <form {...getFormProps(handleSubmit)}>
      <div>
        <label>Username:</label>
        <input {...getInputProps("username")} />
      </div>
      <div>
        <label>Email:</label>
        <input {...getInputProps("email", { type: "email" })} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
```

## Cheat Sheet: Implementar Props Getters en React JS

1. **Define la lógica interna**:
   - Implementa manejadores de eventos, estado o cualquier lógica necesaria.

   ```javascript
   const handleChange = (event) => {
     const { name, value } = event.target;
     setState((prev) => ({ ...prev, [name]: value }));
   };
   ```

2. **Combina propiedades externas e internas**:
   - Usa `...props` para mezclar las propiedades internas y externas.

   ```javascript
   const getInputProps = (name, props = {}) => ({
     name,
     value: state[name] || "",
     ...props,
     onChange: callAllHandlers(props.onChange, handleChange),
   });
   ```

3. **Expón las funciones getter**:
   - Retorna los getters desde el hook o componente.

   ```javascript
   return { getInputProps, getFormProps };
   ```

4. **Utiliza los getters**:
   - Usa los getters en el JSX de tu componente.

   ```javascript
   <input {...getInputProps("username")} />
   ```
