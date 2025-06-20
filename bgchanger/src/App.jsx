import { useState } from 'react';
import './App.css';

function App() {
  const [color , setColour] = useState("");

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
        
        <div className='fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap 
          gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer hover:bg-red-200'

            style={{backgroundColor: 'red'}}

            onClick={() => setColour('red')}
            >Red</button>

            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer hover:bg-green-400'
            onClick={() => setColour('green')}
            style={{backgroundColor: 'green' }}
            >Green</button>

            <button
            className='outline-none px-4 py-1 rounded-full text-red-500 shadow-lg cursor-pointer hover:bg-yellow-400'
            onClick={() => setColour('yellow')}
            style={{backgroundColor: 'yellow'}}

            >Yellow</button>

            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer hover:bg-blue-400'
            onClick={() => setColour('blue')}
            style={{backgroundColor: 'Blue'}}
            >Blue</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer hover:bg-brown-300'
            onClick={() => setColour("brown")}
            style={{backgroundColor: 'brown'}}
            >Brown</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer hover:bg-gray-400'
            onClick={() => setColour("gray")}
            style={{backgroundColor: 'gray'}}
            >Gray</button>

            <button
            className='outline-none px-4 py-1 rounded-full text-red-500 shadow-lg cursor-pointer hover:bg-pink-400'
            onClick={() => setColour("pink")}
            style={{backgroundColor: 'pink'}}
            >Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;