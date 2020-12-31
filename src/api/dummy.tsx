import { CardType } from "../types/Card/Card";
import Minion from "../types/Card/Minion";
import Spell from "../types/Card/Spell";

export const bear : Minion = {
  type: CardType.MINION,
  id: "1",
  name: "bear",
  art: "https://cdn.bulbagarden.net/upload/thumb/8/81/Wayfarer_Island_Ursaring.png/250px-Wayfarer_Island_Ursaring.png",
  description: "I deal double damage on a heavy attack to the face",
  cost: 4,
  defaultHealth: 4,
  defaultDamage: 4,
}

export const fireball : Spell = {
  type: CardType.SPELL,
  id: "2",
  name: "fireball",
  art: "https://pm1.narvii.com/5705/ea4b9ef4e42102b71d1ddd552165a7648b1c45f7_hq.jpg",
  description: "deal 3 damage",
  cost: 4,
  effect: () => {}
}

