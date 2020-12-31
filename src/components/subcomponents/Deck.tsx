import React, { useContext } from "react";
import { Card, makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import GameStore from "../../stores/GameStore";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles((theme) => ({
  deck: {
    gridArea: "75 / 88 / span 25 / span 12",
    backgroundColor: blue[500],
    border: "1px solid black",
    padding: "0.5%",
  },
}));


const Deck = (props: any) => {
  const classes = useStyles();
  const gameStore = useContext(GameStore);

  return (
    <Card 
      className={classes.deck} 
      onClick={() => {gameStore.draw()}}
    >
      Deck
    </Card>
  )
};

export default observer(Deck);
