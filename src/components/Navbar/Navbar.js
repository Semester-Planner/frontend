import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Login, Logout } from "../Authentication/Login";

export default function Navigation() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">The Semester Planner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="timeline">Timeline</Nav.Link>
            <Nav.Link href="modules">Modules</Nav.Link>
            <Nav.Link href="">
              <Login />
            </Nav.Link>
            <Nav.Link href="">
              <Logout />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
