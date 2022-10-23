import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        {" "}
        Log in{" "}
      </Button>

      <LoginModal show={show} onHide={handleClose} />
    </>
  );
};

export const LoginModal = (props) => {
  // const loginAPI = () => {
  //     fetch("/auth/google", {
  //     method: "GET",
  //     redirect: 'follow',
  //     mode: 'no-cors'
  //     })
  //     .then((res) => {
  //         if (res.status !== 200) throw new Error("Server not connected");
  //         return res.json()
  //     })
  //     .then((user) => console.log(user))
  //     .catch((error) => console.log(error));
  // }
  // }

  const logoutAPI = () => {
    fetch("/auth/logout", {
      method: "GET",
      // mode: 'no-cors'
    })
      .then((res) => {
        if (res.status !== 200) throw new Error("Server not connected");
        return res.json();
      })
      .then((modules) => console.log(modules))
      .catch((error) => console.log(error));
  };

  return (
    <Modal {...props} size="md" aria-labelledby="login-modal" centered>
      <Modal.Header closeButton>
        <Modal.Title> Log in to Semester Planner</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center pt-5 pb-5">
        <h5 className="pb-3">Make sure to use your CODE email.</h5>
        <Button
          id="Google"
          variant="light"
          onClick={() =>
            window.open(`http://localhost:3001/auth/google`, "_self")
          }
        >
          <img
            src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
            alt="G logo"
          />
          Sign in with Google
        </Button>
        <Button onClick={() => logoutAPI()}>Log out</Button>
      </Modal.Body>
    </Modal>
  );
};
