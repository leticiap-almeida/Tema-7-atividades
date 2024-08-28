Exemplo 1:
let quadrado = function(num){
 return num * num; 
};

console.log(quadrado(4)); 
Resposta: 16

Exemplo 2:  
let mensagem = function(nome){
    return  `Olá, ${nome}!';
}; 

console.log(mensagem("Leticia"));
Resposta: Olá, Leticia!

Exemplo 3:
let soma = function(a,b){
    return a + b;
}; 

console.log(soma(10,5));
Resposta: 15

Exemplo 4:
let verificaPar = function(num){
 return num % 2 === 0;
};

console.log(verificaPar(7));
Resposta: false

Exemplo 5:
let calculaFatorial = function(n){
 if (n === 0) return 1;
 return n * calculaFatorial(n - 1);
};

console.log(calculaFatorial(5));
Resposta: 120

Exemplo 6:
let dobroDeCadaElemento = function(array){
 return array.map(num => num * 2); 
};

console.log(dobroDeCadaElemento([1,2,3])); 
Resposta: 2,4,6

Exemplo 7:
let juntarStrings = function(str1, str2){
     return str1 + str2;
};

console.log(juntarStrings('Olá', ' mundo!')); 
Resposta: Olá mundo!



