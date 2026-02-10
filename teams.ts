import { gentilist, mechantlist } from "./Character.ts"

const index = 1
const n = 3

const mechantADupliquer = mechantlist[index]

const teamMechants = Array.from(
  { length: n },
  () => ({ ...mechantADupliquer })
)

export const teamBoss = [mechantlist[0], ...teamMechants]
export const teamHeroes = gentilist