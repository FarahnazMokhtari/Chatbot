import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { useState } from "react";
import Header from "../Header/Header";
import "./MyProjects.css";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
// //===========================================main function===========================

export default function DataGridDemo() {
  //======================================set columns===================================
  let projectCount = 6; //get the project number

  const [isStarred, setIsStarred] = useState(false);
  const [columns, setColumn] = useState([
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "ProjectName",
      headerName: "Project Name",
      width: 150,
      editable: false,
    },
    {
      field: "NumModels",
      headerName: "No. of models applied",
      type: "number",
      width: 150,
      editable: false,
    },
    {
      field: "Owner",
      headerName: "Owner",

      width: 110,
      editable: false,
    },
    {
      field: "CreatedDate",
      headerName: "Created on",
      type: "string",
      width: 110,
      editable: false,
    },
    {
      field: "Favorites",
      headerName: "Favorites",
      type: "string",
      width: 110,
      editable: false,

      renderCell: (params) => (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <IconButton
            aria-label="fingerprint"
            color="primary"
            onClick={() => {
              setIsStarred(!isStarred);
            }}
          >
            {isStarred ? <StarBorderIcon /> : <StarIcon />}
          </IconButton>
        </div>
      ),
    },
    //  {
    //    field: "CreatedDate",
    //    headerName: "Created on",
    //   description: "This column has a value getter and is not sortable.",
    //    sortable: false,
    //   width: 160,
    //    valueGetter: (params) =>
    //      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    //  },
  ]);

  //=======================================set rows================================
  const [rows, setRows] = useState([
    {
      id: 1,
      ProjectName: "prognosis_invest",
      NumModels: "3",
      Owner: "Maria Lindström",
      CreatedDate: "2023-10-11",
    },
    {
      id: 2,
      ProjectName: "loan_invest",
      NumModels: "2",
      Owner: "Oliver Bergman",
      CreatedDate: "2023-10-11",
    },
    {
      id: 3,
      ProjectName: "aifin_wise",
      NumModels: "4",
      Owner: "Maria Lindström",
      CreatedDate: "2023-10-11",
    },
    {
      id: 4,
      ProjectName: "risk_guard",
      NumModels: "5",
      Owner: "Maria Lindström",
      CreatedDate: "2023-10-11",
    },
    {
      id: 5,
      ProjectName: "interest_rate",
      NumModels: "2",
      Owner: "Oliver Bergman",
      CreatedDate: "2023-10-11",
    },
    {
      id: 6,
      ProjectName: "interest_rate",
      NumModels: "3",
      Owner: "Maria Lindström",
      CreatedDate: "2023-10-11",
    },
  ]);
  //========================================Body======================================================
  return (
    <div>
      <Header />
      <div className="filterSection">
        <div className="counterLBL">
          <h4 style={{ margin: "0px" }}>Your Projects</h4>
          <label className=" projectsLBL">
            projects Registered: {projectCount}
          </label>
        </div>
        <button className="filterBTN">
          <i class="fa-solid fa-filter" title="filter Progects"></i> Filters
        </button>
      </div>
      {/* //=========================================table projects============================= */}
      <Container style={{ marginTop: "0px", padding: "10px" ,}}>
        <Box sx={{ height: "100%", width: "100%", }}>
          <DataGrid
            rows={rows}
            columns={columns}
            //           pageSize={5}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Container>
    </div>
  );
}
