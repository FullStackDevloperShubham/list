import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import WellcomeMessage from "./components/WellcomeMessage"
import TodoItemsConxtProvider from "./store/todo-items-store"
import './App.css'


function App() {

  return (
    <>
      <TodoItemsConxtProvider>
        <center className="todo-container">
          <AppName name="TODO" />
          <AddTodo />
          <WellcomeMessage />
          <TodoItems />
        </center>
      </TodoItemsConxtProvider>


    </>
  )
}
export default App