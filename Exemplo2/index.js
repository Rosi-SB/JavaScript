let frame = document.getElementById('frame') //chamar uma variável
frame.innerHTML='<h3> Olá Mundo' //acrescenta código no html
frame.insertAdjacentHTML('beforebegin', '<p>Antes do início</p>')  
frame.insertAdjacentHTML('afterbegin', '<p>Antes do início</p>') 
frame.insertAdjacentHTML('beforeend', '<p>Antes do início</p>') 
frame.insertAdjacentHTML('afterend', '<p>Antes do início</p>') 