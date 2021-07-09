import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/Lock";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import SideNav from "./SideNav";
import BadgeAvatars from "./BadgeAvatars";

import { useAuth } from "../../hooks/useAuth";

import Logo from "./Logo";
import SuperTabs from "./SuperTabs";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "center",
    margin: theme.spacing(0,4),
    [theme.breakpoints.down("sm")]: {
      margin: 0
    }
  },
  logo: {
    marginRight: "auto",
  },
  tabs: {
    position: "absolute",
    alignSelf: "flex-end",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  let history = useHistory();

  const [isTop, setTop] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    const onScroll = () => {
      const Top = window.scrollY > 10;
      if (isTop !== Top) {
        setTop(!isTop);
      }
    };
    document.addEventListener("scroll", onScroll, true);
    return () => document.removeEventListener("scroll", onScroll, false);
  });

  return (
    <React.Fragment>
      <AppBar
        className={classes.root}
        position={"sticky"}
        color="inherit"
        elevation={isTop ? 5 : 0}
      >
        <Toolbar className={classes.toolbar}>
          <div
            className={classes.logo}
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/")}
          >
            <Logo />
          </div>
          <Hidden smDown>
            <div className={classes.tabs}>
              <SuperTabs />
            </div>
            {user ? (
              <React.Fragment>
                <Typography style={{ fontWeight: "bold", paddingRight: 10 }}>
                  Teledyne Oldham Simtronic
                </Typography>
                <BadgeAvatars />
              </React.Fragment>
            ) : (
              <div>
                <Button
                  className={classes.button}
                  variant="outlined"
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  <LockIcon style={{ paddingRight: 2 }} />
                  Se connecter
                </Button>
              </div>
            )}
          </Hidden>
          <Hidden mdUp>
            <SideNav />
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}