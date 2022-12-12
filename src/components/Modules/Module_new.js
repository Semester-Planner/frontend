import { Button, Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

// A button that opens a modal to search for modules
export const AddModules = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="d-flex flex-column container">
      <h2 className="mb-3 mt-5 text-center">Missing something?</h2>

      <Button
        className="mb-5 p-3 border"
        variant="light"
        onClick={() => setModalShow(true)}
      >
        Add modules
      </Button>

      <SearchModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

// Fetches all modules and renders a search bar that filters modules
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

    var results = modules.filter((module) => {
      const postName = module.name.toLowerCase();
      return postName.includes(query);
    });

    return results;
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(modules, searchQuery);

  return (
    <Modal {...props} size="lg" aria-labelledby="module-search">
      <Modal.Header closeButton>
        <Modal.Title>Add modules</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="d-flex flex-column">
          {filteredPosts
            ? filteredPosts.map((module, index) =>
                index < 5 ? <QueryResponse module={module} key={index} /> : null
              )
            : null}
        </div>
      </Modal.Body>
    </Modal>
  );
};

// Renders a search bar that updates dynamically
export const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Group className="mb-3" controlId="searchBar">
        <Form.Control
          type="text"
          name="s"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Form.Text className="text-muted">Let's hope we have it.</Form.Text>
      </Form.Group>
    </Form>
  );
};

// Renders queried modules that can be added to the user's modules
export const QueryResponse = (props) => {
  const addModule = (moduleId) => {
    fetch("module/addModule", {
      method: "POST",
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

  return (
    <Button
      variant="light"
      className="p-3 m-1 border"
      onClick={() => addModule(props.module.id)}
    >
      <h6 className="m-0">{props.module.name}</h6>
    </Button>
  );
};

export default SearchModal;
