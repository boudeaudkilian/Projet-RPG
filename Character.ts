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

const randomIndex = (arr: any[]) => {
    if (!arr || arr.length === 0) {
        return -1;
    }
    return Math.floor(Math.random() * arr.length);
}

class Warrior extends Character {
    CoupdeSabre(teamMechants: Character[]) {
        if (!teamMechants || teamMechants.length === 0) {
            console.log(`${this.name} ne trouve aucun ennemi à attaquer !`);
            return;
        }
        console.log(`${this.name} utilise Coup de Sabre: apres avoir crié "Coup de Sabre!!" le guerrier donne un coup d'épée puissant infligeant des dégâts physiques à un ennemi !`);
        const i = randomIndex(teamMechants);
        const degats = this.attackPhysic - teamMechants[i].deffensePhysic;
        if (degats < 0) {
             console.log(`Dégâts infligés à ${teamMechants[i].name} : 0`);
        } else {
            teamMechants[i].healthCurrent -= degats;
            console.log(`Dégâts infligés à ${teamMechants[i].name} : ${degats}`);
         }
     }
}

class Paladin extends Character {
    Demacia(teamMechants: Character[], teamBoss: Character) {
        if (!teamMechants || teamMechants.length === 0) {
            console.log(`${this.name} ne trouve aucun ennemi à attaquer !`);
            return;
        }
        if (this.manaCurrent < 30) {
            console.log(`${this.name} n'a pas assez de mana !`);
            return;
        }
        console.log(`${this.name} utilise Demacia: apres avoir crier "Demacia!!" le paladin fait tomber un epée magique géante sur les enemie leur infligeant des dégâts !`);
        this.manaCurrent -= 30;
        teamMechants.forEach(mechant => {
            if ((this.attackMagic - mechant.deffensePhysic) * 0.4 > 0) {
                mechant.healthCurrent -= (this.attackMagic - mechant.deffensePhysic) * 0.4;
                console.log(`Dégâts infligés à ${mechant.name} : ${(this.attackMagic - mechant.deffensePhysic) * 0.4}`);
            } else {
                console.log(`Dégâts infligés à ${mechant.name} : 0`);
            }
        });
        if ((this.attackMagic - teamBoss.deffensePhysic) * 0.4 > 0) {
            teamBoss.healthCurrent -= (this.attackMagic - teamBoss.deffensePhysic) * 0.4;
            console.log(`Dégâts infligés à ${teamBoss.name} : ${(this.attackMagic - teamBoss.deffensePhysic) * 0.4}`);
        } else {
            console.log(`Dégâts infligés à ${teamBoss.name} : 0`);
        }
    }
    
    Slash(teamMechants: Character[]) {
        if (!teamMechants || teamMechants.length === 0) {
            console.log(`${this.name} ne trouve aucun ennemi à attaquer !`);
            return;
        }
        console.log(`${this.name} utilise Slash: apres avoir crié "Slash!!" le paladin donne un coup d'épée puissant infligeant des dégâts physiques à un ennemi !`);
        const i = randomIndex(teamMechants);
        const degats = this.attackPhysic - teamMechants[i].deffensePhysic;
        if (degats < 0) {
            console.log(`Dégâts infligés à ${teamMechants[i].name} : 0`);
        } else {
            teamMechants[i].healthCurrent -= degats;
            console.log(`Dégâts infligés à ${teamMechants[i].name} : ${degats}`);
        }
    }
}

class Mage extends Character {
    Fireball(teamMechants: Character[]) {
        if (this.manaCurrent < 40) {
            console.log(`${this.name} n'a pas assez de mana !`);
            return;
        }
        if (!teamMechants || teamMechants.length === 0) {
            console.log(`${this.name} ne trouve aucun ennemi à attaquer !`);
            return;
        }
        console.log(`${this.name} utilise Fireball: apres avoir crié "Fireball!!" le mage lance une boule de feu infligeant des dégâts magiques à un ennemi !`);
        const i = randomIndex(teamMechants);
        this.manaCurrent -= 40;
        teamMechants[i].healthCurrent -= this.attackMagic;
        console.log(`Dégâts infligés à ${teamMechants[i].name} : ${this.attackMagic}`);
    }
    
    Piow(teamMechants: Character[]) {
        if (!teamMechants || teamMechants.length === 0) {
            console.log(`${this.name} ne trouve aucun ennemi à attaquer !`);
            return;
        }
        console.log(`${this.name} utilise Piow: apres avoir crié "Piow!!" le mage tire une bille d'énergie infligeant des dégâts magiques à un ennemi !`);
        const i = randomIndex(teamMechants);
        teamMechants[i].healthCurrent -= this.attackMagic * 0.5;
        this.manaCurrent += 20;
        console.log(`Dégâts infligés à ${teamMechants[i].name} : ${this.attackMagic * 0.5}`)
    }
}

class Barbarian extends Character {
    Ragnarok(teamMechants: Character[]) {
        if (!teamMechants || teamMechants.length === 0) {
            console.log(`${this.name} ne trouve aucun ennemi à attaquer !`);
            return;
        }
        console.log(`${this.name} utilise Ragnarok: apres avoir crié "Ragnarok!!" le barbare entre dans une rage folle infligent des gros degats malgtre un recule !`);
        const i = randomIndex(teamMechants);
        if ((this.attackPhysic - teamMechants[i].deffensePhysic) * 1.5 > 0) {
            teamMechants[i].healthCurrent -= (this.attackPhysic - teamMechants[i].deffensePhysic) * 1.5;
            console.log(`Dégâts infligés à ${teamMechants[i].name} : ${(this.attackPhysic - teamMechants[i].deffensePhysic) * 1.5}`);
        } else {
            console.log(`Dégâts infligés à ${teamMechants[i].name} : 0`);
        }
        this.healthCurrent -= this.healthMax * 0.2;
        console.log(`Dégâts subis par ${this.name} : ${this.healthMax * 0.2}`);
    }

    Hachoire(teamMechants: Character[]) {
        if (!teamMechants || teamMechants.length === 0) {
            console.log(`${this.name} ne trouve aucun ennemi à attaquer !`);
            return;
        }
        console.log(`${this.name} utilise Hachoire: apres avoir crié "Hachoire!!" le barbare attaque deux fois un ennemi !`);
        const i = randomIndex(teamMechants);
        let degats = this.attackPhysic - teamMechants[i].deffensePhysic;
        if (degats < 0) degats = 0;
        teamMechants[i].healthCurrent -= degats;
        console.log(`Dégâts infligés à ${teamMechants[i].name} : ${degats}`);
    }
}

class Priest extends Character {
    Doom(teamHeroes: Character[]) {
        if (this.manaCurrent < 20) {
            console.log(`${this.name} n'a pas assez de mana !`);
            return;
        }
        if (!teamHeroes || teamHeroes.length < 2) {
            console.log(`${this.name} ne trouve aucun allié à soigner !`);
            return;
        }
        console.log(`${this.name} utilise Doom: apres avoir crié "Doom!!" le prêtre soigne un allié !`);
        this.manaCurrent -= 20;
        teamHeroes[1].healthCurrent += this.attackMagic * 0.5;
        if (teamHeroes[1].healthCurrent > teamHeroes[1].healthMax) {
            teamHeroes[1].healthCurrent = teamHeroes[1].healthMax;
        }
        console.log(`Dégâts soignés à ${teamHeroes[1].name} : ${this.attackMagic * 0.5}, points de vie restants : ${teamHeroes[1].healthCurrent}`);
    }

    PriereAuDivinKilian(teamHeroes: Character[]) {
        if (!teamHeroes || teamHeroes.length === 0) {
            console.log(`${this.name} ne trouve aucun allié à qui donner du mana !`);
            return;
        }
        console.log(`${this.name} utilise Priere au Divin Kilian: apres avoir prier le Divin Kilian le prêtre redonne du mana a ses alliés en ayant besoins !`);
        teamHeroes.forEach(ally => {
            if (ally.manaCurrent < ally.manaMax) {
                ally.manaCurrent += this.attackMagic * 0.5;
                if (ally.manaCurrent > ally.manaMax) ally.manaCurrent = ally.manaMax;
                console.log(`Mana redonné à ${ally.name} : ${this.attackMagic * 0.5}, mana restant : ${ally.manaCurrent}`);
            }
        });
    }
}

class Robber extends Character {
    Chipper() {
        if (this.manaCurrent < 30) {
            console.log(`${this.name} n'a pas assez de mana !`);
            return;
        }
        console.log(`${this.name} utilise Chipper: apres avoir crié "Chipper!!" le voleur tente de voler un objet à un ennemi !`);
        this.manaCurrent -= 30;
        const rand = Math.random() * 100;
        if (rand < 40) {
            console.log(`Le voleur a échoué à voler un objet !`);
        } else { 
            if (rand < 70) {
                console.log(`Le voleur a réussi à voler une potion !`)   
            } else {
                if (rand < 85) {
                    console.log(`Le voleur a réussi à voler un fragment d'étoile !`);
                } else { 
                    if (rand < 95) {
                        console.log(`Le voleur a réussi à voler un éther !`);
                    } else {
                        console.log(`Le voleur a réussi à voler une demi-étoile !`);
                    }
                }
            }
        }
    }
    
    PlanteDague(mechant: Character) {
        console.log(`${this.name} utilise Plante Dague: apres avoir crié "Plante Dague!!" le voleur plante une dague dans un ennemi !`);
        const degats = (this.attackPhysic - mechant.deffensePhysic) * 3;
        if (degats < 0) {
            console.log(`Dégâts infligés à ${mechant.name} : 0`);
        } else {
            mechant.healthCurrent -= degats;
            console.log(`Dégâts infligés à ${mechant.name} : ${degats}`);
        }
    }
}

class Mechant extends Character {
    Attack(teamHeroes: Character[]) {
        if (!teamHeroes || teamHeroes.length === 0) {
            console.log(`${this.name} ne trouve aucun héros à attaquer !`);
            return;
        }
        console.log(`${this.name} attaque !`);
        const rand = Math.random() * 100;
        if (rand < 20) {
            let y = 0;
            for (let i = 0; i < teamHeroes.length; i++) {
                if (teamHeroes[y].healthCurrent > teamHeroes[i].healthCurrent) {
                    y = i;
                }
            }
            console.log(`${this.name} donne un coup de dague a ${teamHeroes[y].name} qui semblais faible !`);
            const degats = this.attackPhysic - teamHeroes[y].deffensePhysic;
            if (degats < 0) {
                console.log(`Dégâts infligés à ${teamHeroes[y].name} : 0`);
            } else {
                teamHeroes[y].healthCurrent -= degats;
                console.log(`Dégâts infligés à ${teamHeroes[y].name} : ${degats}`);
            }
        } else {
            const i = randomIndex(teamHeroes);
            const degats = this.attackPhysic - teamHeroes[i].deffensePhysic;
            if (degats < 0) {
                console.log(`Dégâts infligés à ${teamHeroes[i].name} : 0`);
            } else {
                teamHeroes[i].healthCurrent -= degats;
                console.log(`Dégâts infligés à ${teamHeroes[i].name} : ${degats}`);
            }
        }
    }
}

class Boss extends Character {
    Attackboss(teamHeroes: Character[]) {
        if (!teamHeroes || teamHeroes.length === 0) {
            console.log(`${this.name} ne trouve aucun héros à attaquer !`);
            return;
        }
        const rand = Math.random() * 100;
        if (rand < 70) {
            if (rand < 20) {
                let y = 0;
                for (let i = 0; i < teamHeroes.length; i++) {
                    if (teamHeroes[y].healthCurrent > teamHeroes[i].healthCurrent) {
                        y = i;
                    }
                }
                console.log(`${this.name} fait tomber son enorme masse sur ${teamHeroes[y].name} qui semblais faible !`);
                if ((this.attackPhysic - teamHeroes[y].deffensePhysic) > 0) {
                    teamHeroes[y].healthCurrent -= (this.attackPhysic - teamHeroes[y].deffensePhysic);
                    console.log(`Dégâts infligés à ${teamHeroes[y].name} : ${(this.attackPhysic - teamHeroes[y].deffensePhysic)}`);
                } else {
                    console.log(`Dégâts infligés à ${teamHeroes[y].name} : 0`);
                }
            } else {
                const i = Math.floor(Math.random() * teamHeroes.length)
                if ((this.attackPhysic - teamHeroes[i].deffensePhysic) > 0) {
                    console.log(`${this.name} fait tomber son enorme masse sur ${teamHeroes[i].name} !`);
                    teamHeroes[i].healthCurrent -= (this.attackPhysic - teamHeroes[i].deffensePhysic);
                    console.log(`Dégâts infligés à ${teamHeroes[i].name} : ${(this.attackPhysic - teamHeroes[i].deffensePhysic)}`);
                } else {
                    console.log(`${this.name} fait tomber son enorme masse sur ${teamHeroes[i].name} !`);
                    console.log(`Dégâts infligés à ${teamHeroes[i].name} : 0`);
                }
            }
        } else {
            console.log(`${this.name} utilise Soul Attaque et fait des degat a tout le monde !`);
            teamHeroes.forEach(Character => {
                if ((this.attackMagic - Character.deffensePhysic) * 0.5 > 0) {
                    Character.healthCurrent -= (this.attackMagic - Character.deffensePhysic) * 0.5;
                    console.log(`Dégâts infligés à ${Character.name} : ${(this.attackMagic - Character.deffensePhysic) * 0.5}`);
                } else {
                    console.log(`Dégâts infligés à ${Character.name} : 0`);
                }
            });
        }
    }
}

export const mage = new Mage("Jeanne d'Arc the Maiden", 15, 15, 50, 20, 120, 120, 200, 200);
export const barbarian = new Barbarian("Brutus the Mad", 60, 40, 0, 20, 120, 120, 0, 0);
export const robber = new Robber("Chipper the Swift", 45, 20, 0, 30, 120, 120, 100, 100);
export const paladin = new Paladin("Dabra the Just", 50, 35, 50, 10, 200, 200, 100, 100);
export const priest = new Priest("Eve the Kind", 10, 20, 40, 20, 150, 150, 150, 150);
export const warrior = new Warrior("Findus the Brave", 60, 30, 0, 15, 150, 150, 0, 0);
export const mechants = new Mechant("Un Méchant", 50, 25, 0, 10, 500, 500, 0, 0);
export const boss = new Boss("Le très Méchant", 80, 40, 80, 5, 500, 500, 0, 0);

export const gentilist = [mage, barbarian, robber, paladin, priest, warrior]
export const mechantlist = [boss, mechants]
export const charalist = [mage, barbarian, robber, paladin, priest, warrior, mechants, boss]