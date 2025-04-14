import { FC, PropsWithChildren, useMemo, useState } from "react";
import { TodoContext } from "./TodoContext";

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
    const [listTodos, setListTodos] = useState<{
        [key: string]: {
            name: string;
            isDone: boolean;
        }
    }>({});

    const handleSubmit = (inputValue: string) => {
        setListTodos({
            ...listTodos,
            [inputValue]: { name: inputValue, isDone: false }
        })
    }

    const toogleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target;
        setListTodos({
            ...listTodos,
            [name]: {
                ...listTodos[name],
                isDone: !listTodos[name].isDone
            }
        })
    }

    const getTodoValues = () => Object.values(listTodos);

    const providerValue = useMemo(() => ({
        getTodoValues,
        toogleTodo,
        handleSubmit
    }), [getTodoValues, toogleTodo, handleSubmit]);

    return (
        <TodoContext.Provider value={providerValue}>
            {children}
        </TodoContext.Provider>
    )
}
