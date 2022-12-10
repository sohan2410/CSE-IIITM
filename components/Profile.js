import React from "react"
import { Typography, Card, CardContent, CardMedia, CardActionArea, Grid, CardActions } from "@mui/material"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import LanguageIcon from "@mui/icons-material/Language"
import { Link } from "@mui/material"

const Profile = ({ people }) => {
  return (
    <Card
      sx={{ width: 350, height: 550 }}
      style={{ margin: "20px", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
      <CardMedia component="img" height="300" width={'180px'} image={people.image} alt={people.name} style={{ display: "block", magrin: "0 auto" }} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
          margin={'0px auto 6px auto'}>
          {people.name}
        </Typography>
        <Typography variant="body1" textAlign="center">
          {people.designation}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Area of Interest:{" "}
          {people.area_of_interest.map((aoi) => {
            return <span>{aoi}, </span>
          })}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Office Phone: {people.office_phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Address: {people.address}
        </Typography>

      </CardContent>
      <CardActions
        sx={{
          marginBottom: '12px',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <Link href={people.email} target="_blank">
          <MailOutlineIcon style={{ color: "black" }} />
        </Link>
        <Link href={people.website} target="_blank">
          <LanguageIcon style={{ color: "black" }} />
        </Link>
      </CardActions>

    </Card>
  )
}

export default Profile
