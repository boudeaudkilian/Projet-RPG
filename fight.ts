import { Character } from "./Character.ts"
import { charalist } from "./Character.ts"
import { gentilist } from "./Character.ts"
import { mechantlist } from "./Character.ts"

const Attack = (chara : Character, _chara_list : Character[]) : void => {
    console.log(chara.name)
}

const Speed_def = (chara_list : Character[], indice_spe : number) : Character[] | null => {
    const ret_tab = []
    let iselem = false
    for (const element of chara_list) {
        if (element.speed === indice_spe) {
            ret_tab.push(element)
            iselem = true
        }
    }
    if (iselem) {
        return ret_tab
    } else {
        return null
    }
}

const Fight = (chara_list : Character[]) : void => {
    let indice_spe = 100
    for (indice_spe = 100; indice_spe > 0; indice_spe--) {
        const buf = Speed_def(chara_list, indice_spe)
        if (buf) {
            for (const element of buf) {
                Attack(element, chara_list)
            }
        }
    }
}

const index = 1
const n = 5

const mechantADupliquer = mechantlist[index]

const mechantsDupliques = Array.from(
  { length: n },
  () => ({ ...mechantADupliquer })
)

export const teamBoss = mechantlist[0]
export const teamHeroes = gentilist
export const teamMechants = mechantsDupliques


//console.log("heroes :", heroes)
//console.log("mechants :", mechants)
//console.log("boss :", boss)

Fight(charalist)