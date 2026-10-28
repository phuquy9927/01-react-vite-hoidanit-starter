import './style.css';


const MyComponent = () => {
    // const hoidanit = "qui1";
    // const hoidanit = 25;
    // const hoidanit = true;
    // const hoidanit = undefined;
    // const hoidanit = null;
    // const hoidanit = [1,2,3];
    const hoidanit = {
        name: "hoidanit",
        age: 25
    }
  return (
    <>
    <div> {JSON.stringify(hoidanit)} & qui update</div>
    <div>{console.log("ERIC")}</div>
    <div className="child"
    style={{borderRadius: "10px"}}
    >child</div>
    </>
    
  );
}

const MyThirdComponent = () => {
  return (
    <div>qui</div>
  );
}

export  {MyComponent, MyThirdComponent};