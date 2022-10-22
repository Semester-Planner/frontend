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
  return (
    <Modal {...props} size="md" aria-labelledby="login-modal" centered>
      <Modal.Header closeButton>
        <Modal.Title> Log in to Semester Planner</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center pt-5 pb-5">
        <h5 className="pb-3">Make sure to use your CODE email.</h5>
        <Button id="Google" variant="light">
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
