import { createContext, useContext } from 'react';

export interface TodoContextType {
    getTodoValues: () => {
        name: string;
        isDone: boolean;
    }[];
    toogleTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (inputValue: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw new Error('useTodoContext must be used within a TodoProvider');
    }
    return context;
}

export { TodoContext, useTodoContext };
