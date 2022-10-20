import React from "react";
import { Outlet } from "react-router-dom";
import "./Custom.scss";

import Navbar from "./components/Navbar/Navbar";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/connection")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="container-fluid">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
