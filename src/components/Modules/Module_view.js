import { Row, Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

export const Module = (props) => {
  return (
    <div
      className={
        props.active
          ? "active module " + props.module.department
          : "module " + props.module.department
      }
    >
      <div className="moduleHeader" onClick={props.onClick}>
        <div className="moduleTitle">{props.module.name}</div>
        <div className={props.active ? "" : "hideToggle"}> ... </div>
      </div>
      <div className="moduleInfo">
        <p>
          (progress bar)
          <br />
          (next deadline)
        </p>
      </div>
    </div>
  );
};

export const ModuleGallery = (props) => {
  let gallery = [];
  const [modules, setModules] = useState(null);

  const [active, setActive] = useState(-1);
  const checkActive = (index) => {
    if (active === index || active !== -1) {
      setActive(-1);
    } else {
      setActive(index);
    }
  };

  useEffect(() => {
    fetch("/user/findAllUserModules", {
      method: "POST",
      body: JSON.stringify({ userId: "f3cab624-0a6d-419c-a39e-ffc6750c6415" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((modules) => setModules(modules[0].Modules));
  }, []);

  // checks if backend response worked, otherwise seeds view for development
  modules
    ? modules.map((module, index) => {
        return gallery.push(
          <Module
            module={module}
            key={index}
            onClick={() => checkActive(index)}
            active={active === index}
          />
        );
      })
    : props.modules.map((module, index) => {
        return gallery.push(
          <Module
            module={module}
            key={index}
            onClick={() => checkActive(index)}
            active={active === index}
          />
        );
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
