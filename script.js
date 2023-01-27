const butonTrailer = document.querySelector(".buton-trailer")
const modal = document.querySelector(".modal")
const fecharModal = document.querySelector(".fechar-modal")

butonTrailer.addEventListener("click", () => {
  modal.classList.add("aberto")
})
