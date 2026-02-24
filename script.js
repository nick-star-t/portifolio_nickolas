const posts = document.querySelectorAll(".social-post img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const counter = document.getElementById("counter");

let images = [];
let index = 0;

/* pega todas as imagens */
posts.forEach((img, i) => {
  images.push(img.src);

  img.addEventListener("click", () => {
    index = i;
    openModal();
  });
});

/* abrir modal */
function openModal() {
  modal.classList.add("active");
  modalImg.src = images[index];
  updateCounter();
}

/* fechar modal */
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

/* fechar clicando fora */
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

/* próxima */
nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  index = (index + 1) % images.length;
  modalImg.src = images[index];
  updateCounter();
});

/* anterior */
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  index = (index - 1 + images.length) % images.length;
  modalImg.src = images[index];
  updateCounter();
});

/* contador */
function updateCounter() {
  counter.textContent = `${index + 1}/${images.length}`;
}