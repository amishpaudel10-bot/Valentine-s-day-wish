
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

// Music control: click anywhere to pause/play
const music = document.getElementById('valentine-music');
document.body.addEventListener('click', () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
