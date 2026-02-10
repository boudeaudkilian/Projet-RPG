import { Character } from "./Character.ts"
import { charalist } from "./Character.ts"
import { gentilist } from "./Character.ts"
import { mechantlist } from "./Character.ts"
import {
  mage,
  paladin,
  barbarian,
  priest,
  robber,
  warrior,
  mechants,
  boss
} from "./Character.ts"
import { teamMechants, teamBoss, teamHeroes } from "./teams.ts"

const Figthteste = (charalist : Character[]) => {
    console.log("\n--- Équipes ---\n")
    console.log("Heroes :", teamHeroes)
    console.log("Mechants :", teamMechants)

    console.log("\n--- Test des compétences des héros ---\n")

    // Test des compétences des héros
    console.log(`Compétences de mage :`)
    mage.Fireball(teamMechants)
    
    console.log(`\nCompétences de paladin :`)
    paladin.Demacia(teamMechants, teamBoss)
    
    console.log(`\nCompétences de barbare :`)
    barbarian.Ragnarok(teamMechants)
    
    console.log(`\nCompétences de prêtre :`)
    priest.Doom(teamHeroes)
    
    console.log(`\nCompétences de voleur :`)
    robber.Chipper()
    
    console.log(`\nCompétences de mage :`)
    mage.Piow(teamMechants)
    
    console.log(`\nCompétences de paladin :`)
    paladin.Slash(teamMechants)
    
    console.log(`\nCompétences de barbare :`)
    barbarian.Hachoire(teamMechants)
    
    console.log(`\nCompétences de prêtre :`)
    priest.PriereAuDivinKilian(teamHeroes)
    
    console.log(`\nCompétences de voleur :`)
    robber.PlanteDague(mechants)
    
    console.log(`\nCompétences de guerrier :`)
    warrior.CoupdeSabre(teamMechants)

    console.log("\n--- Test des compétences des méchants ---\n")

    // Test des compétences des méchants
    console.log(`Compétences de mechant :`)
    mechants.Attack(teamHeroes)
    
    console.log(`\nCompétences de boss :`)
    boss.Attackboss(teamHeroes)
    
    console.log("")
}

Figthteste(charalist);