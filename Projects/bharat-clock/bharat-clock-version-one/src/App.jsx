import { useState } from "react";
import "./index.css";
import Appname from "./Components/appName";
import Para from "./Components/para";
import CurrentDate from "./Components/currentDate";
function App() {
  const [count, setCount] = useState(0);

  return (
    <center>
      <Appname />
      <Para></Para>
      <CurrentDate />
    </center>
  );
}

export default App;
