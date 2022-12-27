/* VARIAVEIS PARA PEGAR O ELEMENTO DO HTML */
const buttonFloresta = document.querySelector('.floresta');
const buttonChuva = document.querySelector('.chuva');
const buttonCafeteria = document.querySelector('.cafeteria');
const buttonLareira = document.querySelector('.lareira');
const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonUpTimer = document.querySelector('.upTimer');
const buttonDownTimer = document.querySelector('.downTimer');
let timer;
const displayMinutes = document.querySelector('.minutos');
const displaySeconds = document.querySelector('.segundos');

/* TIRAR O SELECTED DO BOTAO SOUND*/
window.addEventListener('keydown', closePressButtonEsc);

/*  VARIAVEIS PARA REPRODUZIR OS SONS */
const soundFloresta = new Audio('./assets/sounds/Floresta.wav');
const soundChuva = new Audio('./assets/sounds/Chuva.wav');
const soundCafeteria = new Audio('./assets/sounds/Cafeteria.wav');
const soundLareira = new Audio('./assets/sounds/Lareira.wav');
const soundEnd = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
);

/* COUNTDOWN */

function countDown() {
    pauseTimer = setTimeout(() => {
        let minutes = Number(displayMinutes.textContent);
        let seconds = Number(displaySeconds.textContent);

        if (minutes <= 0 && seconds <= 0) {
            soundEnd.play();
            return;
        }

        if (seconds <= 0) {
            seconds = 60;
            --minutes;
        }

        updateDisplayUpTimer();

        updateDisplayUpDown();

        displayMinutes.textContent = String(minutes).padStart(2, '0');
        displaySeconds.textContent = String(seconds - 1).padStart(2, '0');

        countDown();
    }, 1000);
}

/*  FUNÇÕES BUTTONS TIMER */
buttonPlay.addEventListener('click', () => {
    countDown();
});

buttonStop.addEventListener('click', () => {
    clearTimeout(pauseTimer);
});

function updateDisplayUpTimer() {
    buttonUpTimer.addEventListener('click', () => {
        displayMinutes.textContent = String(minutes + 5).padStart(2, '0');
    });
}

function updateDisplayUpDown() {
    buttonDownTimer.addEventListener('click', () => {
        minutes <= 5
            ? displayMinutes.textContent == String(minutes).padStart(2, '0')
            : (displayMinutes.textContent = String(minutes - 5).padStart(
                  2,
                  '0'
              ));
    });
}

/*  DEIXAR SEMPRE O SOM SEMPRE REPETINDO */
soundFloresta.loop = true;
soundChuva.loop = true;
soundCafeteria.loop = true;
soundLareira.loop = true;

/*  fUNÇÕES SONS */
function soundsFloresta() {
    soundFloresta.play();
    soundChuva.pause();
    soundCafeteria.pause();
    soundLareira.pause();
}
function soundsChuva() {
    soundFloresta.pause();
    soundChuva.play();
    soundCafeteria.pause();
    soundLareira.pause();
}
function soundsCafeteria() {
    soundFloresta.pause();
    soundChuva.pause();
    soundCafeteria.play();
    soundLareira.pause();
}
function soundsLareira() {
    soundFloresta.pause();
    soundChuva.pause();
    soundCafeteria.pause();
    soundLareira.play();
}

function soundOff() {
    soundFloresta.pause();
    soundChuva.pause();
    soundCafeteria.pause();
    soundLareira.pause();
}


/* INTERAÇOES NA TELA DO USUARIO BUTOES SONDS*/
buttonFloresta.addEventListener('click', () => {
    buttonFloresta.classList.toggle('selected') == true
        ? soundsFloresta()
        : soundOff();
    document
        .querySelector('.floresta svg path')
        .classList.toggle('selectedFill');

    buttonChuva.classList.remove('selected');
    document.querySelector('.chuva svg path').classList.remove('selectedFill');
    buttonCafeteria.classList.remove('selected');
    document
        .querySelector('.cafeteria svg path')
        .classList.remove('selectedFill');

    buttonLareira.classList.remove('selected');
    document
        .querySelector('.lareira svg path')
        .classList.remove('selectedFill');
});
buttonChuva.addEventListener('click', () => {
    buttonFloresta.classList.remove('selected');
    document
        .querySelector('.floresta svg path')
        .classList.remove('selectedFill');
    buttonChuva.classList.toggle('selected') == true
        ? soundsChuva()
        : soundOff();
    document.querySelector('.chuva svg path').classList.toggle('selectedFill');
    buttonCafeteria.classList.remove('selected');
    document
        .querySelector('.cafeteria svg path')
        .classList.remove('selectedFill');
    buttonLareira.classList.remove('selected');
    document
        .querySelector('.lareira svg path')
        .classList.remove('selectedFill');
});
buttonCafeteria.addEventListener('click', () => {
    buttonFloresta.classList.remove('selected');
    document
        .querySelector('.floresta svg path')
        .classList.remove('selectedFill');
    buttonChuva.classList.remove('selected');
    document.querySelector('.chuva svg path').classList.remove('selectedFill');
    buttonCafeteria.classList.toggle('selected') == true
        ? soundsCafeteria()
        : soundOff();
    document
        .querySelector('.cafeteria svg path')
        .classList.toggle('selectedFill');
    buttonLareira.classList.remove('selected');
    document
        .querySelector('.lareira svg path')
        .classList.remove('selectedFill');
});
buttonLareira.addEventListener('click', () => {
    buttonFloresta.classList.remove('selected');
    document
        .querySelector('.floresta svg path')
        .classList.remove('selectedFill');
    buttonChuva.classList.remove('selected');
    document.querySelector('.chuva svg path').classList.remove('selectedFill');
    buttonCafeteria.classList.remove('selected');
    document
        .querySelector('.cafeteria svg path')
        .classList.remove('selectedFill');
    buttonLareira.classList.toggle('selected') == true
        ? soundsLareira()
        : soundOff();
    document
        .querySelector('.lareira svg path')
        .classList.toggle('selectedFill');
});

/*FUNÇÃO PARA DESABALITAR TUDO RELACIONADO AO BUTÕES DE SOM*/
function closePressButtonEsc(event) {
    if (event.key === 'Escape') {
        buttonFloresta.classList.remove('selected');
        buttonChuva.classList.remove('selected');
        buttonCafeteria.classList.remove('selected');
        buttonLareira.classList.remove('selected');
        soundOff();
        document
            .querySelector('.floresta svg path')
            .classList.remove('selectedFill');
        document
            .querySelector('.chuva svg path')
            .classList.remove('selectedFill');
        document
            .querySelector('.cafeteria svg path')
            .classList.remove('selectedFill');
        document
            .querySelector('.lareira svg path')
            .classList.remove('selectedFill');
    }
}
