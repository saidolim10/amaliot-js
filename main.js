const body = document.querySelector('body')

let orqarang = prompt('BackgroundColor')
let rang = prompt('Text Color')
let razmer = prompt('text Razmer')

const p = document.querySelector('p')

p.style.color = rang
p.style.fontSize = razmer
body.style.backgroundColor = orqarang
