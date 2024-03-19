let form = document.getElementById('form')
form[1].onclick = function(event){
    // interrompe a ação do form
    event.preventDefault()
    let url = 'https://www.google.com/search'
    // seleciona a caixa de pesquisa e o botão pesquisar
    let q = form[0].value
    //q = q.replace(' ', '+')
    let hl = form[2].value
    // ${} concatena a ação dos eventos a caixa e o botão de pesquisa 
    url = `${url}?q=${q}&hl=${hl}`
    form.action = url
    form.submit()
}
