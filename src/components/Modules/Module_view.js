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

export const ModuleGallery = (props) => {
  let gallery = [];
  const [modules, setModules] = useState(null);

  useEffect(() => {
    fetch("/user/findAllUserModules", {
      method: "POST",
      body: JSON.stringify({ userId: "f3cab624-0a6d-419c-a39e-ffc6750c6415" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200) throw new Error("Server not connected");
        res.json();
      })
      .then((modules) => setModules(modules[0].Modules))
      .catch((error) => console.log(error));
  }, []);

  // checks if server responded, otherwise seeds view for development
  modules
    ? modules.map((module, index) => {
        return gallery.push(<Module module={module} key={index} />);
      })
    : props.modules.map((module, index) => {
        return gallery.push(<Module module={module} key={index} />);
      });

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
  modules: [
    {
      name: "Web Dev",
      mod_code: "SE_21",
      department: "SE",
      coordinator: "Samuel Boguslawski",
    },
    {
      name: "Judging Technology",
      mod_code: "STS_05",
      department: "STS",
      coordinator: "Fabian Geier",
    },
    {
      name: "Design Methods",
      mod_code: "ID_06",
      department: "ID",
      coordinator: "Pras Gunasekera",
    },
    {
      name: "Communication & Presentation",
      mod_code: "PM_01",
      department: "PM",
      coordinator: "Florian Grote",
    },
    {
      name: "Design Methods",
      mod_code: "ID_06",
      department: "ID",
      coordinator: "Pras Gunasekera",
    },
  ],
};
