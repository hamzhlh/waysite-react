import { useState } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

function NavbarComponent() {
  const [showProductService, setShowProductService] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown
  const navigate = useNavigate();

  const handleServiceClick = () => {
    setActiveDropdown("productser"); // Set active to "service"
    navigate("/waysite-react.github.io/service");
  };

  const handleProductClick = () => {
    setActiveDropdown("productser"); // Set active to "product"
    navigate("/waysite-react.github.io/product");
  };

  const handleMenuClick = () => {
    setActiveDropdown(null); // Reset active dropdown when other menu is clicked
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <div>
          <NavLink
            to="/waysite-react.github.io/home"
            className="text-white fs-4"
            onClick={handleMenuClick}
          >
            WAY RESEARCH & TECHNOLOGY
          </NavLink>
        </div>
        <div>
          <Nav className="ms-auto">
            <NavLink
              to="/waysite-react.github.io/home"
              className={({ isActive }) =>
                isActive ? "text-white p-3 active-link" : "text-white p-3"
              }
              onClick={handleMenuClick}
            >
              HOME
            </NavLink>
            <NavLink
              to="/waysite-react.github.io/about"
              className={({ isActive }) =>
                isActive ? "text-white p-3 active-link" : "text-white p-3"
              }
              onClick={handleMenuClick}
            >
              ABOUT US
            </NavLink>
            {/* PRODUCT & SERVICE Dropdown */}
            <NavDropdown
              title="PRODUCT & SERVICE"
              id="product-service-dropdown"
              className={`custom-nav ${
                activeDropdown === "productser" ? "active-link" : ""
              }`}
              onMouseEnter={() => setShowProductService(true)}
              onMouseLeave={() => setShowProductService(false)}
              show={showProductService}
            >
              {/* <NavDropdown.Item
                onClick={handleProductClick} // Handle click for "PRODUCT"
              >
                PRODUCT
              </NavDropdown.Item> */}
              <NavDropdown
                title="PRODUCT"
                id="product-sub-dropdown"
                drop="end"
                onMouseEnter={() => setShowProduct(true)}
                onMouseLeave={() => setShowProduct(false)}
                onClick={handleProductClick} // Handle click for "SERVICE"
                show={showProduct}
              >
                <NavDropdown.Item
                  as={NavLink}
                  to="/waysite-react.github.io/service/itsolution"
                  onClick={(e) => e.stopPropagation()} // Prevent bubbling
                >
                  Deep Sight
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/waysite-react.github.io/service/telecomsolution"
                  onClick={(e) => e.stopPropagation()} // Prevent bubbling
                >
                  Tutella
                </NavDropdown.Item>
              </NavDropdown>
              {/* SERVICE Dropdown */}
              <NavDropdown
                title="SERVICE"
                id="service-sub-dropdown"
                drop="end"
                onMouseEnter={() => setShowService(true)}
                onMouseLeave={() => setShowService(false)}
                onClick={handleServiceClick} // Handle click for "SERVICE"
                show={showService}
              >
                <NavDropdown.Item
                  as={NavLink}
                  to="/waysite-react.github.io/service/itsolution"
                  onClick={(e) => e.stopPropagation()} // Prevent bubbling
                >
                  IT Solution
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/waysite-react.github.io/service/telecomsolution"
                  onClick={(e) => e.stopPropagation()} // Prevent bubbling
                >
                  Telecommunication Solution
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/waysite-react.github.io/service/cybersecurity"
                  onClick={(e) => e.stopPropagation()} // Prevent bubbling
                >
                  Cybersecurity Solution
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavLink
              to="/waysite-react.github.io/portofolio"
              className={({ isActive }) =>
                isActive ? "text-white p-3 active-link" : "text-white p-3"
              }
              onClick={handleMenuClick}
            >
              PORTOFOLIO
            </NavLink>
            <NavLink
              to="/waysite-react.github.io/blog"
              className={({ isActive }) =>
                isActive ? "text-white p-3 active-link" : "text-white p-3"
              }
              onClick={handleMenuClick}
            >
              BLOG
            </NavLink>
            <NavLink
              to="/waysite-react.github.io/contact"
              className={({ isActive }) =>
                isActive ? "text-white p-3 active-link" : "text-white p-3"
              }
              onClick={handleMenuClick}
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
