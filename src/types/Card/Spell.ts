import Card from "./Card";

export default interface Spell extends Card {
    effect: () => void | undefined;
}