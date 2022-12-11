import Head from "next/head"
import { Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from "@mui/material"
import { Container } from "@mui/system"
import React from "react"
import classes from "../styles/Home.module.css"
import data from "./api/data"
import Profile from "../components/Profile"
export default function people() {
  return (
    <div>
      <Head>
        <title>People</title>
      </Head>
      {/* <Typography textAlign="center" variant="h3" padding={2}>
        People
      </Typography> */}
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }} padding={2}>
        {data.faculty_members_of_the_department.map((people, key) => {
          return <Profile people={people} />
        })}
      </Grid>
    </div>
  )
}
