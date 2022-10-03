import { useState } from "react";
import "./Module_view.css";

export const Module = (item) => {
  const [clicked, handleClick] = useState(false);
  return (
    <div
      className={
        clicked
          ? "active module " + item.module.department
          : "module " + item.module.department
      }
    >
      <div className="moduleHeader" onClick={() => handleClick(!clicked)}>
        <div className="moduleTitle">{item.module.name}</div>
        <div className={clicked ? "" : "hideToggle"}> ... </div>
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
  return (
    <div className="modulesGallery">
      {props.modules.map((item, index) => {
        return <Module module={item} key={index} />;
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
