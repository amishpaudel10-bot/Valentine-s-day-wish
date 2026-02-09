// Floating Hearts
function createHeart(){
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.fontSize = (15 + Math.random()*25) + "px";
  heart.style.animationDuration = (2 + Math.random()*3) + "s";
  document.body.appendChild(heart);

  setTimeout(()=> heart.remove(), 5000);
}

setInterval(createHeart, 300);
