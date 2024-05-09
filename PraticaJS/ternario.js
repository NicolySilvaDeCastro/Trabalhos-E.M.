let media, n1, n2, n3

n1 = Number(prompt("Digite a primeira nota:"))
n2 = Number(prompt("Digite a segunda nota:"))
n3 = Number(prompt("Digite a terceira nota:"))

media = (n1+n2+n3) / 3

let result = media >= 7 ? "Aprovado" : media < 3 ? "Reprovado" : "Recuperação" // if, else e else if alinhados

alert(result)



/*let idade

idade = Number(prompt("Digite uma idade:"))

let result = idade >= 18 ? "Maior de idade" : "Menor de idade"

alert(result)*/