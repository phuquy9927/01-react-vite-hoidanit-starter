const TodoData = (props) => {

    const {todoList, deleteTodo} = props;
    // console.log(">>>check props: ", todoList);
    const handleClick = (id) => {
        deleteTodo(id);
    }

   
     return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log(">>>check map: ", item, index);
                return (<div className={`todo-item ${index}`} key={index}>
                    <div>{item.name}</div>
                    
                    <button style={{ cursor: "pointer"}} onClick={() => handleClick(item.id)}>Delete</button> 
                </div>)
            })}
            
           
 
      
      </div>
     )
}
export default TodoData;