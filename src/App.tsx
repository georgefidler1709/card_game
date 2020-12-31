import { makeStyles } from "@material-ui/core";
import React from "react";
import { resolveProjectReferencePath } from "typescript";
import { bear, fireball } from "./api/dummy";
import HandCard from "./components/HandCard";
import PlayScreen from "./screens/PlayScreen";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplate: "repeat(100, 1fr) / repeat(100, 1fr)",
    height: "100vh",
    width: "100vw",
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <PlayScreen/>
    </div>
  );
};

export default App;
