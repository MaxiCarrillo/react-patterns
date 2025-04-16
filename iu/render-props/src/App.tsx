import './App.css'
import ErrorBoundary from './core/components/error-boundary'
import { ErrorMessage } from './core/components/error-message'
import { ButtonError } from './modules/button-error/button-error'

function App() {
  return (
    <>
      <p>Este es un componente destinado a romper la aplicación.</p>
      <hr />
      <ErrorBoundary fallback={
        <ErrorMessage message='Se clickeo el botón para romper la aplicación' />
      }>
        <ButtonError />
      </ErrorBoundary>
    </>
  )
}

export default App
