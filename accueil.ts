import { Fight } from "./fight.ts";
import { menu } from "./menu.ts"
import { charalist } from './Character.ts';

async function stats() {
    const val = await menu(["De qui veut tu voir les stats"] 0)    
}
async function Accueil() {
    while (true) {
        const val = await menu(["Vous arrivez à la taverne et, après une petite chope, vous décidez ce que vous allez faire ensuite : \n|1| : Faire le point sur votre équipement\n|2| : Se reposer (15 po)\n|3] : Partir à l'avanture !\n|4| : Rentrer au bercail (Fermer le jeu)",
        "Display stats à venir","Vous vous reposez","Des ennemis apparaissent","Merci d'avoir joué à la prochaine"], 4)
        if (val == 3) {
            await Fight(charalist)
        }
        if (val == 4) {
            return
        }
    }
}

Accueil()