
// stopwatch
let stopwatch;
let startTime;
let isRunning = false;

function startStopwatch() {

    if (!isRunning) {
        startTime = new Date().getTime();
        stopwatch = setInterval(updateDisplay, 1000);
        isRunning = true;
    }

}

function stopStopwatch() {

    clearInterval(stopwatch);
    isRunning = false;

}

function resetStopwatch() {

    stopStopwatch();
    document.getElementById('display').innerText = '00:00:00';

}

function updateDisplay() {

    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const displayHours = String(hours).padStart(2, '0');
    const displayMinutes = String(minutes % 60).padStart(2, '0');
    const displaySeconds = String(seconds % 60).padStart(2, '0');

    document.getElementById('display').innerText = `${displayHours}:${displayMinutes}:${displaySeconds}`;

}




// Quats
const Quats = [
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "So many books, so little time.",
    "A room without books is like a body without a soul.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "If you tell the truth, you don't have to remember anything.",
    "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.",
    "If you want to lift yourself up, lift up someone else.",
    "I scorched the earth with my talent and I let my light shine.",
    "You’re braver than you believe, stronger than you seem, and smarter than you think.",
    "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.",
    "You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself and your those around you.",
    "Attitude is the 'little' thing that makes a big difference.",
    "We will fail when we fail to try.",
    "All our dreams can come true — if we have the courage to pursue them.",
    "Once you face your fear, nothing is ever as hard as you think.",
    "I don’t go to church regular. But I pray for answers to my problems."
];

const chengeQuots = () => {

    let cng = Math.random();
    let quot = Math.floor(cng * 100);

    if (quot >= 0 && quot < Quats.length) {

        document.getElementById('qts').innerHTML = Quats[quot];

    } else {

        chengeQuots();

        ;
    }

};


