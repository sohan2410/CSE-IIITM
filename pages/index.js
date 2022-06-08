import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { Grid, Typography } from "@mui/material";
export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography>content</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>content</Typography>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}
