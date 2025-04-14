import './App.css'
import { TodoForm, TodoList, TodoTitle } from './modules/todo/components'
import { TodoProvider } from './modules/todo/context'

function App() {

  return (
    <>
      <TodoProvider>
        <TodoTitle>
          <h2>My TODO with Compound Pattern</h2>
        </TodoTitle>
        <main>
          <TodoForm />
        </main>
        <footer>
          <TodoList />
        </footer>
      </TodoProvider>
    </>
  )
}

export default App
