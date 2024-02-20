import * as React from "react";
import "./NewModel.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
//import { Link } from 'react-router-dom';
import "./NewModel.css";
import Box from "@mui/system/Box";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";

export default function NewModel() {
  const userName = "Emma";
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

  const names = [
    "prognosis_invest",
    "loan_invest",
    "aifin_wise",
    "risk_guard",
    "interest_rate",
    "risk_assessment",
  ];

  const [personName, setPersonName] = React.useState([]);
  const [showImage, setShowImage] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openfinalmodel, setOpenfinalmodel] = React.useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
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
      {/* //============================================Assign Multiple select project Checkmarks====================== */}
      <div style={{ marginTop: "30px", marginBottom: "15px" }}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">
            Assign a project
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="TagAssign a project" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
                {/* //<ListItemText primary={<Link to={`/project/${name}`}>{name}</Link>} /> */}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <label
          style={{
            margin: 10,
            marginTop: 50,
            fontWeight: "bold",
            color: "#00334E",
          }}
        >
          Explanation on how to use the AI Assistant to register their AI Model
        </label>
        <Box
          component="section"
          className="regAiRectangle"
          sx={{
            position: "relative",
            width: "90%",
            height: 330,
            borderRadius: 5,
            border: "1px #00334E solid",
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            paddingBottom: 3,
            paddingTop: 3,
          }}
        >
          {showImage && (
            <div
              style={{
                margin: 20,
                marginTop: 0,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  margin: 10,
                  width: "7rem",
                  height: "7rem",
                  border: "1px #00334E solid",
                  borderRadius: 5,
                  alignContent: "center",
                  fontSize: 13,
                }}
              >
                <img src="images/pdf.svg" alt="Displayed Image" />
                policy_03 project_X
              </div>
              <div
                style={{
                  margin: 10,
                  width: "7rem",
                  height: "7rem",
                  border: "1px #00334E solid",
                  borderRadius: 5,
                  fontSize: 13,
                }}
              >
                <img src="images/png.svg" alt="Displayed Image" />
                doc_16 project_Y
              </div>
              <div
                style={{
                  margin: 10,
                  width: "7rem",
                  height: "7rem",
                  border: "1px #00334E solid",
                  borderRadius: 5,
                  fontSize: 12,
                }}
              >
                <img src="images/word.svg" alt="Displayed Image" />
                Guidelines project_W
              </div>
            </div>
          )}
          <Box
            component="section"
            sx={{
              border: "1px dashed grey",
              width: "90%",
              height: 150,
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              marginLeft: 5,
              position: "absolute",
              bottom: 60,
            }}
          >
            <div className="uploadFile">
              <IconButton
                aria-label="fingerprint"
                style={{ color: "#00334E" }}
                onClick={() => setShowImage(true)}
              >
                <FileUploadOutlinedIcon />
              </IconButton>

              <div>
                <a href="#">Choose file</a> to upload or Drag and Drop
              </div>
              <div>PDF, WordDoc, JPG, PNG (max 10MB)</div>
            </div>
          </Box>

          <Button
            variant="contained"
            style={{
              backgroundColor: "#00334E",
              borderRadius: 20,
              marginTop: 10,
              marginRight: 10,
              position: "absolute",
              bottom: 10,
              right: 10,
            }}
            onClick={() => setOpenfinalmodel(true)}
          >
            Continue
          </Button>
          {/* //=================final (confarmation) modal============================================================================== */}
          <React.Fragment>
            <Modal open={openfinalmodel} onClose={() => setOpenfinalmodel(false)}>
              <ModalDialog
                aria-labelledby="nested-modal-title"
                aria-describedby="nested-modal-description"
                sx={(theme) => ({
                  [theme.breakpoints.only("xs")]: {
                    top: "unset",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: 0,
                    transform: "none",
                    maxWidth: "unset",
                  },
                })}
              >
                {/* <Typography id="nested-modal-title" level="h2"></Typography>*/}
                <Typography
                  id="nested-modal-description"
                  textColor="text.tertiary"
                > 
                  <div style={{display:"flex", flexDirection:"column",fontSize:13, fontWeight:"bold"}}>
                    <span>
                      You have uploaded the documentation regards the model:{" "}
                      <a href="#">Deep Q-Network (DQN)</a>
                    </span>
                    <span>
                      Project assigned: <a href="#">Deep Q-Network (DQN)</a>
                    </span>

                    <span>
                      Our consultant is going to assess it and get back to you.
                    </span>
                  </div>
                </Typography>
                 <Box
                  sx={{
                    mt: 1,
                    display: "flex",
                    gap: 1,
                    flexDirection: { xs: "column", sm: "row-reverse" },
                  }}
                >
                  
                  <Button
                    variant="solid"
                    style={{backgroundColor: "#00334E",
                    borderRadius: 20,color:"white"}}
                    onClick={() => setOpen(false)}
                  >
                    + New Model
                  </Button>
                  
                </Box> 
              </ModalDialog>
            </Modal>
          </React.Fragment>
        </Box>
      </div>
    </div>
  );
}
