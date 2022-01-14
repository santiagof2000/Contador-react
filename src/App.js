import "./styles.css";
import {useState} from 'react';
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export default function App() {
  const [cont, setCont] = useState(0);
  
  const incrementar = (evento) => {
    evento.preventDefault();
    setCont(cont+1)
  }
  const disminuir = (evento) => {
    evento.preventDefault();
    setCont(cont-1)
  }

  return (
    <div className="App">
      <h1>Contador</h1>
      <div>
        <button onClick={incrementar}>Aumentar</button>
        </div>     
      <div>
      <button onClick={disminuir}>Disminuir</button>
      </div>
      <div>{cont}</div>
    </div>
  );
}
