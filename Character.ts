class Character {

    name : string;
    attackPhysic : number;
    attackMagic : number;
    speed : number;
    healthMax : number;
    healthCurrent : number;
    
    const warrior = new Character();
    warrior.name = "Adorn the Brave";
    warrior.attackPhysic = 20;
    warrior.attackMagic = 5;
    warrior.speed = 20;
    warrior.healthMax = 150;
    warrior.healthCurrent = 150;

    const paladin = new Character();
    paladin.name = "Brutus the Just";
    paladin.attackPhysic = 10;
    paladin.attackMagic = 10;
    paladin.speed = 10;
    paladin.healthMax = 200;
    paladin.healthCurrent = 200;

    const mage = new Character();
    mage.name = "Celina the Wise";
    mage.attackPhysic = 5;
    mage.attackMagic = 30;
    mage.speed = 20;
    mage.healthMax = 120;
    mage.healthCurrent = 120;

    const barbarian = new Character();
    barbarian.name = "Drogon the Fierce";
    barbarian.attackPhysic = 50;
    barbarian.attackMagic = 5;
    barbarian.speed = 20;
    barbarian.healthMax = 120;
    barbarian.healthCurrent = 120;

    const priest = new Character();
    priest.name = "Dorina the Kind";
    priest.attackPhysic = 10;
    priest.attackMagic = 10;
    priest.speed = 20;
    priest.healthMax = 150;
    priest.healthCurrent = 150;

    const robber = new Character();
    robber.name = "Calvin the Swift";
    robber.attackPhysic = 30;
    robber.attackMagic = 5;
    robber.speed = 30;
    robber.healthMax = 120;
    robber.healthCurrent = 120;
}