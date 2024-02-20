// Header/Header.js

import * as React from "react";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import ListDivider from "@mui/joy/ListDivider";
import NewProject from "../NewProject/NewProject";
import NewModel from "../NewModel/NewModel";

import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import ModalClose from "@mui/joy/ModalClose";

import "./Header.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@fortawesome/fontawesome-free/css/all.css";
import ProgBar from "../progressBar/ProgBar";
import { Link } from "react-router-dom";

function Header() {
  const userName = "Emma";
  // const [isOptionsVisible, setOptionsVisible] = React.useState(false);

  const buttonStyle = {
    backgroundColor: "#00334E",
    color: "#E8E8E8",
    fontSize: "20px",
    fontFamily: "Roboto",
    fontWeight: "500",
    wordWrap: "break-word",
    marginLeft: "7%",
    width: "15vw",
    height: "5vh",
    borderRadius: "20px",
    cursor: "pointer",
  };
  //=================================================new project functions===========================
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  //=================================================new Model functions===========================
  const [layout, setLayout] = React.useState(undefined);

  return (
    <div className="Header ">
      {/*--------------------------------------search and logo and user part------------------*/}
      <div className="Header1">
        <div className="Rectangle Rectangle1 ">
          <h1 className="Logo">Ethosense</h1>
          <div className="UserAndSearch">
            <div className="SearchBarContainer">
              <input
                type="Text"
                placeholder="Search..."
                className="SearchInput"
              ></input>
              <div class="search-icon">&#128269;</div>
            </div>
            <div className="user-section">
              <div className="user-icon">&#128100;</div>
              <div className="user-name">{userName}</div>
            </div>
          </div>
        </div>
      </div>
      {/*----------------------------------------register part-----------------------------------*/}
      <div className="RegisterBar">
        <div className="RectangleRegBar Rectangle">
          <Dropdown>
            <MenuButton style={buttonStyle}>+ Register</MenuButton>
            <Menu>
              <MenuItem onClick={() => setOpen(true)}> New Project</MenuItem>
              <ListDivider />
              <MenuItem onClick={() => setLayout("fullscreen")}>
                New Model
              </MenuItem>
            </Menu>
          </Dropdown>
          {/* //==========================================new project modal==================== */}
          <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog className="modalDialogStyle">
              <DialogTitle>Create new project</DialogTitle>

              <NewProject />
            </ModalDialog>
          </Modal>
          {/* //=============================================new Model modal============================== */}

          <Modal open={!!layout} onClose={() => setLayout(undefined)}>
            <ModalDialog layout={layout}>
              <ModalClose onClick={() => setLayout(undefined)} />
              <DialogTitle></DialogTitle>
              <DialogContent>
                <div>
                  <NewModel />
                </div>
              </DialogContent>
            </ModalDialog>
          </Modal>
          {/* //=================================================right side button=================================== */}
          <div>
            <button className="iconBTN">
              {" "}
              {/*comment button in registration menue */}
              <i class="fa-solid fa-comment " title="Comments"></i>
            </button>
            <button className="iconBTN">
              {" "}
              {/*Assigne button in registration menue */}
              <i class="fa-solid fa-pen-to-square " title="Assigne a task"></i>
            </button>
            <button className="iconBTN">
              {" "}
              {/*Activity button in registration menue */}
              <i class="fa-solid fa-newspaper " title="Activity log"></i>
            </button>
            <button className="iconBTN">
              {" "}
              {/*Notification button in registration menu */}
              <i class="fa-solid fa-bell " title="Notification"></i>
            </button>
          </div>
        </div>
      </div>
      {/*----------------------------------------menuBar part-----------------------------------*/}
      <div className="RegisterBar">
        <div className="RectangleRegBar Rectangle">
          <div className="nav-container">
            <ul className="nav-ul">
              <li>
                <Link to="/" className="nav-link" >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/MyProjects" className="nav-link">
                  My projects
                </Link>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Certificates and Reports
                </a>
              </li>
              <li>
                <Link to="/Files" className="nav-link" >
                  Files
                </Link>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Tasks
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Recommendations
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Learning
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
