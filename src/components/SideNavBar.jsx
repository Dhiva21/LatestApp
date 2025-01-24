import React, { useContext, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"; 
import { Menu, X, Home, Users } from "lucide-react";
import logo from '../assets/images/logo.png';
import '../css/SideNavBar.css';
import { MenuContext } from '../App'

const SideNavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    // const [label, setLabel] = useState();
 const {menuItems :menuSideBar}= useContext(MenuContext);
 console.log(menuSideBar)

  return (
    <>
      {/* Sidebar */}
      <div
        className=" text-dark vh-100"
        style={{
          width: isSidebarOpen ? "250px" : "80px",
          transition: "all 0.3s ease",
          position: "relative",
            overflow: "hidden",
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
            marginBottom:"20px"
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
              to={item.path} // Use "to" instead of "href"
              className="text-dark d-flex align-items-center py-2 px-2"
              style={({ isActive }) => ({
                textDecoration: "none",
                whiteSpace: "nowrap",
                backgroundColor: isActive ? "rgba(113, 193, 225, 0.1)" : "transparent",
                transition: "all 0.3s ease",
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
    </>
  );
};

export default SideNavBar;
