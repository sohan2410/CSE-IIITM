import { Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from "@mui/material"
import { Container } from "@mui/system"
import React from "react"
import classes from "../styles/Home.module.css"
import data from "./api/data"
import Profile from "../components/Profile"
export default function people() {
  return (
    <div>
      <Typography textAlign="center" variant="h3">
        People
      </Typography>
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }}>
        {data.faculty_members_of_the_department.map((people, key) => {
          return <Profile people={people} />
        })}
      </Grid>
    </div>
  )
}
