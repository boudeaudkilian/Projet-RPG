class Character {

    name : string;
    attackPhysic : number;
    attackMagic : number;
    speed : number;
    healthMax : number;
    healthCurrent : number;

    constructor(name: string, attackPhysic: number, attackMagic: number, speed: number, healthMax: number, healthCurrent: number) {
    this.name = name;
    this.attackPhysic = attackPhysic;
    this.attackMagic = attackMagic;
    this.speed = speed;
    this.healthMax = healthMax;
    this.healthCurrent = healthMax;
    }
}

    const warrior = new Character("Adorn the Brave", 20, 5, 20, 150, 150);
    const paladin = new Character("Brutus the Just", 10, 10, 10, 200, 200);
    const mage = new Character("Celina the Wise", 5, 30, 20, 120, 120);
    const barbarian = new Character("Drogon the Fierce", 50, 5, 20, 120, 120);
    const priest = new Character("Dorina the Kind", 10, 10, 20, 150, 150);
    const robber = new Character("Calvin the Swift", 30, 5, 30, 120, 120);