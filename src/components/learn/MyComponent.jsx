import './style.css';


const MyComponent = () => {
  return (
    <>
    <div>qui</div>
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