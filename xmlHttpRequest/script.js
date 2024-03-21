//" modelo: CALL BACK - CHAMADA DE RETORNO"

// querySelection "procurar e selecionar"; [] "atributo"
let btnPesquisar = document.querySelector('[btn-submit]')
// function nome() "modelo antigo ES-5" | ()=> "modelo atual ES-6"
btnPesquisar.onclick = (event) => {
    event.preventDefault()
    const form = document.forms[0]
    let cep = form.cep.value
    let url = `https://viacep.com.br/ws/${cep}/json/`
    ajax = new XMLHttpRequest()
    ajax.open("GET", url, true) 
    //O valor padrão para o parâmetro async é async = true. XMLHttpRequest síncrono (assíncrono = false) não é recomendado porque o JavaScript irá Pare de executar até que a resposta do servidor esteja pronta.
    ajax.send(null)
    ajax.onreadystatechange = () =>{
        if(ajax.readyState == 4){
            if (ajax.status == 200){
                console.log(ajax.responseText) // Chega como um JSON
                let resposta = JSON.parse(ajax.responseText) //converte o valor em dados(texto)
                console.log(resposta)
                form.endereco.value = resposta.logradouro
                form.bairro.value = resposta.bairro
                form.cidade.value = resposta.localidade
                form.uf.value = resposta.uf
            }
        }
    }
}