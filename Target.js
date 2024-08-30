// questão 1, Resultado: 91
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

//------------------------------------------------------------------------>

//Questão 2

function pertenceAFibonacci(num) {
    if (num === 0 || num === 1) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    let a = 0;
    let b = 1;
    let next = a + b;

    while (next <= num) {
        if (next === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = next;
        next = a + b;
    }

    return `O número ${num} não pertence à sequência de Fibonacci.`;
}

let numero = 21;
console.log(pertenceAFibonacci(numero));

//------------------------------------------------------------------------>


//Questão 3

const faturamento = [
    {"dia": 1, "valor": 200.0},
    {"dia": 2, "valor": 0.0},
    {"dia": 3, "valor": 300.0},
    {"dia": 4, "valor": 400.0},
    {"dia": 5, "valor": 0.0},
    {"dia": 6, "valor": 500.0}
];

// Filtra os dias com faturamento
const diasComFaturamento = faturamento.filter(d => d.valor > 0);

// Calcula menor e maior faturamento
const menorFaturamento = Math.min(...diasComFaturamento.map(d => d.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(d => d.valor));

// Calcula a média
const somaFaturamento = diasComFaturamento.reduce((acc, d) => acc + d.valor, 0);
const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

// Conta dias com faturamento acima da média
const diasAcimaDaMedia = diasComFaturamento.filter(d => d.valor > mediaFaturamento).length;

console.log(`Menor faturamento: ${menorFaturamento}`);
console.log(`Maior faturamento: ${maiorFaturamento}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);

/*Resultado Esperado:
Menor faturamento: 200.0
Maior faturamento: 500.0
Dias com faturamento acima da média: 2 */

//------------------------------------------------------------------------>

// Questão 4

const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcula o faturamento total
const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

// Calcula o percentual de cada estado
const percentuais = {};
for (let estado in faturamentoPorEstado) {
    percentuais[estado] = (faturamentoPorEstado[estado] / faturamentoTotal * 100).toFixed(2);
}

// Exibe os percentuais
for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}

/*Resultado Esperado:
O código acima calculará e exibirá o percentual de cada estado no console, como por exemplo:

SP: 37.53%
RJ: 20.29%
MG: 16.17%
ES: 15.03%
Outros: 10.98% */

//------------------------------------------------------------------------>

// Questão 5

function inverterString(str) {
    let stringInvertida = '';

    // Percorre a string de trás para frente e constrói a string invertida
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}

// Exemplo de uso:
let stringOriginal = "Target";
let resultado = inverterString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${resultado}`);

/* Resultado Esperado:
Saída Esperada:
String original: target
String invertida: tegrat */