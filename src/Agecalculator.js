import React from "react";
import { useState } from "react";
import { Button, Row, Col, CardBody, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Agecalculator.css";
function Agecalculator() {
  let [input, setInput] = useState();
  let [day, setDay] = useState("");
  let [month, setMonth] = useState("");
  let [year, setYear] = useState("");
  let handleinputchange = () => {
    let today = new Date(input);
    let newday = new Date();
    let finalday = newday.getDate() - today.getDate();
    let finalmonth = newday.getMonth() - today.getMonth();
    let finalyear = newday.getFullYear() - today.getFullYear();

    if (finalday < 0) {
      finalmonth--;
      let lastmonth = new Date(newday.getFullYear(), newday.getMonth(), 0);
      finalday += lastmonth.getDate();
    }
    if (finalmonth < 0) {
      finalyear--;
      finalmonth += 12;
    }
    setDay(finalday);
    setMonth(finalmonth);
    setYear(finalyear);
  };

  return (
    <div className="background">
      <Row>
        <Col md={4} sm={6}></Col>
        <Col md={4} sm={6}>
          <Card className="card1">
            <CardBody>
              <h3 className="heading">Age Calculator</h3>
              <Row className="row">
                <Col md={1}></Col>
                <Col md={7}>
                  {/* <span>Enter Your Age</span> */}
                  <input
                    type="date"
                    onChange={(e) => setInput(e.target.value)}
                    className="box"
                  ></input>
                </Col>
                <Col md={2}>
                  <Button
                    varient=""
                    className="button"
                    onClick={handleinputchange}
                  >
                    <span className="enter">Enter</span>
                  </Button>
                  {handleinputchange && <p>{handleinputchange}</p>}
                </Col>
              </Row>
              <Row>
                <Col md={1}> </Col>
                <Col md={10}>
                  <span className="age">
                    Your Age is:{year}years {month}Months {day}Days
                  </span>
                </Col>
                <Col md={1}></Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}

export default Agecalculator;
