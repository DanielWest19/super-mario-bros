const butonTrailer = document.querySelector(".buton-trailer")
const modal = document.querySelector(".modal")
const fecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("trailer")
const linkDoVideo = trailer.src; 

function alternarModal(){
  modal.classList.toggle("aberto")
}

butonTrailer.addEventListener("click", () => {
  alternarModal()
  video.setAttribute("src", linkDoVideo)
})

fecharModal.addEventListener("click", () => {
  alternarModal()
  video.setAttribute("src", "")
})