import { observable, action, computed, reaction } from "mobx";
import { createContext } from "react";
import { drawCard } from "../api/api";
import Card from "../types/Card/Card";
import Minion from "../types/Card/Minion";
import Spell from "../types/Card/Spell";
import { GameState } from "../types/GameState";

class GameStore {

  @observable gameState: GameState = {
    hand:[] as Card[],
    board:[] as Minion[],
    spellStack: [] as Spell[],
  } as GameState;
   
  @action addMinion = (minion: Minion) => {
    // TODO: improve this later
    this.gameState.board.push(minion);
  };

  @action removeMinion = (idx: number) => {
    this.gameState.board[idx] = {} as Minion;
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

  @action playCardFromHand = (index: number) => {
    this.playCard(this.gameState.hand[index]);
    this.gameState.hand.splice(index, 1);
  }

  @action playCard = (card: Card) => {
    switch(card.type) {
      case "Minion":
        this.playMinion((card as Minion));
        break;
      case "Spell":
        this.playSpell((card as Spell));
        break;
    }
  }

  @action playMinion = (minion: Minion) => {
    this.gameState.board.push(minion);
  }

  @action playSpell = (spell : Spell) => {
    this.gameState.spellStack.push(spell);
  }

}

export default createContext(new GameStore());
