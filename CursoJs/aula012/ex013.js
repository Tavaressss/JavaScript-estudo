// Validador de Dia da Semana + Hora.

var agora = new Date()
var diaSem = agora.getDay()
var hora = agora.getHours()

switch(diaSem){
    case 0:
        console.log('Hoje é Domingo.')
        console.log(hora + ' Horas')
        break
    case 1:
        console.log('Hoje é Segunda-Feira.')
        console.log(hora + ' Horas')
        break
    case 2:
        console.log('Hoje é Terça-Feira.')
        console.log(hora + ' Horas')
        break
    case 3:
        console.log('Hoje é Quarta-Feira.')
        console.log(hora + ' Horas')
        break
    case 4:
        console.log('Hoje é Quinta-Feira.')
        console.log(hora + ' Horas')
        break
    case 5:
        console.log('Hoje é Sexta-Feira.')
        console.log(hora + ' Horas')
        break
    case 6:
        console.log('Hoje é Sabado.')
        console.log(hora + ' Horas')
}