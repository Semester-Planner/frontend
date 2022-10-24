import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Log in
      </Button>
      <LoginModal show={show} onHide={handleClose} />
    </>
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

export const LoginModal = (props) => {
  const loginAPI = () => {
    window.open(`http://localhost:3001/auth/google`, "_self");
  };

  return (
    <Modal {...props} size="md" aria-labelledby="login-modal" centered>
      <Modal.Header closeButton>
        <Modal.Title> Log in to Semester Planner</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center pt-5 pb-5">
        <h5 className="pb-3">Make sure to use your CODE email.</h5>
        <Button id="Google" variant="light" onClick={() => loginAPI()}>
          <img
            src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
            alt="G logo"
          />
          Sign in with Google
        </Button>
      </Modal.Body>
    </Modal>
  );
};
