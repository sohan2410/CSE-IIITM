import { Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from "@mui/material"
import { Container } from "@mui/system"
import React from "react"
import classes from "../styles/Home.module.css"
import data from "./api/data"
import Profile from "../components/Profile"
export default function people() {
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }}>
      <h1>People</h1>
      {data.faculty_members_of_the_department.map((people, key) => {
        return <Profile people={people} />
      })}
    </Grid>
  )
}
