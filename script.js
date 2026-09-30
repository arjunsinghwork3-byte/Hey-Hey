const params = new URLSearchParams(location.search);
const recipient = params.get("name") || "Sawari";
document.getElementById("recipient").textContent = recipient;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const actions = document.getElementById("actions");
const hint = document.getElementById("hint");
const questionView = document.getElementById("questionView");
const successView = document.getElementById("successView");
const toast = document.getElementById("toast");

let noCount = 0;
const noMessages = [
  "are you sure? 🥺",
  "the button is getting shy…",
  "nice try 😭",
  "nope, try again 💗",
  "you know you want to say yes",
  "okay that's enough 😭💕"
];

function moveNo(){
  noCount++;
  const pad = 12;
  const area = actions.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();
  const maxX = Math.max(0, area.width - btn.width - pad*2);
  const maxY = 42;
  const x = Math.random()*maxX - maxX/2;
  const y = (Math.random()*maxY) - maxY/2;
  noBtn.style.transform = `translate(${x}px,${y}px) rotate(${(Math.random()*8-4).toFixed(1)}deg)`;
  hint.textContent = noMessages[Math.min(noCount-1,noMessages.length-1)];
}
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", e => { e.preventDefault(); moveNo(); }, {passive:false});
noBtn.addEventListener("click", e => { e.preventDefault(); moveNo(); });

yesBtn.addEventListener("click", ()=>{
  questionView.classList.add("hidden");
  successView.classList.remove("hidden");
  document.title = `Yayy! ${recipient} said YES! 💗`;
  startScenes();
});

const scenes = [
  `<div class="sticker scene scene-1"><div class="big-heart">♥</div><div class="kitty kitty-a">🐱</div><div class="kitty kitty-b">🐰</div><div class="spark s1">✦</div><div class="spark s2">♥</div></div>`,
  `<div class="sticker scene"><div style="font-size:88px;transform:translateY(4px)">🧸</div><div class="big-heart">♥</div></div>`,
  `<div class="sticker scene"><div style="font-size:86px">🥰</div><div class="big-heart">♥</div></div>`,
  `<div class="sticker scene"><div style="font-size:82px">🐻‍❄️</div><div class="big-heart">♥</div></div>`
];
let sceneIndex=0, sceneTimer;
function startScenes(){
  const box=document.getElementById("reaction");
  sceneTimer=setInterval(()=>{
    sceneIndex=(sceneIndex+1)%scenes.length;
    box.innerHTML=scenes[sceneIndex];
  },1800);
}

document.getElementById("shareBtn").addEventListener("click", async ()=>{
  const shareData={title:`A question for ${recipient} 💗`,text:`A question for Sawari 💗`,url:location.href};
  try{
    if(navigator.share) await navigator.share(shareData);
    else {await navigator.clipboard.writeText(location.href);showToast("Link copied! 💗");}
  }catch(e){}
});

document.getElementById("ownBtn").addEventListener("click",()=>{
  location.href = location.origin + location.pathname;
});

function showToast(msg){
  toast.textContent=msg; toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1800);
}
