import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

const assetsContaxt = createContext("Gold");

const GrandPa = () => {
    const assets = "Gold ring";
  return (
    <div className="grandpa">
        <h2>GrandPa</h2>

        
      {/* <section className="flex">
        <Dad assets={assets}></Dad>
        <Uncle assets={assets}></Uncle>
        <Aunty assets={assets}></Aunty>
      </section> */}
    </div>
  );
};

export default GrandPa;
