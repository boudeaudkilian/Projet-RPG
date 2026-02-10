import { gentilist, mechantlist } from "./Character.ts"

const index = 1
const n = 5

const mechantADupliquer = mechantlist[index]

export const teamMechants = Array.from(
  { length: n },
  () => ({ ...mechantADupliquer })
)

export const teamBoss = mechantlist[0]
export const teamHeroes = gentilist