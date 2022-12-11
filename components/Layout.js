import React, { useContext } from "react"
import { useRouter } from "next/router"
import { useState } from "react"
import Head from "next/head"

import { Divider, Drawer, CardMedia, createTheme, ThemeProvider, useMediaQuery } from "@mui/material"
import IconButton from "@mui/material/IconButton";

import {
  AppBar,
  Button,
  Container, Grid, List, ListItem, Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import classes from "./../styles/Home.module.css";
import data from "../pages/api/data";



export default function layout({ title, description, children }) {


  const [sidbarVisible, setSidebarVisible] = useState(false)
  const sidebarOpenHandler = () => {
    setSidebarVisible(true)
  }
  const sidebarCloseHandler = () => {
    setSidebarVisible(false)
  }

  const router = useRouter()
  const theme = createTheme({

    typography: {
      fontFamily: 'Abel',
      button: {
        fontWeight: 'bold',
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Abel';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/abel/v18/MwQ5bhbm2POE2V9BPQ.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }`
      }
    }
  });
  const showBelow900 = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Landing Page` : "Landing page"}</title>
        {description && <meta name="description" content={description}></meta>}

        <link href="https://fonts.googleapis.com/css2?family=Abel:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@700&display=swap" rel="stylesheet" />


        <link rel="icon" href="/favicon.ico" />

      </Head>

      <div className={classes.box}>
        <ThemeProvider theme={theme}>

          <AppBar position="static" className={classes.appBar}>
            <Grid
              container
              spacing={3}
              justifyContent="center">
              <Grid
                item
                xs={12}
                md={4}
                display="flex"
                sx={{
                  padding: '10px 0px 0px 0px '
                }}
                
                >
                {showBelow900 && <IconButton
                  edge="start"
                  aria-label="open drawer"
                  onClick={sidebarOpenHandler}
                  className={classes.menuButton}
                  sx={{
                    margin: 'auto 10px auto 0px'

                  }}
                >
                  <MenuIcon
                    onClick={sidebarOpenHandler}
                    className={classes.navbarButton} />
                </IconButton>}
                <Drawer anchor="left" open={sidbarVisible} onClose={sidebarCloseHandler}>
                  <List>
                    <ListItem>
                      <Container
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between">
                        <Typography>
                          Sidebar panel
                        </Typography>
                        <IconButton
                          aria-label="close"
                          onClick={sidebarCloseHandler}></IconButton>
                      </Container>
                    </ListItem>
                    <Divider light />
                    <ListItem>
                      <Button
                        onClick={() => router.push("/")}
                        className={classes.navLink} >
                        Home
                      </Button>
                    </ListItem>
                    <ListItem>
                      <Button
                        onClick={() => router.push("/people")}
                        className={classes.navLink} >
                        People
                      </Button>
                    </ListItem>
                    <ListItem>
                      <Button
                        onClick={() => router.push("/research")}
                        className={classes.navLink} >
                        Research
                      </Button>
                    </ListItem>
                    <ListItem>
                      <Button
                        onClick={() => router.push("/labs")}
                        className={classes.navLink} >
                        Labs
                      </Button>
                    </ListItem>
                    <ListItem>
                      <Button
                        onClick={() => router.push("/programs")}
                        className={classes.navLink} >
                        Programs
                      </Button>
                    </ListItem>
                    <ListItem>
                      <Button
                        onClick={() => router.push("/events")}
                        className={classes.navLink}>
                        Events
                      </Button>
                    </ListItem>
                  </List>
                </Drawer>
                
                <div className={classes.firstBox}>
                  <CardMedia
                    component="img"
                    image="/static/images/iiitm.png"
                    alt="IIITM"
                    style={{
                      height: "120px",
                      width: "120px",
                    }} />
                </div>
                
              </Grid>

              <Grid
                item
                md={8}
                spacing={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className={classes.secondBox}>
                  <Typography
                    className={classes.secondBox_menu}
                    onClick={() => router.push("/")}
                    sx={{
                      margin: "auto 27px",
                    }}
                  >
                    Home
                  </Typography>
                  <Typography
                    className={classes.secondBox_menu}
                    onClick={() => router.push("/people")}
                    sx={{
                      margin: "auto 27px",
                    }}
                  >
                    People
                  </Typography>
                  <Typography
                    className={classes.secondBox_menu}
                    onClick={() => router.push("/research")}
                    sx={{
                      margin: "auto 27px",
                    }}
                  >
                    Research
                  </Typography>
                  <Typography
                    className={classes.secondBox_menu}
                    onClick={() => router.push("/labs")}
                    sx={{
                      margin: "auto 27px",
                    }}
                  >
                    Labs
                  </Typography>
                  <Typography
                    className={classes.secondBox_menu}
                    onClick={() => router.push("/programs")}
                    sx={{
                      margin: "auto 27px",
                    }}
                  >
                    Programs
                  </Typography>
                  <Typography
                    className={classes.secondBox_menu}
                    onClick={() => router.push("/publications")}
                    sx={{
                      margin: "auto 27px",
                    }}
                  >
                    Publications
                  </Typography>
                  <Typography
                    className={classes.secondBox_menu}
                    onClick={() => router.push("/events")}
                    sx={{
                      margin: "auto 27px",
                    }}
                  >
                    Events
                  </Typography>
                </div>
              </Grid>
              {/* <Grid item xs={4} justifyContent="flex-end">
              <div className={classes.thirdBox}>
                <Button onClick={() => router.push("/signin")} color="inherit">
                  Login
                </Button>
              </div>
            </Grid> */}
            </Grid>
          </AppBar>

          {children}

        </ThemeProvider>

      </div>
      <footer className={classes.footer}>
        <Grid className={classes.footerGridCon} container spacing={2}>
          <Grid item sm={4}>
            {/* <List style={{ alignItems: "start" }}> */}
            <Typography variant="h5" gutterBottom>
              Contact:
            </Typography>
            <Typography>{data.head_of_department.name}</Typography>
            <Typography>{data.head_of_department.designation}</Typography>
            <Typography>{data.head_of_department.address}</Typography>
            <Typography>Email: {data.head_of_department.email}</Typography>
            <Typography>Phone: {data.head_of_department.office_phone}</Typography>
            {/* </List> */}
          </Grid>
          <Grid container sm={8} className={classes.footerGridCon}>
            <Grid item xs={3} className={classes.footerGridItem2}>
              <List>
                <ListItem>Other Pages</ListItem>
                <ListItem
                  className={classes.footerGridItem2}
                  onClick={() => router.push("/people")}>
                  People
                </ListItem>
                <ListItem
                  className={classes.footerGridItem2}
                  onClick={() => router.push("/research")}>
                  research
                </ListItem>
                <ListItem
                  className={classes.footerGridItem2}
                  onClick={() => router.push("/labs")}>
                  labs
                </ListItem>
                <ListItem
                  className={classes.footerGridItem2}
                  onClick={() => router.push("/programs")}>
                  Programs
                </ListItem>
                <ListItem
                  className={classes.footerGridItem2}
                  onClick={() => router.push("/events")} >
                  Events
                </ListItem>
              </List>
            </Grid>
          </Grid>

        </Grid>

        <hr />
        <Typography
          textAlign="end"
          style={{ padding: "10px 0 10px 0" }}>
          Developed by{" "}
          <a href="https://www.linkedin.com/in/sohan-bandary/"
            className={classes.link} target="_blank">
            Sohan Bandary
          </a>{" "}
          and{" "}
          <a href="https://www.linkedin.com/in/yana-gupta/"
            className={classes.link} target="_blank">
            Yana Gupta
          </a>
        </Typography>
      </footer>
    </div>
  )
}
