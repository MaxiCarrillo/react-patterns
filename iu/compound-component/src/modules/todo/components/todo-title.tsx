import { FC, PropsWithChildren } from 'react'

export const TodoTitle: FC<PropsWithChildren> = ({ children }) => {
    return (
        <header>
            {children}
        </header>
    )
}
