function tabuada(){
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if(num.value,length == 0){
        alert('[ERRO] Faltam dados!')
    } else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(var c = 1;c <= 10; c++){
            var item = document.createElement('option')
            item.text = ` ${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}