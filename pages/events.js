import React from "react"
import Head from "next/head"
import { Typography } from "@mui/material"

const events = () => {
  return (
    <div style={{ paddingTop: "2.5rem", height: "100vh" }}>
      <Head>
        <title>Events</title>
      </Head>
      <Typography textAlign="center" variant="h4" component="h2" sx={{ fontWeight: "bold", fontFamily: "Roboto Mono" }}  >
        To be Announced...
      </Typography>
    </div>
  )
}

export default events
