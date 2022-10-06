import { useState, useEffect } from "react";
import "./Module_view.css";

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

  return (
    <div className="modulesGallery">
      {modules
        ? modules.map((module, index) => {
            return (
              <Module
                module={module}
                key={index}
                onClick={() => checkActive(index)}
                active={active === index}
              />
            );
          })
        : props.modules.map((module, index) => {
            return (
              <Module
                module={module}
                key={index}
                onClick={() => checkActive(index)}
                active={active === index}
              />
            );
          })}
    </div>
  );
};

ModuleGallery.defaultProps = {
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
  ],
};
