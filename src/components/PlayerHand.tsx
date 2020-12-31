import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { makeStyles } from "@material-ui/core";
import Card from "../types/Card/Card";
import HandCard from "./HandCard";

const useStyles = makeStyles((theme) => ({
  handRow: {
    gridArea: "75 / 2 / span 25 / span 80",
    display: "flex",
    justifyContent: "flex-start"
  }
}));


const PlayerHand = ({hand} : {hand: Card[]}) => {
  const classes = useStyles();
  return (
    <div className = {classes.handRow}>
      {hand.map(card => <HandCard card={card} key={card.id}/>)}
    </div>
  );
};

export default observer(PlayerHand);
