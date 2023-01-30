const butonTrailer = document.querySelector(".buton-trailer")
const modal = document.querySelector(".modal")
const fecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("trailer")
const linkDoVideo = trailer.src

butonTrailer.addEventListener("click", () => {
  modal.classList.toggle("aberto")
  video.setAttribute("src", linkDoVideo)
});

fecharModal.addEventListener("click", () => {
  modal.classList.toggle("aberto");
  video.setAttribute("src", "")
});
