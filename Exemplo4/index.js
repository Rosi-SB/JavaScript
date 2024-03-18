let frame = document.getElementById('frame')
function mudarTamanho(tamanho){
    frame.classList.remove('pequeno', 'grande')
    frame.classList.add(tamanho  )
}