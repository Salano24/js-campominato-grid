//L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.

const genera = document.querySelector('.genera')
genera.addEventListener('click', function(){
/* seleziono il container */
let container = document.querySelector(".container")
/* dichiaro il numero di caselle */
let numeroCaselle = 100
/* seleziono i div 'casella' */
let listaCaselle = document.getElementsByClassName('casella')
console.log(listaCaselle);
/* richiamo la funzione per generare la casella */
caselleGenerator(numeroCaselle,container)
/* scrivo la funzione per generare la casella */
function caselleGenerator(numeroCaselle,container){
    for(let i = 0; i < numeroCaselle; i++){
        container.innerHTML += `<div class='casella' id="${i}"></div>`
    }
    
    for(let i = 0; i < listaCaselle.length; i++){
        let casellaAttuale = listaCaselle[i]
        casellaAttuale.addEventListener("click", function(){
            casellaAttuale.classList.toggle('azzurro')
            console.log(casellaAttuale.id)
        })
    }
}
})

//Ci saranno quindi 10 caselle per ognuna delle 10 righe.



//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro



// ed emetto un messaggio in console con il numero della cella cliccata.

