import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { makeStyles } from "@material-ui/core";
import Card from "../types/Card/Card";
import HandCard from "./HandCard";
import { Droppable } from "react-beautiful-dnd";

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
    <Droppable 
      droppableId={"player-hand"}
      direction={"horizontal"}
    >
      {provided => (
        <div className={classes.handRow} 
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {provided.placeholder}
          {hand.map((card, i) => 
            <HandCard 
              card={card} 
              index={i}
              key={card.id}
            />
          )}
        </div>
        )
      }
      
    </Droppable>
  );
};

export default observer(PlayerHand);
