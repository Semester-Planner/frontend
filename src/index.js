import { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import ErrorPage from "./error";
import { ModuleGallery } from "./components/Modules/Module_view";
import { Login } from "./components/Authentication/Login";

const CheckAuth = () => {
  useEffect(() => {
    fetch("/auth/session", {})
      .then((res) => {
        if (res.status === 401) return (window.location.href = "/login");
      })
      .catch((error) => console.log(error));
  }, []);
  return <App />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <CheckAuth />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "modules",
        element: <ModuleGallery />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
