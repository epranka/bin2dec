import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [binaryIsValid, setBinaryIsValid] = useState(true);
  const [binaryValue, setBinaryValue] = useState("");
  const [decimalValue, setDecimalValue] = useState("");

  const formatValue = value => {
    return value
      .replace(/(\d{4})/g, "$1 ")
      .replace(/\s+/g, " ")
      .replace(/^\s+|\s+$/g, "");
  };

  const handleBinaryValueChange = e => {
    let value = String(e.target.value);
    if (!value) {
      setBinaryValue("");
      setBinaryIsValid(true);
    } else {
      setBinaryIsValid(/^([01\s]+)$/.test(value));
      setBinaryValue(formatValue(value));
    }
  };

  const calculateDecimal = binaryString => {
    let decimalResult = 0;
    for (
      let i = 0, j = binaryString.length - 1;
      i < binaryString.length;
      i++, j--
    ) {
      const digit = parseInt(binaryString[i]);
      decimalResult += digit * Math.pow(2, j);
    }
    return decimalResult;
  };

  useEffect(() => {
    if (binaryIsValid && binaryValue) {
      const decimalValue = calculateDecimal(binaryValue.replace(/\s+/g, ""));
      setDecimalValue(decimalValue);
    } else {
      setDecimalValue("");
    }
  }, [binaryValue, binaryIsValid]);

  return (
    <div id="bin2dec">
      <h1 id="header">Bin2Dec</h1>
      <input
        id="binary"
        className={binaryIsValid ? "" : "invalid"}
        type="text"
        placeholder="1010 1010"
        value={binaryValue}
        onChange={handleBinaryValueChange}
      />
      <div id="decimal">{decimalValue}</div>
    </div>
  );
}

export default App;
