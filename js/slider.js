const slides = [
  { src: "images/front.png" },
  { src: "images/Rear-right-corner.png"},
  { src: "images/Rear-left-corner.png" },
  { src: "images/back.png" },
  { src: "images/top.png"}
];

const SPEED = 1000;      
const DELAY = 3000;     

const track = document.getElementById("track");
const dotsBox = document.getElementById("dots");
const total = slides.length;

let pos = 1;            
let busy = false;
let timer;

function makeSlide(s) {
  const el = document.createElement("div");
  el.className = "slide";
  el.innerHTML = `<img src="${s.src}" alt="${s.title}">`;
  return el;
}

track.appendChild(makeSlide(slides[total - 1]));
slides.forEach(s => track.appendChild(makeSlide(s)));
track.appendChild(makeSlide(slides[0]));

slides.forEach((s, i) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.setAttribute("aria-label", "Go to slide " + (i + 1));
  dot.addEventListener("click", () => { jumpTo(i + 1); restart(); });
  dotsBox.appendChild(dot);
});

function updateDots() {
  let real = pos;
  if (pos === 0) real = total;
  if (pos === total + 1) real = 1;
  [...dotsBox.children].forEach((d, i) => d.classList.toggle("active", i === real - 1));
}

function show(p, animate) {
  track.style.transition = animate ? `transform ${SPEED}ms ease` : "none";
  track.style.transform = `translateX(-${p * 100}%)`;
  pos = p;
  updateDots();
}

function jumpTo(p) {
  if (busy || p === pos) return;
  busy = true;
  show(p, true);
  setTimeout(finish, SPEED + 30);
}

function move(step) { jumpTo(pos + step); }


function finish() {
  if (pos === total + 1) {
    show(1, false);
  } else if (pos === 0) {
    show(total, false);
  }
  void track.offsetWidth;     
  busy = false;
}

function restart() {
  clearInterval(timer);
  timer = setInterval(() => move(1), DELAY);
}

document.getElementById("next").addEventListener("click", () => { move(1); restart(); });
document.getElementById("prev").addEventListener("click", () => { move(-1); restart(); });
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") { move(1); restart(); }
  if (e.key === "ArrowLeft")  { move(-1); restart(); }
});

show(1, false);
restart();