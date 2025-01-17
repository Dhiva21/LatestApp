import React from "react";
import { Navbar, Nav, Dropdown, Container, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Bell, Settings, User } from "lucide-react";
import { useLocation, useNavigate } from 'react-router-dom';  // Import useNavigate hook
import '../css/TopMenu.css'

const TopMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();  // Initialize navigate hook for navigation

  const getLabel = () => {
    if (location.pathname === '/trends') {
      return 'Trends';
    } else if (location.pathname === '/summary') {
      return 'Summary';
    }
    else if (location.pathname === '/flashcard') {
      return 'Flash-Card';
    }
    return ''; 
  };

  const handleLogout = () => {
    // Any logout logic (e.g., clearing tokens, user data, etc.)
    navigate('/');  // Navigate to the login page after logout
  };

  return (
    <Navbar bg="light" variant="light" className="shadow-sm mb-4">
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand className="fw-normal">
          Dashboard / <span className="sideLabel">{getLabel()}</span> 
        </Navbar.Brand>

        {/* Toggle Button for Mobile View */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Links and Icons */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            {/* Notification */}
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-notifications">Notifications</Tooltip>}
            >
              <Nav.Link href="#notifications" className="d-flex align-items-center">
                <Bell size={20} className="me-2" />
              </Nav.Link>
            </OverlayTrigger>

            {/* Settings */}
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-settings">Settings</Tooltip>}
            >
              <Nav.Link href="#settings" className="d-flex align-items-center">
                <Settings size={20} className="me-2" />
              </Nav.Link>
            </OverlayTrigger>

            {/* Profile Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle
                variant=""
                id="dropdown-profile"
                className="d-flex align-items-center"
              >
                <User size={20} className="me-2" />
                <span className="d-none d-md-inline">Profile</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#profile">
                  <User size={20} className="me-2" />
                  View Profile
                </Dropdown.Item>
                <Dropdown.Item href="#settings">
                  <Settings size={20} className="me-2" />
                  Account Settings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item  onClick={handleLogout}>
                  <Bell size={20} className="me-2" />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopMenu;
