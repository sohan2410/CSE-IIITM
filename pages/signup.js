import { Button, Checkbox, Input, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import classes from "./../styles/Home.module.css";

export default function signin() {
  const router = useRouter();
  return (
    <div className={classes.signin}>
      <Container className={classes.section3_right_con}>
        <Typography className={classes.section3_right_heading} variant="h5">
          Sign up for free
        </Typography>
        <Container className={classes.section3_right_title_con}>
          <Typography className={classes.section3_right_title}>Name</Typography>
          <Input className={classes.section3_right_input} />
        </Container>
        <Container className={classes.section3_right_title_con}>
          <Typography className={classes.section3_right_title}>
            Email
          </Typography>
          <Input className={classes.section3_right_input} />
        </Container>
        <Typography className={classes.section3_right_statement}>
          <Checkbox className={classes.checkbox} /> I agree to the privacy
          policy.
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
    </div>
  );
}
