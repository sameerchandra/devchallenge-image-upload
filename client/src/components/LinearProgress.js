import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius:12,
    height:10
  },
  barColorPrimary: {
    backgroundColor: '#2f80ed',
  },
  bar1Indeterminate:{
      borderRadius:12
  },
  bar2Indeterminate:{
      borderRadius:12,
      display:"none"
  },
  colorPrimary:{
      backgroundColor:'f2f2f2'
  }
}));

export default function LinearIndeterminate() {
  const classes = useStyles();

  return (
    <div style={{width:"90%",alignSelf:"center"}}>
      <LinearProgress classes={{root:classes.root,bar1Indeterminate:classes.bar1Indeterminate,bar2Indeterminate:classes.bar2Indeterminate, barColorPrimary:classes.barColorPrimary}} />
    </div>
  );
}