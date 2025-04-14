import { useTodoContext } from '../context/TodoContext';

export const TodoList = () => {

    const { getTodoValues, toogleTodo } = useTodoContext();

    const list = getTodoValues();

    if (!list.length) {
        return <p>The list is is empty</p>
    }

    const renderList = list.map(({ name, isDone }) => (
        <li key={name}>
            <label>
                <input
                    type="checkbox"
                    name={name}
                    checked={isDone}
                    onChange={toogleTodo}
                />
                <span className={isDone ? "line-through" : ""}>{name}</span>
            </label>
        </li>
    ))

    return (
        <ul>
            {renderList}
        </ul>
    )
}
