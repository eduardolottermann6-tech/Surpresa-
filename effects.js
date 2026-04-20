const canvas = document.getElementById("confete");
const ctx = canvas.getContext("2d");

canvas.widht = windows.innerWidth;
canvas.height = windows.innerHeight;

function soltarConfete() {
  for (let i = 0; i < 100; i++) {
    criarConfete():
  }
}

function criarConfete() {
  const x = Math.random() * canvas.widht;
  const y = Math.random() * canvas.height;

  ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
}