import { Button } from "react-bootstrap";

import App from "../../App";

export const CheckAuth = () => {
  useEffect(() => {
    fetch("/auth/session", {})
      .then((res) => {
        if (res.status === 401) return (window.location.href = "/login");
      })
      .catch((error) => console.log(error));
  }, []);

  return <App />;
};

export const Login = () => {
  const loginAPI = () => {
    window.open(`http://localhost:3001/auth/google`, "_self");
  };

  return (
    <div id="xy" className="border p-5 rounded bg-light text-center">
      {/* <svg>
        <path d="M13.3,20.5c-3.6,0-6.5-3.2-6.5-7.1s2.9-7.1,6.5-7.1c1.7,0,3.3,0.8,4.5,2l4.6-4.5C19.9,1.5,16.7,0,13.1,0C5.9,0,0,6,0,13.5 C0,20.9,5.9,27,13.1,27c3.6,0,6.9-1.5,9.2-3.9l-4.6-4.5C16.6,19.8,15,20.5,13.3,20.5z M32.2,0.6L19.5,13l-0.4,0.4l13.1,12.9l4.5-4.4 l-8.9-8.4L36.7,5L32.2,0.6z M67.3,0.9h-8.6V26h8.7C75.3,26,81,21.2,81,13.5C81,5.7,75.3,0.9,67.3,0.9z M67.3,20.4h-2.1V6.6h2.1 c4.6,0,7,3,7,6.9C74.3,17.2,71.7,20.4,67.3,20.4z M102.6,6.6V0.9H84V26h18.6v-5.6H90.5v-4.3h11.8v-5.6H90.5V6.6 C90.5,6.6,102.6,6.6,102.6,6.6z M42.8,0.6L38.3,5l8.9,8.5l-8.9,8.4l4.5,4.4l13.1-12.9L55.5,13L42.8,0.6z" 
        fill="black">
        </path>
      </svg> */}
      <h3> Log in to Semester Planner</h3>
      <h6 className="p-3">Make sure to use your CODE email</h6>
      <Button id="Google" variant="light" onClick={() => loginAPI()}>
        <img
          src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
          alt="G logo"
        />
        Sign in with Google
      </Button>
    </div>
  );
};

export const Logout = () => {
  const logoutAPI = () => {
    fetch("/auth/logout", {})
      .then((res) => {
        if (res.status !== 200) throw new Error("Something's wrong");
        return (window.location.href = "/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Button variant="secondary" onClick={() => logoutAPI()}>
      Log out
    </Button>
  );
};
