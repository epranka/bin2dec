<h1 align="center" style="border-bottom: none;">Bin2Dec</h1>

<h3 align="center">Binary to decimal converter</h3>

<p align="center">
  <a href="https://twitter.com/epranka" title="follow on twitter">
    <img alt="twitter badge" src="https://badgen.net/badge/icon/twitter/00acee?icon=twitter&label" />
  </a>
  <a href="https://linkedin.com/in/epranka" title="connect on linkedin">
      <img alt="linkedin badge" src="https://badgen.net/badge/icon/linkedin/2867B2?label&icon=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8%2BCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzQiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDI0IDI0IgogICBoZWlnaHQ9IjI0IgogICB3aWR0aD0iMjQiPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTEwIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI%2BCiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ%2BCiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms%2BCiAgICA8L3JkZjpSREY%2BCiAgPC9tZXRhZGF0YT4KICA8ZGVmcwogICAgIGlkPSJkZWZzOCIgLz4KICA8cGF0aAogICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiCiAgICAgaWQ9InBhdGg4MjEiCiAgICAgZD0iTSA4LDE5IEggNSBWIDggaCAzIHoiIC8%2BCiAgPHBhdGgKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIgogICAgIGlkPSJwYXRoODE5IgogICAgIGQ9Im0gNi41LDYuNzMyIGMgLTAuOTY2LDAgLTEuNzUsLTAuNzkgLTEuNzUsLTEuNzY0IDAsLTAuOTc0IDAuNzg0LC0xLjc2NCAxLjc1LC0xLjc2NCAwLjk2NiwwIDEuNzUsMC43OSAxLjc1LDEuNzY0IDAsMC45NzQgLTAuNzgzLDEuNzY0IC0xLjc1LDEuNzY0IHoiIC8%2BCiAgPHBhdGgKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIgogICAgIGlkPSJwYXRoMiIKICAgICBkPSJtIDIwLDE5IGggLTMgdiAtNS42MDQgYyAwLC0zLjM2OCAtNCwtMy4xMTMgLTQsMCBWIDE5IEggMTAgViA4IGggMyB2IDEuNzY1IGMgMS4zOTYsLTIuNTg2IDcsLTIuNzc3IDcsMi40NzYgeiIgLz4KPC9zdmc%2BCg%3D%3D" /></a> 
  <a href="https://dev.to/epranka" title="follow on dev.to">
    <img alt="dev.to badge" src="https://badgen.net/badge/icon/dev.to/232221?label&icon=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8%2BCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzQiCiAgIHZlcnNpb249IjEuMSIKICAgaGVpZ2h0PSIyMzIxIgogICB3aWR0aD0iMjUwMCIKICAgdmlld0JveD0iMCAzMiA0NDcuOTk5OTk5OTk5OTk5OTQgNDQ4Ij4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGExMCI%2BCiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ%2BaW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU%2BPC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE%2BCiAgPGRlZnMKICAgICBpZD0iZGVmczgiIC8%2BCiAgPHBhdGgKICAgICBkPSJNIDcxLjgxNTI4MiwxOTguNDUwNDUgSCA5MS4xNjI1MiBjIDQuMzA0NDAzLDAgOC42MjAxMjMsMS42MDg3MyAxMi45MjQ1MSw0LjgyNTkzIDQuMjkzMzEsMy4yMTcyMSA2LjQ1NjM5LDguMDUzODYgNi40Njc0OSwxNC40ODgyNyB2IDc3LjI2ODUxIGMgMCw2LjQ0NTUxIC0yLjE1MjIyLDExLjI3MTQ5IC02LjQ1NjYxLDE0LjQ4ODY5IC00LjMwNDM5NywzLjIxNzIyIC04LjYxOTY5Nyw0LjgyNTUyIC0xMi45MjQwOSw0LjgyNTUyIEggNzEuODE1MjgyIFogTSAzNi43Njk4MzksMTY0LjEwNDI4IFYgMzQ3LjY2MjE5IEggODguMjQ0OTYgYyA0MC43Njk3NCwwLjA2NjYgNTMuNjQ5OTIsLTMxLjU1MDc5IDUzLjY0OTkyLC01Mi40MTgyMyBsIC0wLjAxMTMsLTc4LjY4ODQxIGMgLTAuMDExMSwtMjAuODc4NTQgLTEzLjIzNDc5LC01Mi40NTEyNyAtNTIuNTUxMjMsLTUyLjQ1MTI3IHogbSAyMzYuNDE5ODYxLDAuMDQ0MyA0Mi43NDQ2MSwxNjAuNjM4MTUgYyAxMS43NDgzNCwyNy4zMjQwNCAzNy45ODUyMSwzNC4xMTM0NyA1Mi42MjkwMywwIEwgNDExLjIzMDE2LDE2NC4xNDg2MSBIIDM3NS4wODY0NSBMIDM0Mi4yODE4NywyOTAuMzA3MTkgMzA5LjMyMjU1LDE2NC4xNDg2MSBaIG0gLTg5LjY5MzIzLC0wLjAxMTMgYyAtMTIuMzY5NiwwLjMxMDYzIC0yMi4xNjUzNSwxMC41ODM2MiAtMjEuODY1ODIsMjIuOTUzMjEgdiAxMzguNzk0NSBjIDAuMzEwNjMsMTIuMzgwNjkgMTAuNjA1NTYsMjIuMTY1MzYgMjIuOTg2MjUsMjEuODQzNjUgaCA2OC45ODEzMyB2IC0zMi44MDQxNSBoIC01OS4xMTkwOSB2IC00Mi42MTE2MiBoIDM2LjEzMjg1IHYgLTMyLjgwNDE2IGggLTM2LjEzMjg1IHYgLTQyLjYyMjQ5IGggNTkuMTA3NzkgbCAwLjAxMTMsLTMyLjc0ODk1IHoiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMDkzODA2IgogICAgIGlkPSJwYXRoMiIgLz4KPC9zdmc%2BCg%3D%3D" />
  </a>
  <a href="https://medium.com/@epranka" title="follow on medium">
      <img alt="medium badge" src="https://badgen.net/badge/icon/medium/black?label&icon=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8%2BCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzQiCiAgIHZlcnNpb249IjEuMSIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBmaWxsLXJ1bGU9ImV2ZW5vZGQiCiAgIGhlaWdodD0iMjQiCiAgIHdpZHRoPSIyNCI%2BCiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTAiPgogICAgPHJkZjpSREY%2BCiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8%2BCiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU%2BCiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4IiAvPgogIDxwYXRoCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIKICAgICBpZD0icGF0aDIiCiAgICAgZD0iTTIuODQ2IDYuODg3Yy4wMy0uMjk1LS4wODMtLjU4Ni0uMzAzLS43ODRsLTIuMjQtMi43di0uNDAzaDYuOTU4bDUuMzc4IDExLjc5NSA0LjcyOC0xMS43OTVoNi42MzN2LjQwM2wtMS45MTYgMS44MzdjLS4xNjUuMTI2LS4yNDcuMzMzLS4yMTMuNTM4djEzLjQ5OGMtLjAzNC4yMDQuMDQ4LjQxMS4yMTMuNTM3bDEuODcxIDEuODM3di40MDNoLTkuNDEydi0uNDAzbDEuOTM5LTEuODgyYy4xOS0uMTkuMTktLjI0Ni4xOS0uNTM3di0xMC45MWwtNS4zODkgMTMuNjg4aC0uNzI4bC02LjI3NS0xMy42ODh2OS4xNzRjLS4wNTIuMzg1LjA3Ni43NzQuMzQ3IDEuMDUybDIuNTIxIDMuMDU4di40MDRoLTcuMTQ4di0uNDA0bDIuNTIxLTMuMDU4Yy4yNy0uMjc5LjM5LS42Ny4zMjUtMS4wNTJ2LTEwLjYwOHoiIC8%2BCjwvc3ZnPgo%3D" />  
  </a>
</p>

<br />

The live converter you can find by pressing the following link [bin2dec.now.sh](https://bin2dec.now.sh).

It's created using the React Create App (CRA) boilerplate.

The idea to make bin2dec converter came from the Florin Pop app ideas [repository](https://github.com/florinpop17/app-ideas).

The inverted version of the converter **(dec2bin)** you can find there [dec2bin.now.sh](https://dec2bin.now.sh).

![bin2dec landing page animation](https://bin2dec.now.sh/bin2dec.gif)

<br />

### The main _App_ component

```jsx
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
```

<br />

### The main _App_ styles

```css
#bin2dec {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#header {
  font-size: 42px;
}

#binary {
  width: 100%;
  display: block;
  max-width: 350px;
  margin: 0 20px;
  font-size: 42px;
  text-align: center;
  background: transparent;
  color: white;
  border: 0;
  outline: 0;
  border-bottom: 1px solid white;
  margin-bottom: 30px;
}

#binary.invalid {
  color: #943838;
}

#decimal {
  font-size: 64px;
  height: 100px;
}
```

<br />

### The global styles

```css
body {
  margin: 0;
  font-family: "Karla", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

body,
html {
  margin: 0;
  padding: 0;
  background: #222222;
  color: white;
}
```
