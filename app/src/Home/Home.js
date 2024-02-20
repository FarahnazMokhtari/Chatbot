import React from "react";
import "./Home.css";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import WidgetTable from "../components/WidgetTable/WidgetTable";
import ProgBars from "../components/progressBar/ProgBars";
import ModelTable from "../components/ModelTable/ModelTable";
import Header from "../components/Header/Header";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Button from "@mui/material/Button";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonIcon from "@mui/icons-material/Person";
import {link} from 'react-router-dom'
//=====================================Home page================================================
function Home() {
  let projectCount = 6; //get the project number
  let taskCount = 23;
  const [taskArray, setTaskStringArray] = useState([
    "Upload The Dcgan Policy To The Project X",
    "Correct The Bias At The Bert Model On Project Y",
    "Contact Advisense For Help On The Gpt35 Model Questionnaire",
  ]);

  //the value of progressbars
  const progressArray = [71, 93.4, 99.7, 53.3, 60, 60, 80];
  const labelsArray = [
    "EU AI Act",
    "DORA",
    "GDPR",
    "EU Cybersecurity Act",
    "LabeEU consumer protection law",
    "Digital Services Act (DSA)",
    "Digital Markets Act (DMA)",
  ];

  return (
    <div>
      <Header/>
      <div className="homeContainer">
        <div className="filterSection">
          <label className="counterLBL">projectCount: {projectCount}</label>
          <button className="filterBTN">
            <i class="fa-solid fa-filter" title="filter Progects"></i> Filters
          </button>
        </div>
        <div className="twoColumn">
          <div className="prgressBar-section">
            <label className="legCom">Legislation Compliance</label>
            <ProgBars progressArray={progressArray} labelsArray={labelsArray} />
          </div>
          {/* //======================================Task section======================================== */}
          <div className="tables-section">
            <div className="taskTable-section">
              <label className="titel">{taskCount} Tasks</label>
              <div>
                <ul>
                  {taskArray.map((item, index) => (
                    <div className="taskList">
                      <Stack direction="row" spacing={1}>
                      <li key={index} className="liContainer">{item}</li>
                      <div className="chipContainer">
                        <Chip
                          label="26/11"
                          size="small"     
                          color="success"                     
                          icon={<DateRangeIcon />}
                        />
                        <Chip
                          label="Oliver"
                          size="small"      
                          color="secondary"                    
                          icon={<PersonIcon />}
                        />
                        </div>
                      </Stack>
                      {/* <Button
                      size="small"
                        variant="outlined"
                        startIcon={<CalendarTodayOutlinedIcon />}
                      >
                        Delete
                      </Button> */}
                    </div>
                  ))}
                </ul>
                <button>Completed: 5</button>
                <button>In progress: 15</button>
                <button>Not started: 3</button>
              </div>
            </div>
            <div>
              <WidgetTable />
            </div>
          </div>
        </div>

        <div>
          <ModelTable />
        </div>
      </div>
    </div>
  );
}

export default Home;
