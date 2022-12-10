import React, { useContext } from "react"
import { useRouter } from "next/router"
import { useState } from "react"
import Head from "next/head"

import { Divider, Drawer, Link, CardMedia } from "@mui/material"
import IconButton from "@mui/material/IconButton"

import { AppBar, Box, Button, Checkbox, Container, Grid, Input, List, ListItem, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

import classes from "./../styles/Home.module.css"
export default function layout({ title, description, children }) {
  const [sidbarVisible, setSidebarVisible] = useState(false)
  const sidebarOpenHandler = () => {
    setSidebarVisible(true)
  }
  const sidebarCloseHandler = () => {
    setSidebarVisible(false)
  }
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Landing Page` : "Landing page"}</title>
        {description && <meta name="description" content={description}></meta>}

        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.box}>
        <AppBar position="static" className={classes.appBar}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={4} display="flex">
              <IconButton edge="start" aria-label="open drawer" onClick={sidebarOpenHandler} className={classes.menuButton}>
                <MenuIcon onClick={sidebarOpenHandler} className={classes.navbarButton} />
              </IconButton>
              <div className={classes.firstBox}>
                <CardMedia component="img" image="/static/images/iiitm.png" alt="IIITM" style={{ height: "150px", width: "150px" }} />
              </div>
              <Drawer anchor="left" open={sidbarVisible} onClose={sidebarCloseHandler}>
                <List>
                  <ListItem>
                    <Container display="flex" alignItems="center" justifyContent="space-between">
                      <Typography>Sidebar panel</Typography>
                      <IconButton aria-label="close" onClick={sidebarCloseHandler}></IconButton>
                    </Container>
                  </ListItem>
                  <Divider light />
                  <ListItem>
                    <Button onClick={() => router.push("/")}>Home</Button>
                  </ListItem>
                  <ListItem>
                    <Button onClick={() => router.push("/people")}>People</Button>
                  </ListItem>
                  <ListItem>
                    <Button onClick={() => router.push("/research")}>Research</Button>
                  </ListItem>
                  <ListItem>
                    <Button onClick={() => router.push("/labs")}>Labs</Button>
                  </ListItem>
                  <ListItem>
                    <Button onClick={() => router.push("/programs")}>Programs</Button>
                  </ListItem>
                  <ListItem>
                    <Button onClick={() => router.push("/events")}>Events</Button>
                  </ListItem>
                </List>
              </Drawer>
            </Grid>

            <Grid
              item
              xs={8}
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
      </div>
      <footer className={classes.footer}>
        <Grid className={classes.footerGridCon} container spacing={2}>
          <Grid item sm={4} className={classes.footerGridItem}>
            <List className={classes.footerList1}>
              <Container className={classes.footer_logo}>
                <CardMedia component="img" image="/static/images/iiitm.png" alt="IIITM" />
              </Container>
              <Typography className={classes.footer_statement}>With name. simply visit a URL. drop a comment and you're done. No more wading through unclear. unactionable feedback.</Typography>
            </List>
          </Grid>
          <Grid container sm={8} className={classes.footerGridCon}>
            <Grid item sm={3}>
              <List>
                <ListItem>Landing Pages</ListItem>
                <ListItem className={classes.footerGridItem2}>Page 1</ListItem>
                <ListItem className={classes.footerGridItem2}>Page 2</ListItem>
                <ListItem className={classes.footerGridItem2}>Page 3</ListItem>
                <ListItem className={classes.footerGridItem2}>Page 4</ListItem>
              </List>
            </Grid>
            <Grid item xs={3} className={classes.footerGridItem2}>
              <List>
                <ListItem>Conpany Pages</ListItem>
                <ListItem className={classes.footerGridItem2}>About us</ListItem>
                <ListItem className={classes.footerGridItem2}>Blog</ListItem>
                <ListItem className={classes.footerGridItem2}>Careers</ListItem>
                <ListItem className={classes.footerGridItem2}>Help Center</ListItem>
              </List>
            </Grid>
            <Grid item xs={3} className={classes.footerGridItem2}>
              <List>
                <ListItem>Other Pages</ListItem>
                <ListItem className={classes.footerGridItem2} onClick={() => router.push("/contact")}>
                  contact
                </ListItem>
                <ListItem className={classes.footerGridItem2} onClick={() => router.push("/signup")}>
                  Sign up
                </ListItem>
                <ListItem className={classes.footerGridItem2} onClick={() => router.push("/signin")}>
                  Sign in
                </ListItem>
                <ListItem className={classes.footerGridItem2} onClick={() => router.push("/policy")}>
                  Licensing
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <hr />
        <Typography>All rights reserved.</Typography>
      </footer>
    </div>
  )
}
