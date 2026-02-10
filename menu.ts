import * as readline from 'node:readline'

export const menu = (txt : string[], nb_ansers : number) : Promise<number> => {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let ret_value = 0
    return new Promise((resolve) => {
    rl.question( "\n\n\n" + txt[0] + "\n\n\n", (answer) => {
        for (let i = 1; i < 10; i++) {
            console.log("\n")
        }
        switch(answer.toLowerCase()) {
        case '1': 
            if (nb_ansers >= 1) {
                console.log(txt[1]);
                ret_value = 1;
            }
            break
        case '2':
            if (nb_ansers >= 2) {
                console.log(txt[2]);
                ret_value = 2;
            }
            break
        case '3':
            if (nb_ansers >= 3) {
                console.log(txt[3]);
                ret_value = 3; 
            }
            break
        case '4':
            if (nb_ansers >= 4) {
                console.log(txt[4]);
                ret_value = 4; 
            }
            break
        case '5':
            if (nb_ansers >= 5) {
                console.log(txt[5]);
                ret_value = 5; 
            }
            break
        case '6':
            if (nb_ansers >= 6) {
                console.log(txt[6]);
                ret_value = 6; 
            }
            break
        case '7':
            if (nb_ansers >= 7) {
                console.log(txt[7]);
                ret_value = 7; 
            }
            break
        case '8':
            if (nb_ansers >= 8) {
                console.log(txt[8]);
                ret_value = 8; 
            }
            break            
        case '9':
            if (nb_ansers >= 9) {
                console.log(txt[9]);
                ret_value = 9; 
            }
            break
        default:
            console.log('Invalid answer!');
            ret_value = -1;
        }
        for (let i = 1; i < 3; i++) {
            console.log("\n")
        }
        rl.close();
        resolve(ret_value)
    });
    });
}

// menu(["Bienvenue dans le Jeu, pas grand chose a voir pour le moment, | 1 : Restez | 2 : Partir |  ", 
//     'Bah ça change pas que y a rien, Au revoir', 
//     'Au revoir'], 3)