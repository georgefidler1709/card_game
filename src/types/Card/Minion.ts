import Card from "./Card";

export default interface Minion extends Card {
    defaultHealth: number;
    defaultDamage: number;
}