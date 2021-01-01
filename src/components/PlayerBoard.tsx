import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { makeStyles } from "@material-ui/core";
import Card from "../types/Card/Card";
import HandCard from "./HandCard";
import { Droppable } from "react-beautiful-dnd";
import Minion from "../types/Card/Minion";
import { red } from "@material-ui/core/colors";
import { autorun } from "mobx";

const useStyles = makeStyles((theme) => ({
  boardRow: {
    gridRow: "50 / span 20",
    display: "flex",
    justifyContent: "flex-start"
  },
  dropSlot: {
    gridRow: "50 / span 20",
    gridColumn: "20 / span 60",
    backgroundColor: red[500]
  }
}));


const PlayerBoard = ({board} : {board: Minion[]}) => {
  const classes = useStyles();
  return (
    <Droppable 
      droppableId={"player-board"}
      direction={"horizontal"}
    >
      {provided => (
        <div className={classes.dropSlot} 
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {provided.placeholder}
          {board.map((card, i) => 
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

export default observer(PlayerBoard);
