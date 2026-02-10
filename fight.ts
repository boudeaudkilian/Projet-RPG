import { Character } from "./Character.ts"

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

export async function Fight(chara_list : Character[]) : Promise<void> {
    let indice_spe = 100
    for (indice_spe = 100; indice_spe > 0; indice_spe--) {
        const buf = Speed_def(chara_list, indice_spe)
        if (buf) {
            for (const element of buf) {
                await Attack(element, chara_list)
            }
        }
    }
}