import { menu } from "./menu.ts"

async function Bagar() {
        const val = await menu(["testbagar",
        "stats","Repos","bagare","Merci d'avoir joué à la prochaine"], 4)
}

async function Accueil() {
    while (true) {
        const val = await menu(["Vous arrivez à la taverne et, après une petite chope, vous décidez ce que vous allez faire ensuite : \n|1| : Faire le point sur votre équipement\n|2| : Se reposer (15 po)\n|3] : Partir à l'avanture !\n|4| : Rentrer au bercail (Fermer le jeu)",
        "stats","Repos","bagare","Merci d'avoir joué à la prochaine"], 4)
        if (val == 3) {
            await Bagar()
        }
        if (val == 4) {
            return
        }
    }
}

Accueil()