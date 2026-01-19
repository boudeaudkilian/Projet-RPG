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

    const warrior = new Character("Adorn the Brave", 20, 5, 20, 150, 150);
    const paladin = new Character("Brutus the Just", 10, 10, 10, 200, 200);
    const mage = new Character("Celina the Wise", 5, 30, 20, 120, 120);
    const barbarian = new Character("Drogon the Fierce", 50, 5, 20, 120, 120);
    const priest = new Character("Dorina the Kind", 10, 10, 20, 150, 150);
    const robber = new Character("Calvin the Swift", 30, 5, 30, 120, 120);
    const charalist = [warrior, paladin, mage, barbarian, priest, robber]
    Fight(charalist)