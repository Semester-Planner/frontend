import { Button, Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export const AddModuleButton = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="d-flex flex-row-reverse">
      <Button
        className="rounded-circle m-3"
        variant="secondary"
        onClick={() => setModalShow(true)}
      >
        +
      </Button>

      <AddModuleModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export const AddModuleModal = (props) => {
  const [modules, setModules] = useState(null);

  useEffect(() => {
    fetch("/module/getAllModules", {})
      .then((res) => {
        if (res.status !== 200) throw new Error("Server not connected");
        return res.json();
      })
      .then((modules) => setModules(modules))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add modules
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <SearchBar />
        <div>
          {modules
            ? modules.map((module, index) => (
                <QueryResponse module={module} key={index} />
              ))
            : null}
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export const QueryResponse = (props) => {
  return (
    <div className="border p-2 pb-3 m-1">
      <h5>{props.module.name}</h5>
      <p>{props.module.department}</p>
    </div>
  );
};

export const SearchBar = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Search by name" />
        <Form.Text className="text-muted">Let's hope we have it.</Form.Text>
      </Form.Group>
    </Form>
  );
};
