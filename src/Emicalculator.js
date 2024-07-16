import React, { useState } from "react";
import './Emicalculator.css'
import { CardBody,Card ,Button} from "react-bootstrap";
function Emicalculator() {
  let [p, setP] = useState();
  let [r, setR] = useState();
  let [n, setN] = useState();
  let [emi, setEmi] = useState();

  let handlePrincipalChange = (e) => {
    setP((e.target.value));
  };

  let handleRateChange = (e) => {
    setR((e.target.value));
  };

  let handleYearsChange = (e) => {
    setN((e.target.value));
  };

  let handleInputChange = () => {
    let monthlyRate = r / (12 * 100);
    let numberOfMonths = n * 12;
    let emi =
      (p * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
      (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

      setEmi(Math.round(emi));
  };

  return (
    <div className="background1">
      <div className="emi">
        <Card className="card1">
          <CardBody>
      <h1 className="emihead">EMI Calculator</h1>
      <hr/>
      <div className="input"> 
      <input
        type="number"
        onChange={handlePrincipalChange}
        value={p}
        placeholder="Amount"
      ></input>
      <input
        type="number"
        onChange={handleRateChange}
        value={r}
        placeholder="Interest Rate"
      ></input>
      <input
        type="number"
        onChange={handleYearsChange}
        value={n}
        placeholder="Years"
      ></input>
      </div>
      <Button  className="button-gradient" onClick={handleInputChange}>Check</Button>
      <h4 className="para">EMI: {emi}</h4>
      </CardBody>
      </Card>
      </div>
    </div>
  );
}

export default Emicalculator;
