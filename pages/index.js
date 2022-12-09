import Image from "next/image"
import classes from "../styles/Home.module.css"
import Layout from "../components/Layout"
import DoneIcon from "@mui/icons-material/Done"
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule"
import Carousel from "react-material-ui-carousel"
import { Button, Checkbox, Container, Grid, Input, List, ListItem, Typography } from "@mui/material"
import Image1 from "./../assets/image1.jpg"
import Image2 from "./../assets/image2.jpg"
import Image3 from "./../assets/image3.jpg"
import Image4 from "./../assets/image4.jpg"
import Image5 from "./../assets/image5.jpg"
import Typical from "react-typical"
import { useRouter } from "next/router"
import data from "./api/data"
export default function Home(props) {
  const router = useRouter()
  return (
    <div className={classes.container}>
      <Layout>
        <Container className={classes.main}>
          {/* <Typography variant="h3">Popular Products</Typography> */}
          <Grid container spacing={3}>
            <Grid item md={6} className={classes.contentBox}>
              <Typography variant="h2" fontFamily="'Abel', sans-serif;" margin="2rem" className={classes.contentBox_heading}>
                Computer Science and Engineering
              </Typography>
              <Typography margin="0rem 2rem 1rem 2rem" color="#707475" className={classes.contentBox_statement}>
                {data.introduction}
              </Typography>

              <Typography variant="h2" fontFamily="'Abel', sans-serif;" margin="2rem" className={classes.contentBox_heading}>
                Vision
              </Typography>
              <Typography margin="0rem 2rem 1rem 2rem" color="#707475" className={classes.contentBox_statement}>
                {data.vision}
              </Typography>

              <Typography variant="h2" fontFamily="'Abel', sans-serif;" margin="2rem" className={classes.contentBox_heading}>
                Mission
              </Typography>
              <ul>
                {data.mission.map((item) => {
                  return (
                    <li>
                      <Typography margin="0rem 2rem 1rem 2rem" color="#707475" className={classes.contentBox_statement}>
                        {item}
                      </Typography>
                    </li>
                  )
                })}
              </ul>
            </Grid>
            <Grid item xs={6} className={classes.carousel_con}>
              <div className={classes.imageBox}>
                <Typography variant="h3">News Section</Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </div>
  )
}
