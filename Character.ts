import { teamBoss } from "./fight.ts";
import { teamHeroes } from "./fight.ts";
import { teamMechants } from "./fight.ts";

export class Character {

    name : string;
    attackPhysic : number;
    deffensePhysic : number;
    attackMagic : number;
    speed : number;
    healthMax : number;
    healthCurrent : number;
    manaMax : number;
    manaCurrent : number;

    constructor(name: string, attackPhysic: number, deffensePhysic: number, attackMagic: number, speed: number, healthMax: number, healthCurrent: number, manaMax: number, manaCurrent: number) {
    this.name = name;
    this.attackPhysic = attackPhysic;
    this.deffensePhysic = deffensePhysic;
    this.attackMagic = attackMagic;
    this.speed = speed;
    this.healthMax = healthMax;
    this.healthCurrent = healthCurrent;
    this.manaMax = manaMax;
    this.manaCurrent = manaCurrent;
    }  
}


class Warrior extends Character {

}

class Paladin extends Character {
    Demacia() {
        if (this.manaCurrent < 30) {
            console.log(`${this.name} utilise Demacia: apres avoir crier "Demacia!!" le paladin fait tomber un epée magique géante sur les enemie leur infligeant des dégâts !`);
            this.manaCurrent -= 30;
            teamMechants.forEach(mechant => {
                mechant.healthCurrent -= (this.attackMagic - mechant.deffensePhysic) * 0.4;
                console.log(`Dégâts infligés à ${mechant.name} : ${(this.attackMagic - mechant.deffensePhysic) * 0.4}`);
            });
            teamBoss.healthCurrent -= (this.attackMagic - teamBoss.deffensePhysic) * 0.4;
            console.log(`Dégâts infligés à ${teamBoss.name} : ${(this.attackMagic - teamBoss.deffensePhysic) * 0.4}`);
        }
    }

}
class Mage extends Character {
    Fireball() {
        if (this.manaCurrent < 40) {
            console.log(`${this.name} utilise Fireball: apres avoir crié "Fireball!!" le mage lance une boule de feu infligeant des dégâts magiques à un ennemi !`);
            this.manaCurrent -= 40;
            teamMechants[1].healthCurrent -= this.attackMagic;
            console.log(`Dégâts infligés à ${teamMechants[1].name} : ${this.attackMagic}`);
        }
    }
    //remplacer teamMechants par un ennemi passé en paramètre
}
class Barbarian extends Character {
    Ragnarok() {
        console.log(`${this.name} utilise Ragnarok: apres avoir crié "Ragnarok!!" le barbare entre dans une rage folle infligent des gros degats malgtre un recule !`);
        teamMechants[1].healthCurrent -= (this.attackPhysic - teamMechants[1].deffensePhysic) * 1.5;
        this.healthCurrent -= this.healthMax * 0.2;
        console.log(`Dégâts infligés à ${teamMechants[1].name} : ${(this.attackPhysic - teamMechants[1].deffensePhysic) * 1.5}`);
        console.log(`Dégâts subis par ${this.name} : ${this.healthMax * 0.2}`);
        }
    //remplacer teamMechants par un ennemi passé en paramètre et trouver condition
}
class Priest extends Character {
    Doom() {
        if (this.manaCurrent < 20) {
            console.log(`${this.name} utilise Doom: apres avoir crié "Doom!!" le prêtre soigne un allié !`);
            this.manaCurrent -= 20;
            teamHeroes[1].healthCurrent += this.attackMagic * 0.5;
            console.log(`Dégâts soignés à ${teamHeroes[1].name} : ${this.attackMagic * 0.5}`);
        }
    }
    //remplacer teamHeroes par un allié passé en paramètre
}
class Robber extends Character {
    Chipper() {
        if (this.manaCurrent < 30) {
            console.log(`${this.name} utilise Chipper: apres avoir crié "Chipper!!" le voleur tente de voler un objet à un ennemi !`);
            this.manaCurrent -= 30;
            const rand = Math.random() * 100;
            if (rand < 40) {
                console.log(`Le vol a échoué, rien n'a été volé.`);
            } else if (rand < 70) {
                console.log(`Le voleur a réussi à voler une potion !`);
            } else if (rand < 85) {
                console.log(`Le voleur a réussi à voler un fragment d'étoile !`);
            } else if (rand < 95) {
                console.log(`Le voleur a réussi à voler un éther !`);
            } else {
                console.log(`Le voleur a réussi à voler une demi-étoile !`);
            }
        }
    }
}



class Mechant extends Character {
    Attack() {
        console.log(`${this.name} attaque !`);
        const rand = Math.random() * 100;
        if (rand < 20) {
            console.log(`${this.name} utilise une attaque physique sur le faible !`);
            teamHeroes[1].healthCurrent -= (this.attackPhysic - teamHeroes[1].deffensePhysic);
            console.log(`Dégâts infligés à ${teamHeroes[1].name} : ${(this.attackPhysic - teamHeroes[1].deffensePhysic)}`);
        } else {
                console.log(`${this.name} utilise une attaque physique sur un adversaire aleatoire !`);
                teamHeroes[1].healthCurrent -= (this.attackPhysic - teamHeroes[1].deffensePhysic);
                console.log(`Dégâts infligés à ${teamHeroes[1].name} : ${(this.attackPhysic - teamHeroes[1].deffensePhysic)}`);
        }
    }
}

class Boss extends Character {
    Attack() {
        const rand = Math.random() * 100;
        if (rand < 70) {
            if (rand < 20) {
            console.log(`${this.name} utilise une attaque physique sur le faible !`);
            teamHeroes[1].healthCurrent -= (this.attackPhysic - teamHeroes[1].deffensePhysic);
            console.log(`Dégâts infligés à ${teamHeroes[1].name} : ${(this.attackPhysic - teamHeroes[1].deffensePhysic)}`);
            } else {
                console.log(`${this.name} utilise une attaque physique sur un adversaire aleatoire !`);
                teamHeroes[1].healthCurrent -= (this.attackPhysic - teamHeroes[1].deffensePhysic);
                console.log(`Dégâts infligés à ${teamHeroes[1].name} : ${(this.attackPhysic - teamHeroes[1].deffensePhysic)}`);
            }
        } else {
                console.log(`${this.name} utilise une attaque physique sur tout les adversaires !`);
                teamHeroes.forEach(Character => {
                    Character.healthCurrent -= (this.attackMagic - Character.deffensePhysic) * 0.4;
                    console.log(`Dégâts infligés à ${Character.name} : ${(this.attackMagic - Character.deffensePhysic) * 0.4}`);
            });
        }
    // pour les mechants fair choix de la cible en fonction de la vie restante
    }
}

    const mage = new Mage("Jeanne d'Arc the Maiden", 15, 30, 50, 20, 120, 120, 200, 200);
    const barbarian = new Barbarian("Brutus the Mad", 60, 80, 0, 20, 120, 120, 0, 0);
    const robber = new Robber("Chipper the Swift", 45, 40, 0, 30, 120, 120, 0, 0);
    const paladin = new Paladin("Dark Vador the Just", 50, 70, 50, 10, 200, 200, 100, 100);
    const priest = new Priest("Eve the Kind", 10, 40, 40, 20, 150, 150, 150, 150);
    const warrior = new Warrior("Findus the Brave", 60, 60, 0, 15, 150, 150, 0, 0);

    const mechants = new Mechant("Un Méchant", 50, 50, 0, 10, 500, 500, 0, 0);
    const boss = new Boss("Le très Méchant", 80, 80, 0, 5, 500, 500, 0, 0);

    export const gentilist = [mage, barbarian, robber, paladin, priest, warrior]
    export const mechantlist = [boss, mechants]
    export const charalist = [mage, barbarian, robber, paladin, priest, warrior, mechants, boss]