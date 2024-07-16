import React, { useState } from "react";
import './Arithmeticalculator.css';
import { Button, Row, Col, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Arithmeticcalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    // Clear the input and result when AC is clicked
    if (value === "AC") {
      setInput("");
      setResult(null);
      return;
    }

    // Evaluate the expression when = is clicked
    if (value === "=") {
      try {
        setResult(eval(input)); // Evaluate the expression
      } catch (error) {
        setResult("Error"); // Handle invalid expressions
      }
      return;
    }

    // Append value to the input for other buttons
    setInput(input + value);
  };

  // Function to handle square root calculation
  const handleSquareRoot = () => {
    try {
      setResult(Math.sqrt(eval(input))); // Calculate the square root
    } catch (error) {
      setResult("Error");
    }
  };

  // Function to handle percentage calculation
  const handlePercentage = () => {
    try {
      setResult(eval(input) / 100); // Calculate percentage
    } catch (error) {
      setResult("Error");
    }
  };

  // Function to handle clear button
  const handleClear = () => {
    setInput(""); // Clear the input
    setResult(null);
  };

  return (
    <div
      style={{ backgroundColor: "aquamarine", height: "100vh", width: "100vw" }}
    >
      <Row>
        <Col xs={0} sm={0} md={2} lg={3} xl={3} xxl={4}></Col>
        <Col xs={12} sm={12} md={8} lg={6} xl={6} xxl={4}>
          <Card className="card">
            <Row>
              <Col>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="0"
                  className="formcontrol"
                  value={result !== null ? result : input}
                  readOnly
                />
              </Col>
            </Row>

            <Row style={{ marginTop: "2%" }}>
              <Col>
                <Button variant="info" className="button" onClick={handleClear}>
                  C
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  className="button"
                  onClick={handlePercentage}
                >
                  %
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  className="button"
                  onClick={handleSquareRoot}
                >
                  √
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  className="button"
                  onClick={() => handleButtonClick("AC")}
                >
                  AC
                </Button>
              </Col>
            </Row>

            <Row style={{ marginTop: "2%" }}>
              <Col>
                <Button
                  variant="info"
                  className="number"
                  onClick={() => handleButtonClick("7")}
                >
                  7
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  className="number"
                  onClick={() => handleButtonClick("8")}
                >
                  8
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  className="number"
                  onClick={() => handleButtonClick("9")}
                >
                  9
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  className="operator"
                  onClick={() => handleButtonClick("+")}
                >
                  +
                </Button>
              </Col>
            </Row>

            <Row style={{ marginTop: "2%" }}>
              <Col>
                <Button
                  variant="info"
                  className="number"
                  onClick={() => handleButtonClick("4")}
                >
                  4
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  className="number"
                  onClick={() => handleButtonClick("5")}
                >
                  5
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  className="number"
                  onClick={() => handleButtonClick("6")}
                >
                  6
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  className="operator"
                  onClick={() => handleButtonClick("-")}
                >
                  -
                </Button>
              </Col>
            </Row>

            <Row style={{ marginTop: "2%" }}>
              <Col>
                <Button
                  variant="info"
                  className="number"
                  onClick={() => handleButtonClick("1")}
                >
                  1
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  className="number"
                  onClick={() => handleButtonClick("2")}
                >
                  2
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  className="number"
                  onClick={() => handleButtonClick("3")}
                >
                  3
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  className="operator"
                  onClick={() => handleButtonClick("/")}
                >
                  ÷
                </Button>
              </Col>
            </Row>

            <Row style={{ marginTop: "2%" }}>
              <Col>
                <Button
                  variant="info"
                  className="number"
                  onClick={() => handleButtonClick("0")}
                >
                  0
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  className="operator"
                  onClick={() => handleButtonClick(".")}
                >
                  .
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  className="button"
                  onClick={() => handleButtonClick("=")}
                >
                  =
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  className="operator"
                  onClick={() => handleButtonClick("*")}
                >
                  *
                </Button>
              </Col>
            </Row>

            <Card.Body></Card.Body>
          </Card>
        </Col>
        <Col xs={0} sm={0} md={2} lg={3} xl={3} xxl={4}></Col>
      </Row>
    </div>
  );
}

export default Arithmeticcalculator;
