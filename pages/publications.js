import React from "react"
import { Typography, Card, CardContent, CardMedia, CardActionArea, Grid, CardActions } from "@mui/material"

import data from "./api/data"
const publications = () => {
  return (
    <div>
      {data.publications.map((publication, key) => {
        return <Typography margin={5}>{`${key + 1}. ${publication}`}</Typography>
      })}
    </div>
  )
}

export default publications
