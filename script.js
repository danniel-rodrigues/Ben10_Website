let count = 1;
document.getElementById("radio1").checked = true;
let itemMenu = document.querySelectorAll('a');


// Detectar o scroll e alterar o header
window.addEventListener("scroll", function() {
    let header = document.querySelector('header');
    header.classList.toggle('scroll', window.scrollY > 0);
})


// Destacar o item selecinado no menu
itemMenu.forEach(item => {
    item.addEventListener("click", function() {
        document.querySelector(".ativo").classList.remove("ativo")
        item.classList.add("ativo");
    })
})

setInterval(function() {
    nextSlide();
}, 10000)

function nextSlide() {
    count++;
    if(count > 10) count = 1;

    document.getElementById("radio"+count).checked = true;
}


// Através do Intersect Observer oberva os elementos que surgem na tela e atribui as animações
const intresectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
})

const elements = document.querySelectorAll('.animate')
elements.forEach(el => {
    intresectObserver.observe(el)
})