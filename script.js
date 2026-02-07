// 1. Typewriter Logic
const storyText = "From the moment you entered my life, everything started to make more sense. You have this incredible way of turning an ordinary day into something extraordinary just with your smile. Your kindness and the way you care for the people around you inspire me every single day.\n\nThank you for being my peace, my joy, and my best friend. Here is to us, today and every day that follows. I love you more than words can express.";

let charIndex = 0;
function startTyping() {
    if (charIndex < storyText.length) {
        document.getElementById("typewriter-text").innerHTML += storyText.charAt(charIndex);
        charIndex++;
        setTimeout(startTyping, 40);
    }
}

// 2. Button Action
document.getElementById('openValentine').addEventListener('click', () => {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'flex';
    document.getElementById('bgMusic').play();
    setTimeout(startTyping, 1000);
});

// 3. Slideshow
const images = ['images/naima1.jpg', 'images/naima2.jpg', 'images/naima3.jpg'];
let currentImg = 0;
const photo = document.getElementById('valentinePhoto');

document.getElementById('prevBtn').addEventListener('click', () => {
    currentImg = (currentImg - 1 + images.length) % images.length;
    photo.src = images[currentImg];
});
document.getElementById('nextBtn').addEventListener('click', () => {
    currentImg = (currentImg + 1) % images.length;
    photo.src = images[currentImg];
});

// 4. Flowers
setInterval(() => {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 5000);
}, 300);
            
