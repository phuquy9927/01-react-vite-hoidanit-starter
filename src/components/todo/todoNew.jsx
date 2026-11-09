import { useState } from "react";

const TodoNew = (props) => {

     // const valueInput = "";
     const [valueInput, setValueInput] = useState("eric");

     // console.log(">>> check props: ", props);
     const {addNewTodo} = props;

     // addNewTodo();
     const handleClick = () => {
          // console.log(">>check valueInput: ", valueInput);
          addNewTodo(valueInput);
          setValueInput("");
     }
     const handleOnChange = (name) => {
         
          setValueInput(name);
     }
     return (
        <div className="todo-new">
        <input type="text" className="input"
        onChange={(event) => {handleOnChange(event.target.value)}}
        value={valueInput}
        />
        <button className="btn" style={{cursor: "pointer"}}
        onClick={handleClick}
        >Add</button>
        <div>
          my text input is {valueInput}
        </div>
      </div>
     )
}
export default TodoNew;