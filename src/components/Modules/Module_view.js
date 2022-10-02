import { useState } from "react";

export const ModuleGallery = (props) => {
  const [clicked, handleClick] = useState(false);
  return (
    <div className="modulesGallery">
      {props.modules.map((module) => {
        return (
          <div
            className={clicked ? "module active" : "module" + module.department}
          >
            <a href={module.mod_code} onClick={() => handleClick(!clicked)}>
              <div className="moduleTitle">{module.name}</div>
            </a>
          </div>
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
