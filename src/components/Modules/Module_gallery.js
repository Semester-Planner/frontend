import { Row, Col, Container, Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";

// Gets called under Module component
const removeModule = (moduleId) => {
  fetch("module/removeModule", {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: moduleId,
    }),
  })
    .then((res) => {
      if (res.status !== 200) throw new Error("Something went wrong :(");
      return res.text();
    })
    .catch((error) => console.log(error));
};

// Opens a popup modal with module information
export const Module = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className={"module " + props.module.department}>
        <Modal.Title>{props.module.name}</Modal.Title>
        <div className="moduleInfo">
          <p>
            (progress bar)
            <br />
            (next deadline)
          </p>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {props.module.name} ({props.module.mod_code})
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is a {props.module.department} module coordinated by{" "}
          {props.module.coordinator}.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Save Changes
          </Button>
          <Button onClick={() => removeModule(props.module.id)}>
            {" "}
            Delete{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// Fetches all user modules, renders and maps them
export const ModuleGallery = () => {
  let modules = [];
  const [userModules, setModules] = useState(null);

  useEffect(() => {
    fetch("/module/getAllUserModules", {})
      .then((res) => {
        if (res.status !== 200) throw new Error("Server not connected");
        return res.json();
      })
      .then((userModules) => setModules(userModules))
      .catch((error) => console.log(error));
  }, []);

  if (userModules) {
    userModules.map((module, index) => {
      return modules.push(<Module module={module} key={index} />);
    });
  } else {
    return null;
  }

  return <CreateGallery modules={modules} />;
};

// Creates a grid layout based on the number of user modules
export const CreateGallery = (props) => {
  let rowCount = Math.floor(props.modules.length / props.colCount) + 1;
  let index = 0;

  const buildGrid = () => {
    return renderRows();
  };

  const renderRows = () => {
    let rows = [];

    for (let row = 0; row < rowCount; row++) {
      rows.push(
        <Row className="Row" key={row}>
          {renderCols()}
        </Row>
      );
    }

    return rows;
  };

  const renderCols = () => {
    let cols = [];

    for (let col = 0; col < props.colCount; col++) {
      if (index < props.modules.length) {
        cols.push(
          <Col key={col} className="Column p-3" md={props.md}>
            {props.modules[index]}
          </Col>
        );
        index++;
      }
    }

    return cols;
  };

  return <Container className="p-3">{buildGrid()}</Container>;
};

// Enables to change design of gallery grid
CreateGallery.defaultProps = {
  colCount: 2,
  md: 6,
};
