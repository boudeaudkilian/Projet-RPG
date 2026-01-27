import * as readline from 'node:readline'

const menu = (txt : string[], nb_ansers : number) : number => {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
        rl.question( "\n\n\n" + txt[0] + "\n\n\n", (answer) => {
            switch(answer.toLowerCase()) {
            case '1': 
                if (nb_ansers >= 1) {
                    console.log(txt[1]);
                    rl.close();
                    return 1;
                }/* falls through */
            case '2':
                if (nb_ansers >= 2) {
                    console.log(txt[2]);
                    rl.close();
                    return 2;
                }/* falls through */
            case '3':
                if (nb_ansers >= 3) {
                    console.log(txt[3]);
                    rl.close();
                    return 3;
                }/* falls through */
            case '4':
                if (nb_ansers >= 4) {
                    console.log(txt[4]);
                    rl.close();
                    return 4;
                }/* falls through */
            case '5':
                if (nb_ansers >= 5) {
                    console.log(txt[5]);
                    rl.close();
                    return 5;
                }/* falls through */
            case '6':
                if (nb_ansers >= 6) {
                    console.log(txt[6]);
                    rl.close();
                    return 6;
                }/* falls through */
            case '7':
                if (nb_ansers >= 7) {
                    console.log(txt[7]);
                    rl.close();
                    return 7;
                }/* falls through */
            case '8':
                if (nb_ansers >= 8) {
                    console.log(txt[8]);
                    rl.close();
                    return 8;
                }/* falls through */
            case '9':
                if (nb_ansers >= 9) {
                    console.log(txt[9]);
                    rl.close();
                    return 9;
                }/* falls through */
            default:
                console.log('Invalid answer!');
                rl.close();
                return -1;
            }
        });
    return 0
}

menu(["Bienvenue dans le Jeu, pas grand chose a voir pour le moment, | 1 : Restez | 2 : Partir |  ", 
    'Bah ça change pas que y a rien, Au revoir', 
    'Au revoir'], 3)