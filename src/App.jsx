import { useState } from 'react';

export default function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["+", "-", "*", "/", "."];

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === "" ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }
    
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  }

  const clearAll = () => {
    setCalc("");
    setResult("");
  }
  
  return (
  <section>
      <div className="calculator_container">
        <div className="calculator">
          <div className="calculator_display">
            {result ? <span> ({ result }) </span> : ""} &nbsp;
            { calc || "0" }
          </div>

          <div className="calculator_keys">
            <button onClick = { () => updateCalc ("+") } className="plus key">+</button>
            <button onClick = { () => updateCalc ("-") } className="minus key">-</button>
            <button onClick = { () => updateCalc ("*") } className="multiply key">*</button>
            <button onClick = { () => updateCalc ("/") } className="divide key">/</button>
            
            <button onClick = { deleteLast } className="delete key">DEL</button>
            
            <button onClick = { () => updateCalc ("1") } className="one key">1</button>
            <button onClick = { () => updateCalc ("2") } className="two key">2</button>
            <button onClick = { () => updateCalc ("3") } className="three key">3</button>
            <button onClick = { () => updateCalc ("4") } className="four key">4</button>
            <button onClick = { () => updateCalc ("5") } className="five key">5</button>
            <button onClick = { () => updateCalc ("6") } className="six key">6</button>
            <button onClick = { () => updateCalc ("7") } className="seven key">7</button>
            <button onClick = { () => updateCalc ("8") } className="eight key">8</button>
            <button onClick = { () => updateCalc ("9") } className="nine key">9</button>
            
            <button onClick = { () => updateCalc ("0") } className="zero key">0</button>
            <button onClick = { () => updateCalc (".") } className="decimal key">.</button>
            
            <button onClick = { clearAll } className="clear key">C</button>
            <button onClick = { calculate } className="equal key">=</button>
          </div>
        </div>
  </div>
</section>
)
}