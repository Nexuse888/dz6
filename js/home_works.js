// gmail check
const gmailInput = document.querySelector('#gmail_input')
const gmailButtom = document.querySelector('#gmail_button')
const gmailResault = document.querySelector('#gmail_result')
const regEXP = /@gmail.com/
gmailButtom.onclick=() => {
    if (regEXP.test(gmailInput.value)) {
        gmailResault.innerHTML  = 'молодец ты поставил @gmail.com ;) ' +
            'ахахахахах теперь к тебе будет приходить рассылка &#128520;'
        gmailResault.style.color = 'green'
    }
    else {
        gmailResault.innerHTML  = 'поставь @gmail.com и будет все OK :/'
        gmailResault.style.color = 'red'
    }
}
// -----------------------------------------------
const childBlock = document.querySelector('.child_block');
let angle = 0;
let radius = 215;

const move = () => {
    const centerX = 216; // Центр по оси X
    const centerY = 218; // Центр по оси Y

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    childBlock.style.left = `${x}px`;
    childBlock.style.top = `${y}px`;

    angle += 0.02;

    requestAnimationFrame(move);
};

move();
// _______________________________________________
const milisek = document.querySelector('#ml-secondsS');
const secondsS = document.querySelector('#secondsS');
const minutesS = document.querySelector('#minutesS');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

let timerInterval;
let miliseconds = 0;
let seconds = 0;
let minutes = 0;

const updateMiliseconds = () => {
    miliseconds++;
    if (miliseconds >= 100) {
        miliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
            }
            minutesS.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        }
        secondsS.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    }
    milisek.innerHTML = miliseconds < 10 ? `0${miliseconds}` : miliseconds;
};

start.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(updateMiliseconds, 10);
    }
});

stop.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

reset.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    milisek.innerHTML = '00';
    secondsS.innerHTML = '00';
    minutesS.innerHTML = '00';
});

