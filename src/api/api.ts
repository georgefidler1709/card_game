import { bear, fireball } from "./dummy";
import Card from "../types/Card/Card";

export const getHand = () => Promise.resolve([bear, fireball] as Card[]);

export const drawCard = () => Promise.resolve(bear as Card);
