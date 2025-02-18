import React, { useContext, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"; 
import { Menu, X } from "lucide-react";
import logo from '../assets/images/logo.png';
import '../css/SideNavBar.css';
import { MenuContext } from "./Context/MenuProvider";

const SideNavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { menuItems: menuSideBar } = useContext(MenuContext);

  return (
    <>
      {/* Sidebar */}
      <div
        className="text-dark vh-100"
        style={{
          position: "fixed", // Make the sidebar fixed
          top: "0",
          left: "0",
          width: isSidebarOpen ? "250px" : "80px",
          height: "100vh", // Ensure the sidebar covers the full viewport height
          transition: "all 0.3s ease",
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        }}
      >
        {/* Header Container */}
        <div
          className="d-flex align-items-center"
          style={{
            padding: "15px",
            height: "70px", 
            borderBottom: "1px solid #ddd",
            marginBottom: "20px"
          }}
        >
          <div
            style={{
              width: isSidebarOpen ? "240px" : "0",
              transition: "width 0.3s ease",
              overflow: "hidden",
            }}
          >
            <img
              src={logo}
              alt="Federal_Logo"
              className="img-fluid"
              style={{
                maxHeight: "40px",
                opacity: isSidebarOpen ? 1 : 0,
                transition: "opacity 0.3s ease",
                width: '60%',
                height: '40%',
              }}
            />
          </div>
          <Button
            variant=""
            size="sm"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="rounded-circle"
            style={{
              border: "none",
              minWidth: "40px",
              height: "40px",
              padding: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
            }}
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Menu Items */}
        <Nav className="flex-column px-2">
          {menuSideBar.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="text-dark d-flex align-items-center py-2 px-2"
              style={({ isActive }) => ({
                textDecoration: "none",
                whiteSpace: "nowrap",
                backgroundColor: isActive ? "rgba(113, 193, 225, 0.1)" : "transparent",
                transition: "all 0.3s ease",
                width: '100%'
              })}
            >
              <div
                className="d-flex align-items-center"
                style={{ minWidth: "24px" }}
              >
                {item.icon}
              </div>
              <div
                style={{
                  marginLeft: "12px",
                  opacity: isSidebarOpen ? 1 : 0,
                  transition: "opacity 0.2s ease",
                  overflow: "hidden",
                }}
              >
                {item.label}
              </div>
            </NavLink>
          ))}
        </Nav>
      </div>

      {/* Side Content (scrollable) */}
      <div
        style={{
          marginLeft: isSidebarOpen ? "250px" : "80px", // Adjust the margin to account for the sidebar width
          padding: "0px",
          height: "100vh",
          overflowY: "auto", // Enable scrolling for the content
        }}
      >
        {/* Your content goes here */}
      </div>
    </>
  );
};

export default SideNavBar;
