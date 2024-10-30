import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DesiNav from "./Components/DesiNav";
import Navbar from "./Components/NavBar/Navbar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import LineChart from "./Chart/LineChart";
import Phones from "./Phones/Phones";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Navbar></Navbar>
      <DesiNav></DesiNav>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;
