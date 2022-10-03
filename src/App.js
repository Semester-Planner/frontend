import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { ModuleGallery } from "./components/Modules/Module_view";

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
      <ModuleGallery />
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
