// 1. Flowers Animation
const flowersContainer = document.getElementById('flowers');
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (Math.random() * 3 + 2) + "s";
    flowersContainer.appendChild(flower);
    setTimeout(() => { flower.remove(); }, 5000);
}
setInterval(createFlower, 300);

// 2. Typewriter Logic
const text = "From the moment you entered my life, everything started to make more sense. You have this incredible way of turning an ordinary day into something extraordinary just with your smile. Your kindness and the way you care for the people around you inspire me every single day.\n\nThank you for being my peace, my joy, and my best friend. Here is to us, today and every day that follows. I love you more than words can express.";

let index = 0;
function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 40); // Speed of typing (lower = faster)
    }
}

// 3. Button Click
const openBtn = document.getElementById('openValentine');
openBtn.addEventListener('click', () => {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('bgMusic').play();
    setTimeout(typeWriter, 1000); // Wait 1 second after opening to start typing
});

// 4. Slideshow
const photos = ['images/naima1.jpg', 'images/naima2.jpg', 'images/naima3.jpg'];
let currentIndex = 0;
const photoImg = document.getElementById('valentinePhoto');

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    photoImg.src = photos[currentIndex];
});
document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length;
    photoImg.src = photos[currentIndex];
});
