/* const pião = "Diagonal"
const bispo ="Diagonal"
const dama = "Qualquer direção"
const rei = "Qualuqer direção"
const torre = "Vertical ou horizontal"
const cavalo = "Movimento em L" */
const peca = "piao"
const textoajustado = "peca.toLowerCase"
let movimento

console.log(peca.toLowerCase())

switch (peca) {
    case 'piao':
    case 'bispo':
        movimento = 'Diagonal';
        break;
    case 'dama':
    case 'rei':
        movimento = 'Qualquer direção';
        break; 
    case 'torre':
        movimento = 'Vertical ou horizontal';
        break;
    case 'cavalo':
        movimento = 'Movimento em L';
        break; 
}

console.log(movimento);
