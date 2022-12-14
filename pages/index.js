import Head from "next/head"
import classes from "../styles/Home.module.css"
import { Button, Checkbox, Container, Grid, Input, List, ListItem, Typography, Box } from "@mui/material"
import { useRouter } from "next/router"
import data from "./api/data"
import createTheme from "@mui/material"
import Profile from "../components/Profile"
import news from "./api/news"
export default function Home(props) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      {/* <Layout> */}
      <Container
        maxWidth="xl"
        className={classes.home_box} sx={{}}>
        <Grid
          container
          spacing={3}
          // padding={'10px 60px'}
          className={classes.container}
        >
          <Grid
            item xs={12}
            md={8}
            className={classes.intro_box}>
            <Typography variant="h2"
              sx={{
                fontFamily: 'Roboto Mono',
              }}

              className={classes.intro_heading}>
              Computer Science and Engineering
            </Typography>
            <div justifyContent={"center"} className={classes.intro_text}
              style={{
                fontFamily: 'Varela Round',
                textAlign: "justify",
                marginTop: "40px",
                fontSize: "18px",
                lineHeight: "1.8"
              }} dangerouslySetInnerHTML={{ __html: data.introduction }}></div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.news_box}>
            <div>
              <Typography variant="h3" className={classes.news_heading} align="center" sx={{
                fontFamily: 'Roboto Mono',
              }}>
                News Section
              </Typography>
              <ul>
                {news.map((item) => {
                  return <li style={{ fontFamily: "Bell MT", textAlign: "justify", marginTop: "50px", fontSize: "18px", lineHeight: "2" }}>{item}</li>
                })}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12}>

            {/* vision */}
            <Typography variant="h2" align="center" sx={{
              fontFamily: 'Roboto Mono',
            }}>
              Vision
            </Typography>
            <Typography style={{
              lineHeight: '1.8',
              fontSize: '18px',
              marginTop: '36px',
              marginBottom: '36px',
              fontFamily: 'Varela Round',
            }}>{data.vision}</Typography>

            {/* mission */}
            <Typography variant="h2" align="center"
              sx={{
                fontFamily: 'Roboto Mono',
              }}>
              Mission
            </Typography>
            <ul className={classes.mission_text}>
              {data.mission.map((item) => {
                return (
                  <li>
                    <Typography
                      sx={{
                        lineHeight: '1.7',
                        fontSize: '18px',
                        fontFamily: 'Varela Round'
                      }}>{item}</Typography>
                  </li>
                )
              })}
            </ul>


            {/* programs offered by the department */}
            <Typography
              variant="h2"
              align="center"
              marginTop={'40px'} sx={{
                fontFamily: 'Roboto Mono',
              }} >
              Programs offered by the department
            </Typography>

            <ul className={classes.program_text} >
              {data.pragrams_offered.map((item) => {
                return (
                  <li>
                    <Typography
                      sx={{
                        lineHeight: '1.7',
                        fontSize: '18px',
                        fontFamily: 'Varela Round',
                      }}>{item}</Typography>
                  </li>
                )
              })}
            </ul>

            {/* head of the department */}
            <Typography
              variant="h2"
              align="center" marginTop={'40px'} sx={{fontFamily: 'Roboto Mono',}}>
              Head of the department
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}>
              <Profile people={data.head_of_department} />
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* </Layout> */}
    </div >
  )
}
