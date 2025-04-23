import useTransferList from '../hooks/useTransferList';

export const TransferList = () => {
    const { leftList, rightList, getToogleProps, getTransferListProps } = useTransferList({
        left: ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"],
        right: ["Elemento 5", "Elemento 6"]
    })

    const { handleAllLeft, handleAllRight, handlePassCheckedToLeft, handlePassCheckedToRight } = getTransferListProps();

    const newAction = () =>
        alert("Soy una acción que extiende el comportamiento");

    const renderList = ({ list, getToogleProps }: { list: string[], getToogleProps: any }) => {
        return (
            <ul className='list'>
                {list.map((name) => (
                    <li key={name}>
                        <label>
                            <input
                                {...getToogleProps({
                                    name,
                                    onChange: newAction
                                })}
                            />
                            {name}
                        </label>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div className='list-container'>
            <section className='list'>
                {renderList({ list: leftList, getToogleProps })}
            </section>
            <section className='list-buttons'>
                <button onClick={handleAllRight}>≫</button>
                <button onClick={handlePassCheckedToRight}>&gt;</button>
                <button onClick={handlePassCheckedToLeft}>&lt;</button>
                <button onClick={handleAllLeft}>≪</button>
            </section>
            <section className='list'>
                {renderList({ list: rightList, getToogleProps })}
            </section>
        </div>
    )
}
