let num = [3, 6, 1]
num.sort()
num[3] = 5
num.push(9)
console.log(num)
console.log(`Esse vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)
var pos = num.indexOf(6)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
} else{
    console.log(`O está na posição ${pos}`)
}