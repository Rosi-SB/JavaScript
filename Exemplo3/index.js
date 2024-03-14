let dados = document.getElementById('dados')
let resultado = document.getElementById('resultado')

function  calcularMedia(){
    let n1, n2, media
    n1 = parseFloat(dados.nota1.value)
    n2 = parseFloat(dados.nota2.value)
    media = (n1 + n2)/2
    
    resultado.textContent = media
    

}