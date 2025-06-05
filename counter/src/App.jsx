import { useState } from 'react';
import './App.css';

function App() {

const [counter, setCounter] = useState(0); //default value


const addvalue = () => {

if(counter < 20) setCounter(counter + 1);
else{
  alert(`Maximum ${counter} reached`)
}
  }

const remValue = () => {

  if (counter > 0){
    setCounter(counter - 1);
  }

}


  return (
    <>
        <h1>Hello React</h1>
        <h2>Counter value: {counter} </h2>

        <button onClick={addvalue}>Add Value</button> <br />
        <button  onClick={remValue}> Decrease Value</button>

    </>
  )
}

export default App
