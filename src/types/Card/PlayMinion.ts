import { Action } from "../Action";
import Minion from "./Minion";

export default interface PlayMinion extends Minion {
  health: number;
  damage: number;
  action: Action;

}