let cards = 0;

while (cards < 4 || cards % 2 !== 0 || cards > 14)
    cards = window.prompt("Com quantas cartas você gostaria de jogar? (4 a 14 cartas, números pares)", "");

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
        //body.innerHTML += `<div class="card hidden"><img src="./files/${card.name}.gif" alt="${card.name}" /></div>`;

        body.innerHTML += 
            `
                <div class="flip-container" onclick="clickCard(this)">
                    <div class="fullCard">
                    <div class="flipper">
                        <div class="front">
                            <div class="card">
                                <img src="./files/back.png" alt="back" />
                            </div>
                        </div>
                        <div class="back">
                            <div class="card">
                                <img src="./files/${card.name}.gif" alt="${card.name}" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            `;
    })
}

function clickCard(flipContainer) {
    console.log(flipContainer);
    flipContainer.classList.toggle("flipper");
}

showCards();
