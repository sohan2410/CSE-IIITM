import Image from "next/image";
import classes from "../styles/Home.module.css";
import Layout from "../components/Layout";
import DoneIcon from "@mui/icons-material/Done";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Carousel from "react-material-ui-carousel";
import {
  Button,
  Checkbox,
  Container,
  Grid,
  Input,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Image1 from "./../assets/image1.jpg";
import Image2 from "./../assets/image2.jpg";
import Image3 from "./../assets/image3.jpg";
import Image4 from "./../assets/image4.jpg";
import Image5 from "./../assets/image5.jpg";
import Typical from "react-typical";
import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();
  return (
    <div className={classes.container}>
      <Layout>
        <Container className={classes.main}>
          {/* <Typography variant="h3">Popular Products</Typography> */}
          <Grid container spacing={3}>
            <Grid item md={6} className={classes.contentBox}>
              <Typography
                variant="h2"
                fontFamily="'Abel', sans-serif;"
                margin="2rem"
                className={classes.contentBox_heading}
              >
                {/* Be ready to share your best{" "}
                <Typical
                  className={classes.typical}
                  loop={Infinity}
                  steps={["Click", 2000, "Snap", 2000, "Moments", 2000]}
                /> */}
                Computer Science and Engineering
              </Typography>

              <Typography
                margin="0rem 2rem 1rem 2rem"
                color="#707475"
                className={classes.contentBox_statement}
              >
                {/* Every update that you can share with your users, you should.
                They will love for this, we promise. */}
                The Institute has been educating India’s computing professionals for the past two decades as various academic programs have been offered from its inception. The undergraduate programme in Computer Science and Engineering was started in 2017. Following the creation of departments in the Institute, the department of Computer Science and Engineering was established in August 2022. Along with the UG programme, the department offers a postgraduate programme in the field of Information Security. The students are encouraged to carry out projects in niche areas including Information Systems, Computer Vision, Computer Networks and Software Engineering, as well as specializations in emerging areas of importance such as cloud computing, artificial intelligence, blockchain, machine learning and data analytics.
                The department has a mix of young and experienced senior faculty members specializing in a wide spectrum of research and teaching areas. The department is in the process of developing state-of-the-art laboratories to cater to the needs of the curriculum. Although at its nascent stage, the department is rapidly evolving to both industrial and academic requirements. Consequently, the department attracts brilliant students who are industry-ready at the end of their respective programmes.

              </Typography>
              {/* <Container className={classes.inputCon}>
                <Input
                  placeholder="Enter your email . . ."
                  className={classes.inputBox}
                />
                <Button
                  color="inherit"
                  className={classes.btn_main}
                  onClick={() => router.push("/signin")}
                >
                  Start learning
                </Button>
              </Container> */}
              {/* <Typography className={classes.preSpan}>
                💜 By signing up you agree to{" "}
                <span
                  className={classes.postSpan}
                  onClick={() => router.push("/policy")}
                >
                  Privacy policy
                </span>
              </Typography> */}
              <Typography
                variant="h5"
                fontFamily="'Abel', sans-serif;"
                className={classes.contentBox_heading}
              >
                Vision
              </Typography>
              <Typography
                margin="0rem 2rem 1rem 2rem"
                color="#707475"
                className={classes.contentBox_statement}
              >
                {/* Every update that you can share with your users, you should.
                They will love for this, we promise. */}
                <Typography
                  margin="0rem 2rem 1rem 2rem"
                  color="#707475"
                  className={classes.contentBox_statement}
                >
                  The Institute has been educating India’s computing professionals for the past two decades as various academic programs have been offered from its inception. The undergraduate programme in Computer Science and Engineering was started in 2017. Following the creation of departments in the Institute, the department of Computer Science and Engineering was established in August 2022. Along with the UG programme, the department offers a postgraduate programme in the field of Information Security. The students are encouraged to carry out projects in niche areas including Information Systems, Computer Vision, Computer Networks and Software Engineering, as well as specializations in emerging areas of importance such as cloud computing, artificial intelligence, blockchain, machine learning and data analytics.
                  The department has a mix of young and experienced senior faculty members specializing in a wide spectrum of research and teaching areas. The department is in the process of developing state-of-the-art laboratories to cater to the needs of the curriculum. Although at its nascent stage, the department is rapidly evolving to both industrial and academic requirements. Consequently, the department attracts brilliant students who are industry-ready at the end of their respective programmes.
                </Typography>
              </Typography>
              <Typography
                variant="h5"
                fontFamily="'Abel', sans-serif;"
                className={classes.contentBox_heading}
              >
                Mission
              </Typography>
              <Typography
                margin="0rem 2rem 1rem 2rem"
                color="#707475"
                className={classes.contentBox_statement}
              >
                • To provide in-depth knowledge through effective pedagogies and practical exposure using the latest tools and technologies in the discipline of computer science and engineering.
                • To advance academics by performing state-of-the-art research and providing industry-oriented undergraduate and postgraduate programs in the discipline of computer science and engineering.
                • To nourish and imbibe human values and excellence, equipping young minds to utilize their creativity and passion in serving the global community’s needs.

              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.carousel_con}>
              <div className={classes.imageBox}>
                {/* <CarsouselSlider slideItem={imgData} /> */}
                {/* <Carousel
                  // controls={false}
                  // indicators={false}
                  className={classes.carousel}
                  NextIcon={false}
                  PrevIcon={false}
                // nextLabel={false}
                >
                  <Image src={Image1} width="400%" height="400%" />
                  <Image src={Image2} width="400%" height="400%" />
                  <Image src={Image3} width="400%" height="400%" />
                  <Image src={Image4} width="400%" height="400%" />
                  <Image src={Image5} width="400%" height="400%" />
                  <Image src={Image3} width="400%" height="400%" />
                </Carousel> */}
                <Typography
               variant="h3"
              >
               News Section
              </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.section2}>
          <Typography
            variant="h3"
            padding="1rem"
            fontFamily="'Abel', sans-serif"
            className={classes.section2_heading}
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
            <Grid item sm={5} className={classes.section3_left}>
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
            <Grid item sm={4} className={classes.section3_right}>
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
                <Button
                  className={classes.section3_right_btn}
                  onClick={() => router.push("/")}
                >
                  Submit
                </Button>
                <Typography className={classes.section3_right_statement2}>
                  Already have an account?{" "}
                  <span
                    className={classes.section3_right_span}
                    onClick={() => router.push("/signin")}
                  >
                    Sign in
                  </span>
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </div>
  );
}
