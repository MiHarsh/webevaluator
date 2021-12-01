import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div>
        <Grid container>
          <Grid item sx={6} md={6}>
            <div className={classes.copyright}>
              <p className={classes.copy_text}>
                Copyright © 2021 WebEx. All rights reserved.
              </p>
            </div>
          </Grid>
          <Grid item sx={6} md={6}>
            <div className={classes.footer_links}>
              <span>
                <span className={classes.footer_span}>
                  <a href="/terms" className={classes.anchor}>
                    Terms and Privacy
                  </a>
                </span>
                <span className={classes.footer_span}>
                  <a href="/about" className={classes.anchor}>
                    About
                  </a>
                </span>
                <span className={classes.footer_span}>
                  <a
                    href="/https://github.com/Aman-Codes/techfest"
                    className={classes.anchor}
                  >
                    GitHub
                  </a>
                </span>
              </span>
            </div>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
