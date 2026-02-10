import { barbarian, boss, Character, mage, mechants, paladin, priest, robber, warrior } from "./Character.ts"
import { menu } from "./menu.ts"
import { teamBoss, teamHeroes} from "./teams.ts"


async function Attack(chara : Character, _chara_list : Character[]) : Promise<void> {
    if (chara.name === "Findus the Brave") {
        console.log("\n Findus the Brave attaque !")
        let val = await menu("Choisissez une action :", ["|1|Coup de sabre"], [], 1)
        if (val === 1) {
            warrior.CoupdeSabre(teamBoss)
        }
    } else if (chara.name === "Jeanne d'Arc the Maiden") {
        console.log("\n Jeanne d'Arc the Maiden !")
        let val = await menu("Choisissez une action :", ["|1|Fireball", "|2|Piow"], [], 2)
        if (val === 1) {
            mage.Fireball(teamBoss)
        } else if (val === 2) {
            mage.Piow(teamBoss)
        }
    } else if (chara.name === "Dabra the Just") {
        console.log("\n Dabra the Just attaque !")
        let val = await menu("Choisissez une action :", ["|1|Demacia", "|2|Slash"], [], 2)
        if (val === 1) {
            paladin.Demacia(teamBoss)
        } else if (val === 2) {
            paladin.Slash(teamBoss)
        }
    } else if (chara.name === "Brutus the Mad") {
        console.log("\n Brutus the Mad attaque !")
        let val = await menu("Choisissez une action :", ["|1|Ragnarok", "|2|Hachoire"], [], 2)
        if (val === 1) {
            barbarian.Ragnarok(teamBoss)
        } else if (val === 2) {
            barbarian.Hachoire(teamBoss)
        }
    } else if (chara.name === "Eve the Kind") {
        console.log("\n Eve the Kind attaque !")
        let val = await menu("Choisissez une action :", ["|1|Doom", "|2|Priere au Divin Kilian"], [], 2)
        if (val === 1) {
            priest.Doom(teamHeroes)
        } else if (val === 2) {
            priest.PriereAuDivinKilian(teamHeroes)
        }
    } else if (chara.name === "Chipper the Swift") {
        console.log("\n Chipper the Swift attaque !")
        let val = await menu("Choisissez une action :", ["|1|Chipper", "|2|Plante Dague"], [], 2)
        if (val === 1) {
            robber.Chipper()
        } else if (val === 2) {
            robber.PlanteDague(teamBoss)
        }
    } else if (chara.name === "Le très Méchant") {
        console.log("\n Le très Méchant attaque !")
        boss.Attackboss(teamHeroes)
    } else if (chara.name === "Un Méchant") {
        console.log("\n Un Méchant attaque !")
        mechants.Attack(teamHeroes)
    }
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

//console.log("heroes :", heroes)
//console.log("mechants :", mechants)
//console.log("boss :", boss)
