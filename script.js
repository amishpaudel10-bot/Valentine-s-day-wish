
// Flower popups
const flowersContainer = document.getElementById('flowers');
for(let i=0; i<30; i++){
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.animationDelay = Math.random() * 5 + 's';
    flowersContainer.appendChild(flower);
}

// Open Valentine button
const openBtn = document.getElementById('openValentine');
const photoBook = document.getElementById('photoBook');
const wishes = document.getElementById('wishes');
const bgMusic = document.getElementById('bgMusic');

openBtn.addEventListener('click', () => {
    openBtn.style.display = 'none';
    photoBook.style.opacity = 1;
    wishes.style.opacity = 1;
    bgMusic.play();
    startPhotoBook();
});

// Photo book images
const amishPhotos = [
    'https://i.ibb.co/4N8F5p7/amish1.jpg',
    'https://i.ibb.co/2F1w1kR/amish2.jpg',
    'https://i.ibb.co/4N8F5p7/amish3.jpg'
];

const naimaPhotos = [
    'https://i.ibb.co/z6bJZzN/naima1.jpg',
    'https://i.ibb.co/0yXYN2m/naima2.jpg',
    'https://i.ibb.co/z6bJZzN/naima3.jpg'
];

let index = 0;
function startPhotoBook() {
    setInterval(() => {
        index = (index + 1) % amishPhotos.length;
        document.getElementById('amishPhoto').src = amishPhotos[index];
        document.getElementById('naimaPhoto').src = naimaPhotos[index];
    }, 3000);
}
