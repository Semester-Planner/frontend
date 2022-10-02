import Header from "./components/Header";
import React from "react";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/connection")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="container">
      <Navbar />
      <Header />
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
