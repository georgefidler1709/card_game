import Card from "./Card/Card";
import Minion from "./Card/Minion";
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
    board: Minion[];
    opponentBoard: Minion[];
}