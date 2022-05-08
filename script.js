let order =[];
let clickedOrder =[];
let score = 0;

// 0 - verde , 1 - vermelho , 2 - amarelo , 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//função para sortear as cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor,Number(i) + 1);
    }
}

//função para acender as cores
let lightColor = (element,number) => {
    number = number * 500;
    setTimeout(()=> {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 50);
}

//função para checar a ordem clicada
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível`);
        nextLevel();
    }
}

//função para o click do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length]= color;
    createColorElement(color).classList.add('selected');
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

//função que retorna a cor
let createColorElement = (color) => {
    switch (color) {
        case 0 :
            return green;
            break;
        case 1 :
            return red;
            break;
        case 2 :
            return yellow;
            break;  
        case 3 :
            return blue;
            break;                     
    }
}

// função para o proximo nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// função game over
let gameOver = () => {
    alert(`Você PERDEU! \n Pontuação: ${score}!\n Clique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder =[];
    playGame();
}

// função para iniciar o jogo
let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo!');
    score = 0;

    shuffleOrder();
}

//eventor de click para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
