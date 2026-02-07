// Open Valentine Button
const openBtn = document.getElementById('openBtn');
const openScreen = document.getElementById('openScreen');
const mainContainer = document.getElementById('mainContainer');
const music = document.getElementById('valentine-music');

openBtn.addEventListener('click', () => {
    openScreen.style.display = 'none';
    mainContainer.style.display = 'block';
    music.play().catch(() => {
        console.log("Autoplay blocked, click to play music.");
    });
});

// Page Swipe Functionality
let currentPage = 0;
const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.remove('active');
        if(i === index) page.classList.add('active');
    });
}

prevBtn.addEventListener('click', () => {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    showPage(currentPage);
});

nextBtn.addEventListener('click', () => {
    currentPage = (currentPage + 1) % pages.length;
    showPage(currentPage);
});

// Optional: Click anywhere to play/pause music
document.body.addEventListener('click', (e) => {
    if(e.target.id !== 'openBtn') {
        if (music.paused) music.play();
        else music.pause();
    }
});
