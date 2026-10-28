

import TodoNew from './components/todo/todoNew';
import './components/todo/todo.css';
import TodoData from './components/todo/todoData';
import reactLogo from './assets/react.svg'

const App = () => {

const hoidanit = "eric";
const age = 25;
const data = {
  address: "hanoi",
  country: "vietnam"
}

const addNewTodo = (name) => {
  alert(`call me ${name}`);
}

addNewTodo();

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew 
      addNewTodo={addNewTodo}/>
      <TodoData
      name={hoidanit}
      age={age}
      data={data}
      
      />
      <div className="todo-image">
        <img src={reactLogo} className="logo"></img>
      </div>
    </div>
  )
}

export default App

