import React from "react";

function BackendConnection() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/connection")
      .then((res) => {
        if (res.status != 200) throw new Error("Server not connected");
        return res.json();
      })
      .then((data) => setData(data.message))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Backend Connection</h1>
      <p>{!data ? "No backend rn" : data}</p>
    </div>
  );
}

export default BackendConnection;
