// Password
function checkPass(){
  let pass = document.getElementById("password").value;

  if(pass === "amishnaima"){
    document.getElementById("lockScreen").style.display="none";
    document.getElementById("main").classList.remove("hide");
  }else{
    alert("Wrong Password 😢");
  }
}

// Open Valentine
function openLove(){
  document.getElementById("openBox").style.display="none";
  document.getElementById("content").classList.remove("hide");

  document.getElementById("music").play();
}

// Love Timer (Change Date Here)
let startDate = new Date("2024-01-01");

function updateTimer(){
  let now = new Date();
  let diff = now - startDate;

  let days = Math.floor(diff / (1000*60*60*24));

  document.getElementById("timer").innerHTML =
    days + " Days ❤️";
}

setInterval(updateTimer,1000);

// Falling Hearts
function createHeart(){
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML="❤️";

  heart.style.left = Math.random()*100 + "vw";
  heart.style.animationDuration = (2+Math.random()*3)+"s";

  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },5000);
}

setInterval(createHeart,300);
