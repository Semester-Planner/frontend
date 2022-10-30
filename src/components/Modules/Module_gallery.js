import { Row, Col, Container, Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";

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
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const NoModules = () => {
  return <h3 id="xy">You haven't added any modules yet!</h3>;
};

export const ModuleGallery = (props) => {
  let gallery = [];
  const [modules, setModules] = useState(null);

  useEffect(() => {
    fetch("/module/getAllUserModules", {})
      .then((res) => {
        if (res.status !== 200) throw new Error("Server not connected");
        return res.json();
      })
      .then((modules) => setModules(modules))
      .catch((error) => console.log(error));
  }, []);

  if (modules) {
    modules.map((module, index) => {
      return gallery.push(<Module module={module} key={index} />);
    });
  } else {
    return <NoModules />;
  }

  //dynamic layout for rows and columns
  let rowCount = Math.floor(gallery.length / props.colCount) + 1;
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
      if (index < gallery.length) {
        cols.push(
          <Col key={col} className="Column p-3" md={props.md}>
            {gallery[index]}
          </Col>
        );
        index++;
      }
    }
    return cols;
  };

  return <Container className="p-3">{buildGrid()}</Container>;
};

ModuleGallery.defaultProps = {
  colCount: 2,
  md: 6,
};
