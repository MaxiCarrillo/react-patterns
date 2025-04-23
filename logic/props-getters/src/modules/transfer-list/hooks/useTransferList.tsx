import { useState } from "react"
import { intersection, not } from "../utils"

// Funcion que devuelve una funcion que ejecuta todas las funciones pasadas como argumento
// Se utiliza para extender el comportamiento de una funcion
const callAll =
    (...fns: any[]) =>
        (...args: any[]) =>
            fns.forEach((fn) => fn && fn(...args))

interface useTransferListType {
    left: string[];
    right: string[];
}

const useTransferList = ({ left = [], right = [] }: useTransferListType) => {
    const [checkedElements, setCheckedElements] = useState<string[]>([])
    const [leftList, setLeftList] = useState<string[]>([...left])
    const [rightList, setRightList] = useState<string[]>([...right])

    const leftChecked = intersection(checkedElements, leftList) // Funcion que obtiene los elementos seleccionados en la lista izquierda
    const rightChecked = intersection(checkedElements, rightList) // Funcion que obtiene los elementos seleccionados en la lista derecha

    const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target
        const currentIndex = checkedElements.indexOf(name)
        const newChecked = [...checkedElements] // Crea una copia del array de elementos seleccionados
        if (currentIndex === -1) {
            newChecked.push(name) // Si el elemento no está seleccionado, lo añade al array de elementos seleccionados
        } else {
            newChecked.splice(currentIndex, 1) // Si el elemento está seleccionado, lo elimina del array de elementos seleccionados
        }
        setCheckedElements(newChecked) // Actualiza el array de elementos seleccionados
    }

    // Se utiliza para pasar todos los elementos de la lista izquierda a la derecha
    const handleAllRight = () => {
        setRightList(rightList.concat(leftList)) // Se concatena la lista derecha con la lista izquierda
        setLeftList([])
    }

    // Se utiliza para pasar todos los elementos de la lista derecha a la izquierda
    const handleAllLeft = () => {
        setLeftList(leftList.concat(rightList)) // Se concatena la lista izquierda con la lista derecha
        setRightList([])
    }

    // Se utiliza para pasar los elementos seleccionados de la lista derecha a la izquierda
    const handlePassCheckedToLeft = () => {
        setLeftList(leftList.concat(rightChecked)) // Se concatena la lista izquierda con los elementos seleccionados de la lista derecha
        setRightList(not(rightList, rightChecked)) // Se eliminan los elementos seleccionados de la lista derecha
        setCheckedElements(not(checkedElements, rightChecked)) // Se eliminan los elementos seleccionados de la lista de elementos seleccionados
    }

    const handlePassCheckedToRight = () => {
        setRightList(rightList.concat(leftChecked)) // Se concatena la lista derecha con los elementos seleccionados de la lista izquierda
        setLeftList(not(leftList, leftChecked)) // Se eliminan los elementos seleccionados de la lista izquierda
        setCheckedElements(not(checkedElements, leftChecked)) // Se eliminan los elementos seleccionados de la lista de elementos seleccionados
    }

    // Se utiliza para obtener las funciones que se utilizan para pasar los elementos de una lista a otra
    const getTransferListProps = () => ({
        handleAllRight,
        handleAllLeft,
        handlePassCheckedToLeft,
        handlePassCheckedToRight,
    })

    // Se utiliza para obtener las propiedades del checkbox
    // Acá es donde se realiza el patrón Props Getters porque se le pasan las propiedades y los componentes usuarios pueden extender el comportamiento de la función
    const getToogleProps = (props: React.InputHTMLAttributes<HTMLInputElement> = {}) => ({
        type: 'checkbox',
        name: props.name,
        ...props,
        onChange: callAll(
            props.onChange,
            handleToggle
        )
    })

    return {
        leftList,
        rightList,
        getTransferListProps,
        getToogleProps
    }
}

export default useTransferList