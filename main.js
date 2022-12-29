/* VARIAVEIS PARA PEGAR O ELEMENTO DO HTML */
const theme = document.querySelector('body');
const modeDark = document.querySelector('.themeDark');
const modeLight = document.querySelector('.themeLight');

const buttonFloresta = document.querySelector('.floresta');
const buttonChuva = document.querySelector('.chuva');
const buttonCafeteria = document.querySelector('.cafeteria');
const buttonLareira = document.querySelector('.lareira');
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonUpTimer = document.querySelector('.upTimer');
const buttonDownTimer = document.querySelector('.downTimer');
let timer;
const displayMinutes = document.querySelector('.minutos');
const displaySeconds = document.querySelector('.segundos');
let minutes = Number(displayMinutes.textContent);

const volFloresta = document.querySelector('.volFloresta');
const volChuva = document.querySelector('.volChuva');
const volCafeteria = document.querySelector('.volCafeteria');
const volLareira = document.querySelector('.volLareira');

const inputFloresta = document.querySelector('.volFloresta')
const inputChuva= document.querySelector('.volChuva')
const inputCafeteria = document.querySelector('.volCafeteria')
const inputLareira = document.querySelector('.volLareira')




/* MODO DARK AND LIGHT*/
modeDark.addEventListener('click', () => {
    modeDark.classList.add('hide');
    modeLight.classList.remove('hide');
    theme.classList.remove('bodyDark');
});

modeLight.addEventListener('click', () => {
    modeDark.classList.remove('hide');
    modeLight.classList.add('hide');
    theme.classList.add('bodyDark');
});

/*QUANDO ACABA O TIMER O CODIGO VOLTA PARA O INICIAL*/
function resetTimer() {
    displayMinutes.textContent = String(minutes).padStart(2, '0');
}

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

/*EVENTOS PARA CONTROLAR O VOLUME DO AUDIO*/
volFloresta.addEventListener('click', () => {
    soundFloresta.volume = volFloresta.value
})
volChuva.addEventListener('click', () => {
    soundChuva.volume = volChuva.value
})
volCafeteria.addEventListener('click', () => {
    soundCafeteria.volume = volCafeteria.value
})
volLareira.addEventListener('click', () => {
    soundLareira.volume = volLareira.value
})

/* COUNTDOWN */

function countDown() {
    pauseTimer = setTimeout(() => {
        let minutes = Number(displayMinutes.textContent);
        let seconds = Number(displaySeconds.textContent);

        if (minutes <= 0 && seconds <= 0) {
            soundEnd.play();
            resetTimer();
            return;
        }

        if (seconds <= 0) {
            seconds = 60;
            --minutes;
        }

        displayMinutes.textContent = String(minutes).padStart(2, '0');
        displaySeconds.textContent = String(seconds - 1).padStart(2, '0');

        countDown();
    }, 1000);
}

/*  FUNÇÕES BUTTONS TIMER */
buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    countDown();
});

buttonPause.addEventListener('click', () => {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')

    clearTimeout(pauseTimer);
});

buttonStop.addEventListener('click', () => {
    displayMinutes.textContent = String(minutes).padStart(2, '0');
    displaySeconds.textContent = String(00).padStart(2, '0');
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    clearTimeout(pauseTimer);
});

buttonUpTimer.addEventListener('click', () => {
    displayMinutes.textContent = String(minutes += 5).padStart(2, '0');
});

buttonDownTimer.addEventListener('click', () => {
    minutes <= 5
        ? displayMinutes.textContent == String(minutes).padStart(2, '0')
        : (displayMinutes.textContent = String(minutes -= 5).padStart(
              2,
              '0'
          ));
});

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
    buttonFloresta.classList.toggle('selectedButton') == true
        ? soundsFloresta()
        : soundOff();
    document
        .querySelector('.floresta svg path')
        .classList.toggle('selectedFill');
    buttonChuva.classList.remove('selectedButton');
    document.querySelector('.chuva svg path').classList.remove('selectedFill');
    buttonCafeteria.classList.remove('selectedButton');
    document
        .querySelector('.cafeteria svg path')
        .classList.remove('selectedFill');

    buttonLareira.classList.remove('selectedButton');
    document
        .querySelector('.lareira svg path')
        .classList.remove('selectedFill');
    inputFloresta.classList.toggle('selectedBody') == true ? inputFloresta.classList.add('selectedBody') : inputFloresta.classList.remove('selectedBody')    
    inputChuva.classList.remove('selectedBody')
    inputCafeteria.classList.remove('selectedBody')
    inputLareira.classList.remove('selectedBody')
});
buttonChuva.addEventListener('click', () => {
    buttonFloresta.classList.remove('selectedButton');
    document
        .querySelector('.floresta svg path')
        .classList.remove('selectedFill');
    buttonChuva.classList.toggle('selectedButton') == true
        ? soundsChuva()
        : soundOff();
    document.querySelector('.chuva svg path').classList.toggle('selectedFill');
    buttonCafeteria.classList.remove('selectedButton');
    document
        .querySelector('.cafeteria svg path')
        .classList.remove('selectedFill');
    buttonLareira.classList.remove('selectedButton');
    document
        .querySelector('.lareira svg path')
        .classList.remove('selectedFill');
    inputFloresta.classList.remove('selectedBody')
    inputChuva.classList.toggle('selectedBody') == true ? inputChuva.classList.add('selectedBody') : inputChuva.classList.remove('selectedBody')
    inputCafeteria.classList.remove('selectedBody')
    inputLareira.classList.remove('selectedBody')
    

});
buttonCafeteria.addEventListener('click', () => {
    buttonFloresta.classList.remove('Button');
    document
        .querySelector('.floresta svg path')
        .classList.remove('selectedFill');
    buttonChuva.classList.remove('selectedButton');
    document.querySelector('.chuva svg path').classList.remove('selectedFill');
    buttonCafeteria.classList.toggle('selectedButton') == true
        ? soundsCafeteria()
        : soundOff();
    document
        .querySelector('.cafeteria svg path')
        .classList.toggle('selectedFill');
    buttonLareira.classList.remove('selectedButton');
    document
        .querySelector('.lareira svg path')
        .classList.remove('selectedFill');
        
    inputFloresta.classList.remove('selectedBody')
    inputChuva.classList.remove('selectedBody')
    inputCafeteria.classList.toggle('selectedBody') == true ? inputCafeteria.classList.add('selectedBody') : inputCafeteria.classList.remove('selectedBody')
    inputLareira.classList.remove('selectedBody')
    

});
buttonLareira.addEventListener('click', () => {
    buttonFloresta.classList.remove('selectedButton');
    document
        .querySelector('.floresta svg path')
        .classList.remove('selectedFill');
    buttonChuva.classList.remove('selectedButton');
    document.querySelector('.chuva svg path').classList.remove('selectedFill');
    buttonCafeteria.classList.remove('selectedButton');
    document
        .querySelector('.cafeteria svg path')
        .classList.remove('selectedFill');
    buttonLareira.classList.toggle('selectedButton') == true
        ? soundsLareira()
        : soundOff();
    document
        .querySelector('.lareira svg path')
        .classList.toggle('selectedFill');
    inputFloresta.classList.remove('selectedBody')
    inputChuva.classList.remove('selectedBody')
    inputCafeteria.classList.remove('selectedBody')
    inputLareira.classList.toggle('selectedBody') == true ? inputLareira.classList.add('selectedBody') : inputLareira.classList.remove('selectedBody')

});

/*FUNÇÃO PARA DESABALITAR TUDO RELACIONADO AO BUTÕES DE SOM*/
function closePressButtonEsc(event) {
    if (event.key === 'Escape') {
        buttonFloresta.classList.remove('selectedButton');
        buttonChuva.classList.remove('selectedButton');
        buttonCafeteria.classList.remove('selectedButton');
        buttonLareira.classList.remove('selectedButton');
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
        inputFloresta.classList.remove('selectedBody')
        inputChuva.classList.remove('selectedBody')
        inputCafeteria.classList.remove('selectedBody')
        inputLareira.classList.remove('selectedBody')
    }
}
