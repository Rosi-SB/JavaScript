

const form = document.forms[0]
const btnPesquisar = document.querySelector('[btn-submit]')

btnPesquisar.onclick =(e) =>{
    e.preventDefault()
    let cep = form.cep.value
    let url = `https://viacep.com.br/ws/${cep}/json/`
    fetch(url)
        .then(res => res.json()) // resposta da requisição
        .then((res) =>{  // insere as informções
           console.log(res)
           form.endereco.value= res.logradouro
           form.bairro.value= res.bairro
           form.cidade.value= res.localidade
           form.uf.value= res.uf})
        .catch((err) =>{
            console.log('Deu ruim! ' + err)
        })
}