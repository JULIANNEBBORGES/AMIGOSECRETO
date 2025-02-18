// 1. Crie um array para armazenar os nomes na lista
let amigos = [];

// 2. Implementa uma função para agregar amigos na lista
function adicionarAmigo() {
 // Captura o valor do campo de entrada
 const nomeAmigo = document.getElementById('amigo').value.trim();

 // Validar a entrada
 if (nomeAmigo === '') {
 // Se estiver vazio, exiba um alerta
 alert('Por favor, insira um nome.');
 return;
 }

 // Validar se o nome já existe na lista (ignorando case)
 const nomeAmigoMinusculo = nomeAmigo.toLowerCase();
 if (amigos.map(nome => nome.toLowerCase()).includes(nomeAmigoMinusculo)) {
 alert('Este nome já foi adicionado.');
 return;
 }

 // Atualizar o array de amigos
 amigos.push(nomeAmigo); // Adiciona o nome ao array

 // Limpar o campo de entrada
 document.getElementById('amigo').value = ''; // Limpa o campo de texto

 // Atualizar a lista de amigos na página
 atualizarListaAmigos();
}

// 3. Implementa uma função para atualizar a lista de amigos
function atualizarListaAmigos() {
 // Obter o elemento da lista
 const listaAmigos = document.getElementById('listaAmigos');

 // Limpar a lista existente
 listaAmigos.innerHTML = "";

 // Percorrer o array
 for (let i = 0; i < amigos.length; i++) {
 // Adicionar elementos à lista
 const li = document.createElement('li');
 li.textContent = amigos[i];
 listaAmigos.appendChild(li);
 }
}

// 4. Implementa uma função para sortear os amigos
function sortearAmigo() {
 // Validar que há amigos disponíveis
 if (amigos.length < 2) {
 alert('Adicione pelo menos dois amigos à lista antes de sortear.');
 return;
 }

 // Gerar um índice aleatório
 const indiceAleatorio = Math.floor(Math.random() * amigos.length);

 // Obter o nome sorteado
 const amigoSorteado = amigos[indiceAleatorio];

 // Mostrar o resultado
 const resultadoElement = document.getElementById('resultado');
 resultadoElement.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
