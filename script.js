const textToType = "From the moment you entered my life, everything started to make more sense. You have this incredible way of turning an ordinary day into something extraordinary just with your smile. Your kindness and the way you care for the people around you inspire me every single day.\n\nThank you for being my peace, my joy, and my best friend. Here is to us, today and every day that follows. I love you more than words can express.";

let index = 0;
function type() {
    if (index < textToType.length) {
        document.getElementById("typewriter-text").innerHTML += textToType.charAt(index);
        index++;
        setTimeout(type, 50);
    }
}

document.getElementById('openValentine').addEventListener('click', () => {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('bgMusic').play();
    setTimeout(type, 500);
});

// Slideshow logic
const imgs = ['images/naima1.jpg', 'images/naima2.jpg', 'images/naima3.jpg'];
let current = 0;
const photoEl = document.getElementById('valentinePhoto');

document.getElementById('prevBtn').addEventListener('click', () => {
    current = (current - 1 + imgs.length) % imgs.length;
    photoEl.src = imgs[current];
});
document.getElementById('nextBtn').addEventListener('click', () => {
    current = (current + 1) % imgs.length;
    photoEl.src = imgs[current];
});

// Flowers
setInterval(() => {
    const f = document.createElement('div');
    f.className = 'flower';
    f.style.left = Math.random() * 100 + "vw";
    f.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 5000);
}, 300);
