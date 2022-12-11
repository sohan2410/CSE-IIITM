import Head from "next/head"
import classes from "../styles/Home.module.css"
import { Button, Checkbox, Container, Grid, Input, List, ListItem, Typography, Box } from "@mui/material"
import { useRouter } from "next/router"
import data from "./api/data"
import createTheme from "@mui/material"
import Profile from "../components/Profile"
export default function Home(props) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      {/* <Layout> */}
      <Container maxWidth="xl" className={classes.home_box} sx={{}}>
        <Grid
          container
          spacing={3}
          // padding={'10px 60px'}
          className={classes.container}
        >
          <Grid item xs={12} md={8} className={classes.intro_box}>
            <Typography variant="h2" className={classes.intro_heading}>
              Computer Science and Engineering
            </Typography>
            <div justifyContent={"center"} className={classes.intro_text} style={{ fontFamily: "Bell MT", textAlign: "justify", marginTop: "40px", fontSize: "18px", lineHeight: "2" }} dangerouslySetInnerHTML={{ __html: data.introduction }}></div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.news_box}>
            <div>
              <Typography variant="h3" className={classes.news_heading} align="center">
                News Section
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* vision */}
            <Typography variant="h2" align="center">
              Vision
            </Typography>
            <Typography>{data.vision}</Typography>

            {/* mission */}
            <Typography variant="h2" align="center">
              Mission
            </Typography>
            <ul>
              {data.mission.map((item) => {
                return (
                  <li>
                    <Typography>{item}</Typography>
                  </li>
                )
              })}
            </ul>
            {/* programs offered by the department */}
            <Typography variant="h2" align="center">
              Programs offered by the department
            </Typography>
            <ul>
              {data.pragrams_offered.map((item) => {
                return (
                  <li>
                    <Typography>{item}</Typography>
                  </li>
                )
              })}
            </ul>

            {/* head of the department */}
            <Typography variant="h2" align="center">
              Head of the department
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Profile people={data.head_of_department} />
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* </Layout> */}
    </div>
  )
}
