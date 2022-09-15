import Header from "./components/Header";
import React from "react";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="container">
      <Header />
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
