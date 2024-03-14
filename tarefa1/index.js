let dados = document.getElementById('dados')
let resultado = document.getElementById('resultado')
let total = document.getElementById('total')

function valorTotal(){
    let t1, t2, area
    t1 = parseFloat(dados.frente.value)
    t2 = parseFloat(dados.lado.value)
   
    area = (t1 * t2)
    resultado.textContent = area

}