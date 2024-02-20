import * as React from 'react';
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
//===========================Draggable dialog imports============================
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import {Link} from 'react-router-dom'

//=====================================dragable function==================
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const MyComponent = () => {
  //=====================handleClickOpen defenition=================================
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //==============================check Box menu=============================================
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 40;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = ["Emma Larson", "Oliver Bergman", "Maria Lindstrom"];

  const [ownerSelection, setOwnerSelection] = React.useState([]);
  const [collaborationSelection, setCollaborationSelection] = React.useState([]);

  const handleOwnerChange = (event) => {
    const { target: { value } } = event;
    setOwnerSelection(typeof value === "string" ? value.split(",") : value);
  };

  const handleCollaborationChange = (event) => {
    const { target: { value } } = event;
    setCollaborationSelection(typeof value === "string" ? value.split(",") : value);
  };
  //===========================================main body=============================================
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Project Name"
          variant="outlined"
        />
        {/* ==============================================Owner section========================= */}
        <FormControl sx={{ m: 1, width: 345 }}>
          <InputLabel id="owner-label">Owner</InputLabel>
          <Select
            labelId="owner-label"
            id="owner-checkbox"
            multiple
            value={ownerSelection}
            onChange={handleOwnerChange}
            input={<OutlinedInput label="Owner" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={ownerSelection.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* ==============================================Collaboration section========================= */}
        <FormControl sx={{ m: 1, width: 345 }}>
          <InputLabel id="collaboration-label">Collaboration</InputLabel>
          <Select
            labelId="collaboration-label"
            id="collaboration-checkbox"
            multiple
            value={collaborationSelection}
            onChange={handleCollaborationChange}
            input={<OutlinedInput label="Collaboration" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={collaborationSelection.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {/* ======================================create project section=========================== */}
      <React.Fragment>
        <Button variant="contained" style={{ borderRadius: 20, margin: 20 }} onClick={handleClickOpen}>
          Create
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">

          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div style={{display:'flex',flexDirection:'column'}}>
              <span style={{color:'blue'}}>
                <label style={{fontWeight:'bold',color:'black'}}>You have created the project:  </label>
                <a href='#'>risk_assessment</a>
                </span>
              <span style={{color:'black'}}>
                <label style={{fontWeight:'bold',color:'black'}}>Owner by:  </label>
                {ownerSelection.join(", ")}</span>
              <span style={{color:'black'}}>
                <label style={{fontWeight:'bold',color:'black'}} >Collaboration by:  </label>
                {collaborationSelection.join(", ")}</span>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>

            <Button variant="contained" style={{ borderRadius: 20, margin: 20 }} onClick={handleClose}>
              <Link to="/New model" style={{ textDecoration:'none' , color:'white' }}>
                +New model
              </Link>
              
            </Button>
            <Button variant="contained" style={{ borderRadius: 20, margin: 20 }} onClick={handleClose}>
              <Link to="/" style={{ textDecoration:'none' , color:'white' }}>
              Go to project
              </Link>
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
};

export default MyComponent;
