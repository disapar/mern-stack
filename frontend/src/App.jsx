import { useState } from "react";

import "./App.css";
import Viewroutes from "./components/Viewroute";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Viewroutes />
    </BrowserRouter>
  );
}

export default App;
