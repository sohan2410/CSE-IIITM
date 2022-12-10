import Image from "next/image"
import classes from "../styles/Home.module.css"
import Layout from "../components/Layout"
import DoneIcon from "@mui/icons-material/Done"
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule"
import Carousel from "react-material-ui-carousel"
import { Button, Checkbox, Container, Grid, Input, List, ListItem, Typography, Box } from "@mui/material"
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
    <div>
      {/* <Layout> */}
        <Container sx={{
          margin :'10px auto'
        }} maxWidth='xxl'>
          <Grid container spacing={3} >
            <Grid item xs={12} md={8}
              className={classes.intro_box}
            >
              <Typography variant="h2"  className={classes.intro_heading}>Computer Science and Engineering</Typography>
              <Typography justifyContent={'center'} className={classes.intro_text}>{data.introduction}</Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classes.news_box}>
              <div>
                <Typography variant="h3" className={classes.news_heading}>News Section</Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              {/* vision */}
              <Typography variant="h2">Vision</Typography>
              <Typography>{data.vision}</Typography>

              {/* mission */}
              <Typography variant="h2">Mission</Typography>
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
              <Typography variant="h2">Programs offered by the department</Typography>
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
              <Typography variant="h2">Head of the department</Typography>
              <Typography>Name: {data.head_of_department.name}</Typography>
              <Typography>
                Area of Interest:{" "}
                {data.head_of_department.area_of_interest.map((item) => {
                  return <span>{item}</span>
                })}
              </Typography>
              <Typography>Office Phone: {data.head_of_department.office_phone}</Typography>
              <Typography>Address: {data.head_of_department.address}</Typography>
              <Typography>Email: {data.head_of_department.email}</Typography>
              <Typography>Website: {data.head_of_department?.website}</Typography>
            </Grid>
          </Grid>
        </Container>
      {/* </Layout> */}
    </div>
  )
}
