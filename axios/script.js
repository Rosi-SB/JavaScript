const form = document.forms[0]
const btnPesquisar = document.querySelector('[btn-submit]')
btnPesquisar.onclick = async (e) =>{
    e.preventDefault()
    let cep = form.cep.value
    let url = `https://viacep.com.br/ws/${cep}/json/`
    let dados = await axios.get(url)
    res await 
    res = res.data
    form.endereco.value = res.logradouro
    form.bairro.value = res.bairro
    form.cidade.value = res.localidade
    form.uf.value = res.uf
}
