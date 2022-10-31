import { Button, Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export const AddModuleButton = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div id="x">
      <Button
        className="m-3"
        variant="secondary"
        onClick={() => setModalShow(true)}
      >
        Add modules
      </Button>

      <SearchModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export const SearchModal = (props) => {
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

  const filterPosts = (modules, query) => {
    if (!query) {
      return modules;
    }

    return modules.filter((module) => {
      const postName = module.name.toLowerCase();
      return postName.includes(query);
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(modules, searchQuery);

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
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div>
          {filteredPosts
            ? filteredPosts.map((module, index) => (
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

export const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="searchBar">
        <Form.Control
          type="text"
          name="s"
          placeholder="Search by name"
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
        />
        <Form.Text className="text-muted">Let's hope we have it.</Form.Text>
      </Form.Group>
    </Form>
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
