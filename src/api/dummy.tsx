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

export const cactus : Minion = {
  type: CardType.MINION,
  id: "3",
  name: "cactus",
  art: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db43b64f-8fac-429b-864f-d7b7ba180fb0/d6yjhgk-4e4a5699-a735-4c8e-b5e2-4522c0fe97ac.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGI0M2I2NGYtOGZhYy00MjliLTg2NGYtZDdiN2JhMTgwZmIwXC9kNnlqaGdrLTRlNGE1Njk5LWE3MzUtNGM4ZS1iNWUyLTQ1MjJjMGZlOTdhYy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.xmvkE5suYPV48Pia0O9wHoOhKvoUUouZJw1HW2KYGpc",
  description: "If I block a heavy attack, deal 2 damage to the attacker",
  cost: 2,
  defaultHealth: 2,
  defaultDamage: 3,
}

export const bunny : Minion = {
  type: CardType.MINION,
  id: "4",
  name: "bunny",
  art: "https://static.wikia.nocookie.net/pokemon/images/1/18/Goh_Bunnelby.png/revision/latest?cb=20201023232709",
  description: "If I sneak attack, draw a card",
  cost: 2,
  defaultHealth: 3,
  defaultDamage: 2,
}

