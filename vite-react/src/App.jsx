
// import React from "react";
import { BrowserRouter } from "react-router-dom";
import Links from "./Links";
import RouterFunc from "./router";



function App() {

  const uname = "Me"
  return (
    <>
      <h1>Hello React + Vite</h1>
      {/* <Chai /> */}
      <BrowserRouter>
        <Links/>
        <RouterFunc/>
      </BrowserRouter>
      <h1>Hi {uname}</h1>
      
    </>
  );
}

export default App;