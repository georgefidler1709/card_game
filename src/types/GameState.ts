import Card from "./Card/Card";
import PlayMinion from "./Card/PlayMinion";
import Spell from "./Card/Spell";

export interface GameState {
    health: number;
    opponentHealth: number;
    yourTurn: boolean;
    spellStack: Spell[];
    hand: Card[];
    deckSize: number;
    opponentDeckSize: number;
    opponentHandSize: number;
    board: (PlayMinion|undefined)[];
    opponentBoard: (PlayMinion|undefined)[];
}