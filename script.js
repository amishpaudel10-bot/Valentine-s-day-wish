// Flower popups
const flowersContainer = document.getElementById('flowers');
for(let i=0; i<30; i++){
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.animationDelay = Math.random() * 5 + 's';
    flowersContainer.appendChild(flower);
}

// Open Valentine Button
const openBtn = document.getElementById('openValentine');
const welcomeScreen = document.getElementById('welcomeScreen');
const photoContainer = document.getElementById('photoContainer');
const wishes = document.getElementById('wishes');
const bgMusic = document.getElementById('bgMusic');

openBtn.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
    photoContainer.style.display = 'flex';
    wishes.style.display = 'block';
    bgMusic.play();
});

// Photo Slideshow
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
