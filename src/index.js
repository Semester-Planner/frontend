import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import ErrorPage from "./error";
import { Login, CheckAuth } from "./components/Authentication/Login";
import ModulePage from "./components/Modules/Module_page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CheckAuth />, // if 200, redirects to <App>
    errorElement: <ErrorPage />,
    children: [
      {
        path: "modules",
        element: <ModulePage />,
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
