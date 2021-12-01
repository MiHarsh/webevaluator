import React from "react";
import { Container } from "@material-ui/core";
import useStyles from "./styles";

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <div className={classes.about_div}>
          <h5 className={classes.h5}>About WebEx</h5>
          <p className={classes.about_text}>
            This is an advanced web crawling tool that will not only discover
            active URLs within the website but also provide information about
            SSL certificate compliance, Cookie checker, ADA compliance,
            Security-related checks, SEO and the complete analysis of the
            website.
          </p>
        </div>
      </Container>
    </>
  );
};

export default About;
