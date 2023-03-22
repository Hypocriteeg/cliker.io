const button = document.querySelector('.button')
const counter = document.querySelector('.counter')
button.addEventListener('click', () => {
    i++
counter.innerHTML = i
})