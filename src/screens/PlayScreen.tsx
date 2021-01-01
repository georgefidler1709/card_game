import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import GameStore from "../stores/GameStore";
import { makeStyles } from "@material-ui/core";
import PlayerHand from "../components/PlayerHand";
import { drawCard, getHand } from "../api/api";
import { DragDropContext, DropResult, ResponderProvided } from 'react-beautiful-dnd';

import Deck from "../components/subcomponents/Deck";
import PlayerBoard from "../components/PlayerBoard";

const useStyles = makeStyles((theme) => ({

}));

const PlayScreen = () => {
  const gameStore = useContext(GameStore);

  useEffect(() => {
    (async() => {
      const hand = await getHand();
      gameStore.setHand(hand);
    })();
  }, [])

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    console.log(result);
    
    if(result.source.droppableId === "player-hand" && 
      result.destination && 
      result.destination.droppableId === "player-board") {
        gameStore.playCardFromHand(result.source.index);
      }
  }

  const classes = useStyles();
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <PlayerHand hand={gameStore.gameState.hand} />
      <Deck/>
      <PlayerBoard board={gameStore.gameState.board}/>
    </DragDropContext>

  );
};

export default observer(PlayScreen);
