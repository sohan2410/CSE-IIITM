import React, { useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import { Divider, Drawer, CardMedia, createTheme, ThemeProvider, useMediaQuery } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import { AppBar, Button, Container, Grid, List, ListItem, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import classes from "./../styles/Home.module.css"
import data from "../pages/api/data"
import links from "../pages/api/links"
export default function Layout({ title, description, children }) {
  const [SidebarVisible, SetSidebarVisible] = useState(false)
  const sidebarOpenHandler = () => {
    SetSidebarVisible(true)
  }
  const sidebarCloseHandler = () => {
    SetSidebarVisible(false)
  }

  const router = useRouter()
  const theme = createTheme({
    typography: {
      fontFamily: "Space Grotesk",
      fontFamily: "Varela Round",
      fontFamily: "Roboto Mono",
      fontFamily: "Prompt",
      fontFamily: "Abel",
      button: {
        fontWeight: "bold",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Abel';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/abel/v18/MwQ5bhbm2POE2V9BPQ.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }`,
        styleOverrides: `
        @font-face {
          font-family: 'Roboto Mono';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/robotomono/v22/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_7Pq_SeW4Ep0.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        `,
        styleOverrides: `
        @font-face {
          font-family: 'Varela Round';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/varelaround/v19/w8gdH283Tvk__Lua32TysjIfpcuPP9g.woff2) format('woff2');
          unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
        }`,
        styleOverrides: `@font-face {
          font-family: 'Space Grotesk';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7aUXsrPMBTTA.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }`,
        styleOverrides: `@font-face {
          font-family: 'Prompt';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/prompt/v10/-W__XJnvUD7dzB2KdNodVkI.woff2) format('woff2');
          unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
        }`,
      },
    },
  })
  const showBelow900 = useMediaQuery(theme.breakpoints.down(1000))
  const showAbove900 = useMediaQuery(theme.breakpoints.up(1000))
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Landing Page` : "Landing page"}</title>
        {description && <meta name="description" content={description}></meta>}

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.box}>
        <ThemeProvider theme={theme}>
          <AppBar position="static" className={classes.appBar}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} display="flex">
                {showBelow900 && (
                  <IconButton
                    edge="start"
                    aria-label="open drawer"
                    onClick={sidebarOpenHandler}
                    className={classes.menuButton}
                    sx={{
                      margin: "auto 4px auto 0px",
                    }}
                  >
                    <MenuIcon onClick={sidebarOpenHandler} className={classes.navbarButton} />
                  </IconButton>
                )}
                <Drawer anchor="left" open={SidebarVisible} onClose={sidebarCloseHandler}>
                  <List>
                    <ListItem>
                      <Container display="flex" alignItems="center" justifyContent="space-between">
                        {/* <Typography>Sidebar panel</Typography> */}
                        <IconButton aria-label="close" onClick={sidebarCloseHandler}></IconButton>
                      </Container>
                    </ListItem>
                    <Divider light />
                    {links.map((item, i) => {
                      return (
                        <ListItem key={i}>
                          <Button onClick={() => router.push(`${item.path}`)} className={classes.navLink}>
                            {item.name}
                          </Button>
                        </ListItem>
                      )
                    })}
                  </List>
                </Drawer>
                <div className={classes.firstBox}>
                  <CardMedia
                    component="img"
                    image="/static/images/iiitm_logo.png"
                    alt="IIITM"
                    onClick={() => router.push("/")}
                    style={{
                      height: "60px",
                      width: "300px",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </Grid>

              {showAbove900 && (
                <Grid
                  item
                  md={8}
                  spacing={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className={classes.secondBox}>
                    {links.map((item, i) => {
                      return (
                        <Typography
                          key={i}
                          className={classes.secondBox_menu}
                          onClick={() => router.push(`${item.path}`)}
                          sx={{
                            margin: "auto 23px",
                            fontFamily: "Prompt",
                            letterSpacing: "1.1px",
                          }}
                        >
                          {item.name}
                        </Typography>
                      )
                    })}
                  </div>
                </Grid>
              )}
            </Grid>
          </AppBar>

          {children}
        </ThemeProvider>
      </div>
      <footer className={classes.footer}>
        <Grid className={classes.footerGridCon} container spacing={2}>
          <Grid item xs={8} sm={6} md={4} sx={{ padding: "auto 20px" }}>
            {/* <List style={{ alignItems: "start" }}> */}
            <Typography variant="h5" gutterBottom>
              Contact:
            </Typography>
            <Typography>{data.head_of_department.name}</Typography>
            <Typography>{data.head_of_department.designation}</Typography>
            <Typography>{data.head_of_department.address}</Typography>
            <Typography>Email: {data.head_of_department.email}</Typography>
            <Typography>Phone: {data.head_of_department.office_phone}</Typography>
            {/* </List> */}
          </Grid>
          <Grid container xs={4} sm={6} md={8} className={classes.footerGridCon}>
            <Grid item xs={3} sx={{ padding: "auto 20px" }} className={classes.footerGridConItem}>
              {links.map((item, i) => {
                return (
                  <Typography
                    key={i}
                    onClick={() => router.push(`${item.path}`)}
                    sx={{
                      margin: "5px 10px",
                    }}
                    className={classes.footerGridItem2}
                  >
                    {item.name}
                  </Typography>
                )
              })}
            </Grid>
          </Grid>
        </Grid>

        <hr />
        <Typography textAlign="end" style={{ padding: "10px 0 10px 0" }}>
          Developed by{" "}
          <a href="https://www.linkedin.com/in/sohan-bandary/" className={classes.link} target="_blank" rel="noreferrer">
            Sohan Bandary
          </a>{" "}
          and{" "}
          <a href="https://www.linkedin.com/in/yana-gupta/" className={classes.link} target="_blank" rel="noreferrer">
            Yana Gupta
          </a>
        </Typography>
      </footer>
    </div>
  )
}
