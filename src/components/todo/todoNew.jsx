const TodoNew = (props) => {
     console.log(">>> check props: ", props);
     const {addNewTodo} = props;

     // addNewTodo();
     const handleClick = () => {
          alert("click me");
     }
     const handleOnChange = (name) => {
          console.log(">>> handleOnChange", event.target.name);
     }
     return (
        <div className="todo-new">
        <input type="text" className="input"
        onChange={(event) => {handleOnChange(event.target.value)}}
        />
        <button className="btn" style={{cursor: "pointer"}}
        onClick={handleClick}
        >Add</button>
      </div>
     )
}
export default TodoNew;