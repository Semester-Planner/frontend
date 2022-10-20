import { Outlet } from "react-router-dom";
import "./Custom.scss";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
