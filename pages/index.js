import Layout from "../components/Layout"
import { Button, Checkbox, Container, Grid, Input, List, ListItem, Typography, Box } from "@mui/material"

import { useRouter } from "next/router"
import data from "./api/data"
import Profile from "../components/Profile"
export default function Home(props) {
  const router = useRouter()
  return (
    <div>
      <Layout>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Typography variant="h2">Computer Science and Engineering</Typography>
              <Typography>{data.introduction}</Typography>
            </Grid>
            <Grid item xs={4}>
              <div>
                <Typography variant="h3">News Section</Typography>
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
              <Profile people={data.head_of_department} />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </div>
  )
}
