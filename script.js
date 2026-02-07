// Elements
const btn = document.getElementById('valentineBtn');
const slider = document.getElementById('slider');
const wishes = document.getElementById('wishes');
const loveMeter = document.getElementById('loveMeter');
const loveMeterFill = document.getElementById('loveMeterFill');
const loveQuote = document.getElementById('loveQuote');

// Button click to reveal surprises
btn.addEventListener('click', () => {
    slider.style.display = 'block';
    wishes.style.display = 'block';
    loveMeter.style.display = 'block';
    loveQuote.style.display = 'block';
    btn.style.display = 'none';
    loveMeterFill.style.width = '100%';
});

// Auto photo slider
const slides = document.getElementById('slides');
let index = 0;
setInterval(() => {
    index++;
    if(index >= slides.children.length) index = 0;
    slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

// Floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = 3 + Math.random() * 5 + 's';
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 8000);
}
setInterval(createHeart, 500);

// Falling petals
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.animationDuration = 5 + Math.random() * 5 + 's';
    document.body.appendChild(petal);

    // Animate falling
    let pos = -50;
    const fall = setInterval(() => {
        pos += 2;
        petal.style.top = pos + 'px';
        if(pos > window.innerHeight) {
            clearInterval(fall);
            petal.remove();
        }
    }, 20);
}
setInterval(createPetal, 300);

// Love quotes
const quotes = [
    "You're the peanut to my butter, Naima & Amish ❤️",
    "Together is my favorite place to be 💕",
    "Every love story is beautiful, but ours is my favorite 🌹",
    "Love is not about how many days, but how much we love each day 💌",
    "You are my today and all of my tomorrows ❤️"
];

let quoteIndex = 0;
setInterval(() => {
    loveQuote.textContent = quotes[quoteIndex];
    quoteIndex++;
    if(quoteIndex >= quotes.length) quoteIndex = 0;
}, 4000);
