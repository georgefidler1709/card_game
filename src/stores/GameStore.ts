import { observable, action, computed, reaction } from "mobx";
import { createContext } from "react";
import { drawCard } from "../api/api";
import Card from "../types/Card/Card";
import PlayMinion from "../types/Card/PlayMinion";
import { GameState } from "../types/GameState";

class GameStore {

  @observable gameState: GameState = {
    hand:[] as Card[],

  } as GameState;
   
  @action addMinion = (minion: PlayMinion) => {
    // TODO: improve this later
    this.gameState.board.push(minion);
  };

  @action removeMinion = (idx: number) => {
    this.gameState.board[idx] = undefined;
  };

  @action setHand = (hand: Card[]) => {
    this.gameState.hand = hand;
    console.log("test");
  }

  @action draw = async () => {
    this.addToHand(await drawCard());
  }

  @action addToHand = (card: Card) => {
    console.log(this.gameState.hand);
    this.gameState.hand.push(card);
  }

}

export default createContext(new GameStore());
