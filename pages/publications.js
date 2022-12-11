import React from "react"
import Head from "next/head"
import { Typography, Card, CardContent, CardMedia, CardActionArea, Grid, CardActions } from "@mui/material"

import data from "./api/data"
const publications = () => {
  return (
    <div>
      <Head>
        <title>Publications</title>
      </Head>
      {data.publications.map((publication, key) => {
        return <Typography margin={5}>{`${key + 1}. ${publication}`}</Typography>
      })}
    </div>
  )
}

export default publications
