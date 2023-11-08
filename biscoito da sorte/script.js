const btBiscoito = document.querySelector('.bt_biscoito')
const biscoitoFechado = document.querySelector('.biscoito_fechado')
const biscoitoAberto = document.querySelector('.biscoito_aberto')
const msgDaSorte = document.querySelector('.bilhete')
const btOutroBiscoito = document.querySelector('.bt_outro_biscoito')
const outrobiscoito = document.querySelector('.outroBiscoito')
let numeroFrase = ''
const frases = ['Nossos fracassos, às vezes, são mais frutíferos do que os êxitos', 'Os problemas são oportunidades para se mostrar o que sabe','Tente de novo. Fracasse de novo. Mas fracasse melhor',
'É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo','Cada cliente é como se fosse primeiro e único',
'Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer','Nada acontece a menos que sonhemos antes','É sempre divertido fazer o impossível','Experiência é o nome que cada um dá a seus erros',
'A arte de ser ora audacioso, ora prudente, é a arte de vencer']



btBiscoito.addEventListener('click', ()=>{
    alterarDisplay()
    numeroFrase = Number(Math.round(Math.random()*10))
    msgDaSorte.innerHTML = frases[numeroFrase]
})
btOutroBiscoito.addEventListener('click', ()=>{
    alterarDisplay()
    
})


function alterarDisplay(){
    biscoitoAberto.classList.toggle('hide')
    biscoitoFechado.classList.toggle('hide')
    msgDaSorte.classList.toggle('hide')
    outrobiscoito.classList.toggle('hide')
} 
