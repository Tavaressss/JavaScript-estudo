// Modos de mostrar conteúdos na tela.

var valores = [1,3,6,4,2,8,9]
valores.sort()
/*
for(var pos = 0; pos<valores.length ;pos++){
    console.log(` A posição ${pos} tem o valor ${valores[pos]}`)
}
//
for(var pos in valores){
    console.log(` A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
//Ambas as linhas tem a mesma funcionalidade, a diferença é a simplificação entre elas. 

let p = valores.indexOf(8)
console.log(` O valor 8 está na posição ${p}`)
console.log('')


