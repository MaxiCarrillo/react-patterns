import { useState } from "react";

export const ButtonError = () => {
    const [throwError, setThrowError] = useState(false);

    if (throwError) {
        throw new Error("Error lanzado desde el botón");
    }

    const handleClick = () => {
        setThrowError(true);
    }
    
    return (
        <button onClick={handleClick}>
            Click para lanzar un error
        </button>
    )
}
