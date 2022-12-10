import React from "react"
import { Typography, Card, CardContent, CardMedia, CardActionArea } from "@mui/material"
const Profile = ({ people }) => {
  return (
    <Card sx={{ maxWidth: 500 }} style={{ margin: "20px" }}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={people.image} alt={people.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {people.name}
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
          <Typography variant="body2" color="text.secondary">
            Contact: <a href={`mailto:${people.email}`}>Email</a> <a href={people.website}>Website</a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Profile
