// Funcion que devuelve los elementos que se encuentran en el primer array pero no en el segundo
export function not(a: string[], b: string[]) {
    return a.filter((value) => b.indexOf(value) === -1)
}

// Funcion que devuelve los elementos que se encuentran en ambos arrays
export function intersection(a: Array<string>, b: Array<string>) {
    return a.filter((value) => b.indexOf(value) !== -1)
}