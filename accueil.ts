import { Fight } from "./fight.ts";
import { menu } from "./menu.ts"
import { charalist, gentilist } from './Character.ts';

const Dysplaystat = (val : number) : void => {
    console.log("Nom : " + gentilist[val].name)
}

async function stats() {
    const namelist : string[] = []
    let i = 0
    for (; i < gentilist.length; i++ ) {
        namelist.push(" |" + String(i + 1) + "| " + gentilist[i].name)
    }
    namelist.push(" |" + String(i + 1) + "| Retour")
    while (true) {
        const val = await menu("De qui veux-tu voir les stats ?", namelist, [], gentilist.length + 1)
        if (val > 0 && val <= gentilist.length){
            Dysplaystat(val -1)
        }
        if (val == gentilist.length + 1) {
            return
        }
    }
}
async function Accueil() {
    while (true) {
        const val = await menu("Vous arrivez à la taverne et, après une petite chope, vous décidez ce que vous allez faire ensuite :",
            ["|1| : Faire le point sur votre équipement","|2| : Se reposer (15 po)","|3] : Partir à l'avanture !","|4| : Rentrer au bercail (Fermer le jeu)"],
            ["Display stats à venir","Vous vous reposez","Des ennemis apparaissent","Merci d'avoir joué à la prochaine"], 4)
        if (val == 1)
            await stats()
        if (val == 3) {
            await Fight(charalist)
        }
        if (val == 4) {
            return
        }
    }
}

Accueil()