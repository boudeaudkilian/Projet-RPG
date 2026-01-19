import * as readline from 'node:readline'

const menu = () : void => {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Bienvenue dans le Jeu, pas grand chose a voir pour le moment, 1 : Restez | 2 : Partir ", (answer) => {
        switch(answer.toLowerCase()) {
        case '1':
            console.log('Bah ça change pas que y a rien, Au revoir');
            break;
        case '2':
            console.log('Au revoir');
            break;
        default:
            console.log('Invalid answer!');
        }
        rl.close();
    });
}

menu()