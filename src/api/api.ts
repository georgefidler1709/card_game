import { bear, bunny, cactus, fireball } from "./dummy";
import Card from "../types/Card/Card";

export const getHand = () => Promise.resolve([bear, fireball, bunny, cactus] as Card[]);

export const drawCard = () => Promise.resolve(bear as Card);
