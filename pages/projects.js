import React from "react"
import Head from "next/head"
import { Typography } from "@mui/material"
import data from "./api/data"
const projects = () => {
  return (
    <div style={{ marginTop: "2.5rem", height: "100vh" }}>
      <Head>
        <title>Projects</title>
      </Head>
      <Typography textAlign="center" variant="h4" component="h2" sx={{ fontWeight: "bold", fontFamily: "Roboto Mono" }}>
        Projects
      </Typography>
      {data.sponsored_projects.map((item, key) => {
        return <Typography key={key} margin={4} sx={{ fontFamily: "Varela Round" }}>{`${key + 1}. ${item}`}</Typography>
      })}
    </div>
  )
}

export default projects
