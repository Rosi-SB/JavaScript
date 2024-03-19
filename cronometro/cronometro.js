let cronometro = document.getElementById('cronometro')
let iniciar = document.getElementById('iniciar')
let contagem, tempo = 0

function iniciarCronometro(){
    parar.disabled = true
    
    if(tempo == 0){
        tempo =parseInt(prompt('Informe o tempo em segundos: '))
    }
    exibirCronometro()
}
function exibirCronometro(){
    contagem = setInterval(()=>{
        cronometro.textContent=tempo
        // "--" regressiva "++" progressiva
        tempo-- 
        if(tempo<0){
            window.location.reload()
        }
        
    }, 1000)

}
function pararCronometro(){
    iniciar.disabled = false
    clearInterval(contagem)
}