function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
    } else{
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = ''
        if(p == 0){
            alert('Impossivel contar, considerando o número de passos 1.')
            p = 1
        }

        if(i < f){
            // contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            // contagem regressiva
            for(var c = i; c >=f; c-=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}