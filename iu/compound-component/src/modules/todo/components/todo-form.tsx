import { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

export const TodoForm = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const { handleSubmit } = useTodoContext();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(inputValue);
        setInputValue("");
    }

    return (
        <form onSubmit={_handleSubmit}>
            <label>New todo:
                <input type="text" value={inputValue} onChange={handleInputChange} />
            </label>
            <button type='submit'>Add</button>
        </form>
    )
}
