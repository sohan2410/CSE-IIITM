import * as React from "react"
import Head from "next/head"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import data from "./api/data"

const labs = () => {
  return (
    <div style={{ height: "100vh", paddingTop: "50px", paddingLeft: "5px" }}>
      <Head>
        <title>Labs</title>
      </Head>
      <TableContainer component={Paper}>
        <Table sx={{
          minWidth: 650,
          fontFamily: "Varela Round"
        }} aria-label="sticky table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", fontFamily: "Varela Round" }}>S No.</TableCell>
              <TableCell style={{ fontWeight: "bold", fontFamily: "Varela Round" }}>Laboratory Name</TableCell>
              <TableCell style={{ fontWeight: "bold", fontFamily: "Varela Round" }}>Location</TableCell>
              <TableCell style={{ fontWeight: "bold", fontFamily: "Varela Round" }}>Faculty-in-charge</TableCell>
              <TableCell style={{ fontWeight: "bold", fontFamily: "Varela Round" }}>Facilities</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.labs.map((lab) => {
              return (
                <TableRow key={lab.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row" sx={{ fontFamily: "Varela Round"}}>
                    {lab.id}
                  </TableCell>
                  <TableCell sx={{ fontFamily: "Varela Round"}}>{lab.laboratory_name}</TableCell>
                  <TableCell sx={{ fontFamily: "Varela Round"}}>{lab.location}</TableCell>
                  <TableCell sx={{ fontFamily: "Varela Round"}}>{lab.faculty_in_charge}</TableCell>
                  <TableCell sx={{ fontFamily: "Varela Round"}}>{lab.facilities}</TableCell>
                </TableRow>
              )
            })}
            {/* {rows.map((row) => (
            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default labs
