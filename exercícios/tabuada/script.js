var btn = document.querySelector("#btn")
btn.addEventListener('click', tabuada)

function tabuada() {
    let n = Number(document.querySelector("#num").value)
    let tab = document.querySelector("#seltab")

    if (n == '') {
        alert('Por favor, digite um número!')

    } else {
        tab.innerHTML = '' // Limpar

        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}