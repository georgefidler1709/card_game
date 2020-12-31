export default interface Card {
    type: CardType
    art: string;
    name: string;
    description: string;
    cost: number;
    id: string;
}

export enum CardType {
    MINION = "Minion",
    SPELL = "Spell"
}