import React from "react"
import { Typography, Card, CardContent, CardMedia, CardActions } from "@mui/material"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import LanguageIcon from "@mui/icons-material/Language"
import { Link } from "@mui/material"
import classes from "../styles/Home.module.css"

const Profile = ({ people }) => {
  return (
    <Card
      sx={{ width: '370px', height: '560px' }}
      style={{
        margin: "20px",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
      }}>
      <CardMedia
        component="img"
        image={people.image}
        alt={people.name}
        style={{
          display: "block",
          magrin: "0 auto",
          height: '310px'
        }} />
      <CardContent
        sx={{ height: '210px', }}>
        <Typography gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
          margin={"0px auto 6px auto"}
          sx={{
            fontFamily: 'Varela Round',
            fontWeight: 'bold'
          }}>
          {people.name}
        </Typography>
        <Typography
          variant="body1"
          textAlign="center" sx={{ fontFamily: 'Space Grotesk' }}>
          {people.designation}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span style={{ fontWeight: "bold", fontFamily: 'Space Grotesk' }}>Area of Interest: </span>
          {people.area_of_interest.map((aoi) => {
            return <Typography variant="span" style={{ fontFamily: 'Space Grotesk' }}>{aoi}, </Typography>
          })}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Space Grotesk' }}>
          <span style={{ fontWeight: "bold", fontFamily: 'Space Grotesk' }}>Office Phone:</span>
          {people.office_phone}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Space Grotesk' }}>
          <span style={{ fontWeight: "bold", fontFamily: 'Space Grotesk' }}>Address:</span> {people.address}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          height: '40px'
        }}
      >
        <Link href={`mailto:${people.email}`} target="_blank">
          <MailOutlineIcon style={{ color: "#515567" }} />
        </Link>
        <Link href={people.website} target="_blank">
          <LanguageIcon style={{ color: "#515567" }} />
        </Link>
      </CardActions>
    </Card>
  )
}

export default Profile
