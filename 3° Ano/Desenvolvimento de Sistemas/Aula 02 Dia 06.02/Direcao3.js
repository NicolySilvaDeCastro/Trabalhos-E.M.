
   //1° Function If/Else Direção do Uber
   //2° Impar Par
   //3° Fatorial
   function uber(direcao){
        const direcao1 = "direita"
        const direcao2 = "esquerda"
        
        if(direcao === direcao1){
            return console.log("Indo para o Trabalho!")
        }else if(direcao === direcao2){
            return console.log("Indo para a Escola!")
        }else{
            return console.log("Você está parado.")
        }
        }
        console.log(uber("Direita"))
        
///////////////////////////////////////////////////////////////////////////////////////////////
function Numeros(ImparPar){
    if(ImparPar %2 == 0){
        return console.log("O número é par")
    }else{
        return console.log("O número é ímpar")
    }
    }
    console.log(Numeros("3"))
///////////////////////////////////////////////////////////////////////////////////////////////
function Fatorial(n){
    if(n === 0||n === 1){
        return 1
    }else{
        return n*Fatorial(n-1)
    }
    }
    console.log(Fatorial(5))



/* Passos:
1. Definir nome da função e parâmetro que será avaliado
2. Definir o const, let ou var, colocando seu valor
3. Definir os ifs, seus parâmetros e a ação(return console.log("Texto")) 
4. Para testar, colocar: console.log(NomeDaFunção("resposta teste"))

Declarando variáveis:
var === let (são iguais)
const != var || let (const = não muda)

function nomequalquer(argumento){
    o que precisa acontecer (argumento para comparar == com o que estou comparando)
    retornando algo
}


if(comparo == com o que esta aqui && comparo com isso = algo){
o que deve ser executado, se a condição for verdadeira
}else if(precisa de comparação){
compara o que está dentro do else if
}else{
sempre é o último
}

Sinais:
"=" atribui valor
"==" verifica se é igual, mas não compara o tipo
"===" verifica se é igual, inclusive o tipo
"&&" e
"||" ou
"!=" diferente ou não igual

1 = 1 (atribuir valor)
var teste = 1
1 == "1" comparação, sem levar em considerção o tipo
1 === 1 também compara  título
*/
