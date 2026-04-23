const imagens = [ "../assets/Foto1.jpeg","../assets/Foto2.jpeg","../assets/Foto3.jpeg","../assets/Foto4.jpeg","../assets/Foto5.jpeg","../assets/Foto6.jpeg","../assets/Foto7.jpeg","../assets/Foto8.jpeg","../assets/Foto9.jpeg","../assets/Foto10.jpeg",];

let index = 0;

const slide = document.getElementById("slide");

// SLIDESHOW
setInterval(() => {
  index = (index + 1) % imagens.length;
  slide.src = imagens[index];
}, 2500);

// CONTAGEM
let tempo = 10;
const tempoElemento = document.getElementById("tempo");
const pedido = document.getElementById("pedido");
const contador = document.getElementById("contador");

const contagem = setInterval(() => {
  tempo--;
  tempoElemento.innerText = tempo;

  if (tempo <= 0) {
    clearInterval(contagem);
    contador.style.display = "none";
    pedido.classList.remove("hidden");
  }
}, 1000);

// BOTÕES
const btnSim = document.getElementById("sim");
const btnNao = document.getElementById("nao");
const resposta = document.getElementById("resposta");

btnSim.addEventListener("click", () => {
  resposta.innerText = "Te amo mais ainda depois desse SIM! 💘";
});

// botão NÃO foge
btnNao.addEventListener("mouseover", () => {
  const x = Math.random() * 150 - 75;
  const y = Math.random() * 150 - 75;
  btnNao.style.transform = `translate(${x}px, ${y}px)`;
});
