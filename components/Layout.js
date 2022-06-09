import React from "react";
import Head from "next/head";
import Image from "next/image";
import Image1 from "./../assets/image1.jpg";
import Image2 from "./../assets/image2.jpg";
import Image3 from "./../assets/image3.jpg";
import Image4 from "./../assets/image4.jpg";
import Image5 from "./../assets/image5.jpg";

import Typical from "react-typical";
import Carousel from "react-material-ui-carousel";

// import CarsouselSlider from "react-carousel-slider";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Input,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import classes from "./../styles/Home.module.css";
export default function layout(title, description, children) {
  let imgData = [
    {
      des: "1",
      imgSrc: { Image1 },
    },
    {
      des: "2",
      imgSrc: { Image2 },
    },
  ];
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
              <MenuIcon />
              <div className={classes.firstBox}>Logo</div>
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
      </div>
      <footer className={classes.footer}>
        <Typography>All rights reserved.</Typography>
      </footer>
    </div>
  );
}
