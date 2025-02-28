import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function NavbarComponent() {
  return (
    <Navbar>
      <Container>
        <div>
          <Navbar.Brand href="/" className="text-white fs-4">
            WAY RESEARCH & TECHNOLOGY
          </Navbar.Brand>
        </div>
        <div>
          <Nav className="ms-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white p-3 active-link" : "text-white p-3"
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-white p-3 active-link" : "text-white p-3"
              }
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? "text-white p-3 active-link" : "text-white p-3"
              }
            >
              PRODUCT & SERVICE
            </NavLink>
            <NavLink
              to="/portofolio"
              className={({ isActive }) =>
                isActive ? "text-white p-3 active-link" : "text-white p-3"
              }
            >
              PORTOFOLIO
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-white p-3 active-link" : "text-white p-3"
              }
            >
              BLOG
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-white p-3 active-link" : "text-white p-3"
              }
            >
              CONTACT US
            </NavLink>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
