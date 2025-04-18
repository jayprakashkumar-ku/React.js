import AddTodo from "./Components/AddTodo";
import AddTodoItem2 from "./Components/AddTodoItem2";
import AppName from "./Components/AppName";
import AddTodoitem1 from "./Components/TodoItem1";
import './App.css';

function App() {
  return (
    <>
   <div className="container text-center">
  <AppName />
  <AddTodo />
  <div className="items-container">
    <AddTodoitem1 />
    <AddTodoItem2 />
  </div>
</div>

    </>
  );
}

export default App;

