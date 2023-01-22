const botao = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const fechar = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const linkVideo = video.src;

function alternarModal() {
    modal.classList.toggle('aberto')
}

botao.addEventListener("click", () => {
    alternarModal();
    video.setAttribute('src', linkVideo)
});

fechar.addEventListener('click', () => {
    alternarModal();
    video.setAttribute('src', '')
});