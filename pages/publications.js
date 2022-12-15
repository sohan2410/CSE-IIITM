import React from "react"
import Head from "next/head"
import { Typography, Card, CardContent, CardMedia, CardActionArea, Grid, CardActions } from "@mui/material"

import data from "./api/data"
const publications = () => {
  return (
    <div style={{ marginTop: "2.5rem" }}>
      <Head>
        <title>Publications</title>
      </Head>
      <Typography textAlign="center" variant="h4" component="h2" sx={{ fontWeight: "bold", fontFamily: "Roboto Mono" }} >
        Publications
      </Typography>
      {data.publications.map((publication, key) => {
        return <Typography margin={4} sx={{ fontFamily: "Varela Round" }}>{`${key + 1}. ${publication}`}</Typography>
      })}
    </div>
  )
}

export default publications
