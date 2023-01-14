let cards = 0;
let flipedCard = null;
let flipedId = null;
let rounds = 0;
let cardsLeft = 0;

while (cards < 4 || cards % 2 !== 0 || cards > 14)
    cards = window.prompt("Com quantas cartas você gostaria de jogar? (4 a 14 cartas, números pares)", "");

cardsLeft = cards;

const carta1 = {id: 0, name: "bobrossparrot"};
const carta2 = {id: 0, name: "bobrossparrot"};
const carta3 = {id: 1, name: "explodyparrot"};
const carta4 = {id: 1, name: "explodyparrot"};
const carta5 = {id: 2, name: "fiestaparrot"};
const carta6 = {id: 2, name: "fiestaparrot"};
const carta7 = {id: 3, name: "metalparrot"};
const carta8 = {id: 3, name: "metalparrot"};
const carta9 = {id: 4, name: "revertitparrot"};
const carta10 = {id: 4, name: "revertitparrot"};
const carta11 = {id: 5, name: "tripletsparrot"};
const carta12 = {id: 5, name: "tripletsparrot"};
const carta13 = {id: 6, name: "unicornparrot"};
const carta14 = {id: 6, name: "unicornparrot"};

const deckFull = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, 
    carta8, carta9, carta10, carta11, carta12, carta13, carta14];

const deck = deckFull.slice(0, cards).sort((a, b) => 0.5 - Math.random());

function showCards() {
    const body = document.querySelector('.deck');

    deck.forEach(card => {
        body.innerHTML += 
            `   
                <div class="maincontainer" onclick="clickCard(this, ${card.id})">
                    <div class="card">
                        <div class="front">
                            <img src="./files/back.png" alt="back" />
                        </div>
                        <div class="back">
                            <img src="./files/${card.name}.gif" alt="${card.name}" />
                        </div>
                    </div>
                </div>
            `;
    })
};

function clickCard(flipContainer, id) {
    const card = flipContainer.getElementsByClassName("card")[0];
    card.classList.toggle("flipCard");

    if (flipedCard === null) {
        flipedCard = flipContainer;
        flipedId = id;
    }
    
    else if (flipedId === id) {
        flipContainer.removeAttribute("onclick");
        flipedCard.removeAttribute("onclick");

        cardsLeft -= 2;
        rounds++;
        flipedCard = null;
        flipedId = null;

        if (cardsLeft === 0) {
            setTimeout(() => {
                window.alert(`Parabéns!, você venceu em ${rounds} jogadas.`);
            }, 500);
            
        }
    }
    else{
        const fC = flipedCard

        rounds++;
        flipedCard = null;
        flipedId = null;
        setTimeout(() => {
            card.classList.toggle("flipCard");
            fC.getElementsByClassName("card")[0].classList.toggle("flipCard");
        }, 1000);
    }
};

showCards();
