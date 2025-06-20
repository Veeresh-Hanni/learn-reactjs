import { useState } from 'react';
import './App.css';

function App() {

const [counter, setCounter] = useState(0); //default value


const addvalue = () => {

  if(counter < 20) {
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
  }else{
    alert(`Maximum ${counter} reached`)
    }
} 


const remValue = () => {

    if (counter > 0){
      setCounter(counter - 1);
    }else{
      alert("Can't decrease value is 0")
    }
}


const reset = () =>{
  setCounter(0);
}
return (
  <>    
    <h1>Hello React</h1>
    <h2>Counter value: {counter} </h2>

    <button onClick={addvalue}>Add Value</button> <br />
    <button  onClick={remValue}> Decrease Value</button>
    <button onClick={reset}>Reset</button>
  </>
  );
};

export default App;