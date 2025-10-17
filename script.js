const secCadastro = document.getElementById('sec-cadastro');
const secEdicao = document.getElementById('sec-edicao');

document.getElementById('btn-cadastro').addEventListener('click', () => {
  secCadastro.classList.remove('hidden'); 
  secEdicao.classList.add('hidden');      
});

document.getElementById('btn-edicao').addEventListener('click', () => {
  secEdicao.classList.remove('hidden');   
  secCadastro.classList.add('hidden');    
});

document.getElementById('form-cadastro').addEventListener('submit', e => {
  e.preventDefault(); 
  alert('Produto cadastrado com sucesso.');
});

document.getElementById('btn-buscar').addEventListener('click', () => {
  const codigo = document.getElementById('buscar-codigo').value.trim();
  if (codigo === '') {
    alert('Digite um código de barras para buscar.');
  } else {
    alert('Produto localizado (simulação).');
  }
});

document.getElementById('form-edicao').addEventListener('submit', e => {
  e.preventDefault();
  alert('Alterações salvas com sucesso.');
});

document.getElementById('btn-excluir').addEventListener('click', () => {
  const confirmacao = confirm('Tem certeza que deseja excluir este produto?');
  if (confirmacao) {
    alert('Produto excluído com sucesso (simulação).');
  }
});