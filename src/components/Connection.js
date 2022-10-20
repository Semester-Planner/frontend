import React from "react";

function BackendConnection() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/connection")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div>
      <h1>Backend Connection</h1>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default BackendConnection;
