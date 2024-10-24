import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList/ProductList";
import Footer from "./Components/Footer/Footer";

function App() {
  const product = [
    {
      id: 1,
      name: "Iphone",
      price: 10000,
      quantity: 0,
    },
    {
      id: 2,
      name: "Samsung",
      price: 34000,
      quantity: 0,
    },
    {
      id: 3,
      name: "Oppo",
      price: 343545,
      quantity: 0,
    },
    {
      id: 4,
      name: "Reamle",
      price: 57656,
      quantity: 0,
    },
  ];

  return (
    <>
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <ProductList product={product}></ProductList>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
