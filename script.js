// 1. Create Floating Flowers
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

// 2. Button Logic
const openBtn = document.getElementById('openValentine');
const welcomeScreen = document.getElementById('welcomeScreen');
const mainContent = document.getElementById('mainContent');
const bgMusic = document.getElementById('bgMusic');

openBtn.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
    mainContent.style.display = 'block';
    bgMusic.play();
});

// 3. Photo Slideshow
const photos = [
    'images/naima1.jpg',
    'images/naima2.jpg',
    'images/naima3.jpg'
];
let currentIndex = 0;
const valentinePhoto = document.getElementById('valentinePhoto');

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    valentinePhoto.src = photos[currentIndex];
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length;
    valentinePhoto.src = photos[currentIndex];
});
