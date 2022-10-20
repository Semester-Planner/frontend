import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Custom.scss";

import Navbar from "./components/Navbar/Navbar";
import { ModuleGallery } from "./components/Modules/Module_view";

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
      <Routes>
        <Route path="modules" element={<ModuleGallery />} />
        <Route
          path="connection"
          element={data ? <h2>{data}</h2> : <h2>Loading..</h2>}
        />
      </Routes>
    </div>
  );
}

export default App;
