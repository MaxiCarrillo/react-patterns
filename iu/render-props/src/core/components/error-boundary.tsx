import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
    fallback: ReactNode;
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
        // Update state so the next render will show the fallback UI
        // Actualizar el estado para que la siguiente representación muestre la interfaz de usuario de reserva
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return this.props.fallback;
            // You can render any custom fallback UI
            // Puedes renderizar cualquier interfaz de usuario de reserva personalizada
        }

        return this.props.children;
        // Render the children components
        // Renderiza los componentes hijos
    }
}

export default ErrorBoundary;