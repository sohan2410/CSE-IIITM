import React, { useContext } from "react";

import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Image1 from "./../assets/image1.jpg";
import Image2 from "./../assets/image2.jpg";
import Image3 from "./../assets/image3.jpg";
import Image4 from "./../assets/image4.jpg";
import Image5 from "./../assets/image5.jpg";
import Typical from "react-typical";
import { Divider, Drawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Carousel from "react-material-ui-carousel";

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
import DoneIcon from "@mui/icons-material/Done";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import classes from "./../styles/Home.module.css";
export default function layout(title, description, children) {
  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

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
                      <Typography>Shortcut to progress</Typography>
                      <IconButton
                        aria-label="close"
                        onClick={sidebarCloseHandler}
                      ></IconButton>
                    </Container>
                  </ListItem>
                  <Divider light />
                </List>
              </Drawer>
            </Grid>
            <Grid item xs={4} spacing={3}>
              <div className={classes.secondBox}>
                <Typography>Home</Typography>
                <Typography>About</Typography>
                <Typography>Feedback</Typography>
              </div>
            </Grid>
            <Grid item xs={4} justifyContent="flex-end">
              <div className={classes.thirdBox}>
                <Button color="inherit">Login</Button>
              </div>
            </Grid>
          </Grid>
        </AppBar>
        <Container className={classes.main}>
          {/* <Typography variant="h3">Popular Products</Typography> */}
          <Grid container spacing={3}>
            <Grid item xs={6} className={classes.contentBox}>
              <Typography
                variant="h2"
                fontFamily="'Abel', sans-serif;"
                margin="2rem"
              >
                Be ready to share your best{" "}
                <Typical
                  className={classes.typical}
                  loop={Infinity}
                  steps={["Click", 2000, "Snap", 2000, "Moments", 2000]}
                />
              </Typography>

              <Typography
                margin="0rem 2rem 1rem 2rem"
                color="rgb(179, 193, 199)"
              >
                Every update that you can share with your users, you should.
                They will love for this, we promise.
              </Typography>
              <Container className={classes.inputCon}>
                <Input
                  placeholder="Enter your email . . ."
                  className={classes.inputBox}
                />
                <Button color="inherit" className={classes.btn_main}>
                  Start learning
                </Button>
              </Container>
              <Typography className={classes.preSpan}>
                💜 By signing up you agree to{" "}
                <span className={classes.postSpan}>Privacy policy</span>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.imageBox}>
                {/* <CarsouselSlider slideItem={imgData} /> */}
                <Carousel className={classes.carousel}>
                  <Image src={Image1} width="400%" height="400%" />
                  <Image src={Image2} width="400%" height="400%" />
                  <Image src={Image3} width="400%" height="400%" />
                  <Image src={Image4} width="400%" height="400%" />
                  <Image src={Image5} width="400%" height="400%" />
                  <Image src={Image3} width="400%" height="400%" />
                </Carousel>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.section2}>
          <Typography
            variant="h3"
            padding="1rem"
            fontFamily="'Abel', sans-serif"
          >
            Compare to competitors
          </Typography>
          <List className={classes.section2List}>
            <ListItem className={classes.section2_listItem1}>
              <Grid container spacing={0}>
                <Grid item xs={3} className={classes.sec2GridT1}>
                  Product
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  Competitor
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  Another one
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  Mabel
                </Grid>
              </Grid>
            </ListItem>
            <ListItem className={classes.section2_listItem2}>
              {" "}
              <Grid container spacing={0}>
                <Grid item xs={3} className={classes.sec2GridT1}>
                  Velit
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  2%Free
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  1%Free
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  No Free
                </Grid>
              </Grid>
            </ListItem>
            <ListItem className={classes.section2_listItem1}>
              <Grid container spacing={0}>
                <Grid item xs={3} className={classes.sec2GridT1}>
                  Developer experience
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  Sucks
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  Decent
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  Impeccable
                </Grid>
              </Grid>
            </ListItem>
            <ListItem className={classes.section2_listItem2}>
              <Grid container spacing={0}>
                <Grid item xs={3} className={classes.sec2GridT1}>
                  Egestas
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <DoneIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <DoneIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <DoneIcon />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem className={classes.section2_listItem1}>
              <Grid container spacing={0}>
                <Grid item xs={3} className={classes.sec2GridT1}>
                  Sit
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <HorizontalRuleIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <DoneIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <DoneIcon />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem className={classes.section2_listItem2}>
              <Grid container spacing={0}>
                <Grid item xs={3} className={classes.sec2GridT1}>
                  Velit
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <HorizontalRuleIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <HorizontalRuleIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <DoneIcon />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem className={classes.section2_listItem1}>
              <Grid container spacing={0}>
                <Grid item xs={3} className={classes.sec2GridT1}>
                  Amet
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <HorizontalRuleIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <HorizontalRuleIcon />
                </Grid>
                <Grid item xs={3} className={classes.sec2GridT2}>
                  <DoneIcon />
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Container>
        <Container className={classes.section3}>
          <Grid container spacing={2}>
            <Grid item xs={5} className={classes.section3_left}>
              <Typography
                variant="h3"
                className={classes.section3_left_heading}
              >
                Sign up now and get a free 3 month trial
              </Typography>
              <Typography className={classes.section3_left_para}>
                With paige, simply visit URL, drop a comment and you're done. No
                more wading through unclear, unactionable feedback.
              </Typography>
              <Button color="inherit" className={classes.section3_left_btn}>
                Schedule a call
              </Button>
              <Typography className={classes.section3_left_statement}>
                "if you aren't sure, always go fot paige. I didn't even need
                training."
              </Typography>
              <Typography className={classes.section3_left_statement2}>
                <span className={classes.section3_left_span}>Rated 5/5</span> -
                from 32 reviews
              </Typography>
            </Grid>
            <Grid item xs={4} className={classes.section3_right}>
              <Container className={classes.section3_right_con}>
                <Typography
                  className={classes.section3_right_heading}
                  variant="h5"
                >
                  Sign up for free
                </Typography>
                <Container className={classes.section3_right_title_con}>
                  <Typography className={classes.section3_right_title}>
                    Name
                  </Typography>
                  <Input className={classes.section3_right_input} />
                </Container>
                <Container className={classes.section3_right_title_con}>
                  <Typography className={classes.section3_right_title}>
                    Email
                  </Typography>
                  <Input className={classes.section3_right_input} />
                </Container>
                <Typography className={classes.section3_right_statement}>
                  <Checkbox className={classes.checkbox} /> I agree to the
                  privacy policy.
                </Typography>
                <Button className={classes.section3_right_btn}>Submit</Button>
                <Typography className={classes.section3_right_statement2}>
                  Already have an account?{" "}
                  <span className={classes.section3_right_span}>Sign in</span>
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </div>
      <footer className={classes.footer}>
        <Grid className={classes.footerGridCon} container spacing={2}>
          <Grid item xs={4} className={classes.footerGridItem}>
            <List className={classes.footerList1}>
              <Container>Logo</Container>
              <Typography>
                With name. simply visit a URL. drop a comment and you're done.
                No more wading through unclear. unactionable feedback.
              </Typography>
            </List>
          </Grid>
          <Grid container xs={8} className={classes.footerGridCon}>
            <Grid item xs={3} className={classes.footerGridItem}>
              <List>
                <ListItem>Landing Pages</ListItem>
                <ListItem>Page 1</ListItem>
                <ListItem>Page 2</ListItem>
                <ListItem>Page 3</ListItem>
                <ListItem>Page 4</ListItem>
              </List>
            </Grid>
            <Grid item xs={3} className={classes.footerGridItem}>
              <List>
                <ListItem>Conpany Pages</ListItem>
                <ListItem>About us</ListItem>
                <ListItem>Blog</ListItem>
                <ListItem>Careers</ListItem>
                <ListItem>Help Center</ListItem>
              </List>
            </Grid>
            <Grid item xs={3} className={classes.footerGridItem}>
              <List>
                <ListItem>Other Pages</ListItem>
                <ListItem>Contact</ListItem>
                <ListItem>Sign up</ListItem>
                <ListItem>Sign in</ListItem>
                <ListItem>Licensing</ListItem>
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
