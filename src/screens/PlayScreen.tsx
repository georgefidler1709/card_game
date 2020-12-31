import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import GameStore from "../stores/GameStore";
import { makeStyles } from "@material-ui/core";
import PlayerHand from "../components/PlayerHand";
import { drawCard, getHand } from "../api/api";

import Deck from "../components/subcomponents/Deck";

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

  const classes = useStyles();
  return (
    <>
      <PlayerHand hand={gameStore.gameState.hand} />
      <Deck/>;
    </>
  );
};

export default observer(PlayScreen);
