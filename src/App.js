import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [res, setRes] = useState({ message: "" });
  useEffect(() => {
    const getdata = async () => {
      const result = await fetch(`https://localhost:4000/hello`).then((res) => res.json);
      setRes(result)
    };
    getdata()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
       aqui: {res}
      </header>
    </div>
  );
}

export default App;
