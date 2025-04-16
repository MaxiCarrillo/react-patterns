interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <>
            <h1>¡Ops! Hay un error</h1>
            <p>{message}</p>
        </>
    )
}
