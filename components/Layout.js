import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";

import { Divider, Drawer, Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Input,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import classes from "./../styles/Home.module.css";
export default function layout({ title, description, children }) {
  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Landing Page` : "Landing page"}</title>
        {description && <meta name="description" content={description}></meta>}

        <link
          href="https://fonts.googleapis.com/css2?family=Abel&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.box}>
        <AppBar position="static" className={classes.appBar}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={4} display="flex">
              <IconButton
                edge="start"
                aria-label="open drawer"
                onClick={sidebarOpenHandler}
                className={classes.menuButton}
              >
                <MenuIcon
                  onClick={sidebarOpenHandler}
                  className={classes.navbarButton}
                />
              </IconButton>
              <div className={classes.firstBox}>Logo</div>
              <Drawer
                anchor="left"
                open={sidbarVisible}
                onClose={sidebarCloseHandler}
              >
                <List>
                  <ListItem>
                    <Container
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography>Sidebar panel</Typography>
                      <IconButton
                        aria-label="close"
                        onClick={sidebarCloseHandler}
                      ></IconButton>
                    </Container>
                  </ListItem>
                  <Divider light />
                  <ListItem>
                    <Button onClick={() => router.push("/")}>Home</Button>
                  </ListItem>
                  <ListItem>
                    <Button onClick={() => router.push("/about")}>About</Button>
                  </ListItem>
                  <ListItem>
                    <Button onClick={() => router.push("/feedback")}>
                      Feedback
                    </Button>
                  </ListItem>
                </List>
              </Drawer>
            </Grid>
            <Grid item xs={4} spacing={3}>
              <div className={classes.secondBox}>
                <Typography
                  className={classes.secondBox_menu}
                  onClick={() => router.push("/")}
                >
                  Home
                </Typography>
                <Typography
                  className={classes.secondBox_menu}
                  onClick={() => router.push("/about")}
                >
                  About
                </Typography>
                <Typography
                  className={classes.secondBox_menu}
                  onClick={() => router.push("/feedback")}
                >
                  Feedback
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4} justifyContent="flex-end">
              <div className={classes.thirdBox}>
                <Button onClick={() => router.push("/signin")} color="inherit">
                  Login
                </Button>
              </div>
            </Grid>
          </Grid>
        </AppBar>
        {children}
      </div>
      <footer className={classes.footer}>
        <Grid className={classes.footerGridCon} container spacing={2}>
          <Grid item sm={4} className={classes.footerGridItem}>
            <List className={classes.footerList1}>
              <Container className={classes.footer_logo}>Logo</Container>
              <Typography className={classes.footer_statement}>
                With name. simply visit a URL. drop a comment and you're done.
                No more wading through unclear. unactionable feedback.
              </Typography>
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
                <ListItem className={classes.footerGridItem2}>
                  About us
                </ListItem>
                <ListItem className={classes.footerGridItem2}>Blog</ListItem>
                <ListItem className={classes.footerGridItem2}>Careers</ListItem>
                <ListItem className={classes.footerGridItem2}>
                  Help Center
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={3} className={classes.footerGridItem2}>
              <List>
                <ListItem>Other Pages</ListItem>
                <ListItem
                  className={classes.footerGridItem2}
                  onClick={() => router.push("/contact")}
                >
                  contact
                </ListItem>
                <ListItem
                  className={classes.footerGridItem2}
                  onClick={() => router.push("/signup")}
                >
                  Sign up
                </ListItem>
                <ListItem
                  className={classes.footerGridItem2}
                  onClick={() => router.push("/signin")}
                >
                  Sign in
                </ListItem>
                <ListItem
                  className={classes.footerGridItem2}
                  onClick={() => router.push("/policy")}
                >
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
  );
}
