import Head from "next/head";
import Image from "next/image";
import classes from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { Grid, Typography } from "@mui/material";
import Image1 from "./../assets/image1.jpg";
export default function Home(props) {
  return (
    <div className={classes.container}>
      <Layout>
        <h1>hello</h1>
        <Typography variant="h2">Popular Products</Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography>content</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <Image src={Image1} />
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}
