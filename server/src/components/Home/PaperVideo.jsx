import ReactPlayer from "react-player";
import { makeStyles, Paper, Box } from "@material-ui/core";
import Sensor from "../Sensor";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    borderRadius: 16,
    overflow: "hidden",
  },
}));

export default function PaperVideo(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Sensor>
        <Paper className={classes.paper}>
          <ReactPlayer
            muted
            playing
            width="100%"
            height="44em"
            controls={false}
            url="https://www.youtube.com/watch?v=2b2gJu-g3qE"
          />
        </Paper>
      </Sensor>
    </Box>
  );
}
