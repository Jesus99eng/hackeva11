var containertabla = document.getElementById("containertabla")

function genertabla(table) {
    return `
    `
}

function renderizarhoras(array) {
    containertabla.innerHTML = ""
    array.forEach(item =>
        containertabla.innerHTML += genertabla(item)
    )
}

renderizarhoras(horario)
