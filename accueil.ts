import { menu } from "./menu.ts"

async function Accueil() {
    let val = await menu(["Vous arrivez à la taverne et, après une petite chope, vous décidez ce que vous allez faire ensuite : \n|1| : Faire le point sur votre équipement\n|2| : Se reposer (15 po)\n|3] : Partir à l'avanture !\n|4| : Rentrer au bercail (Fermer le jeu)",
        "stats","Repos","bagare","Fermeture"], 4)
    console.log(val)
}

Accueil()