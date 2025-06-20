import './App.css';
import Card from './components/card';
function App() {

  let myObj = {
    username: "Veeresh",
    password:"Password"
  }

  let newArr = [1,2,3,]
  return (
    <>
    <h1 className="bg-green-400 text-black rounded-xl p-4  ">Tailwind CSS</h1>
  <Card username="Veeresh" btnText="click me"/>
  <Card username="Hanni" />
    </>
  );

}

export default App;
