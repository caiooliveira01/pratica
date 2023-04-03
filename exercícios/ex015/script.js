var btn = document.querySelector("#btn")
btn.addEventListener('click', verificar)

function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = Number(document.getElementById('nasc').value)
    let res = document.getElementById('resultado')

    if (nasc == '' || nasc < 0 || isNaN(nasc)) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let idade = ano - nasc
        let sex = document.getElementsByName('sexo')
        let genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.src = 'fotobebe-m.png'

            } else if (idade < 21) {
                // Jovem
                img.src = 'fotojovem-m.png'

            } else if (idade < 55) {
                // Adulto
                img.src = 'fotoadulto-m.png'

            } else {
                // Idoso
                img.src = 'fotoidoso-m.png'

            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                // Criança
                img.src = 'fotobebe-f.png'

            } else if (idade < 21) {
                // Jovem
                img.src = 'fotojovem-f.png'

            } else if (idade < 55) {
                // Adulto
                img.src = 'fotoadulto-f.png'

            } else {
                // Idoso
                img.src = 'fotoidoso-f.png'

            }
        }

        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

