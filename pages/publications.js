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
      <Typography textAlign="center" variant="h5">
        Publications
      </Typography>
      {data.publications.map((publication, key) => {
        return <Typography margin={5}>{`${key + 1}. ${publication}`}</Typography>
      })}
    </div>
  )
}

export default publications
