const passos = document.querySelectorAll('.passo');
const botoes = document.querySelectorAll('.btn-proximo');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const proximoId = botao.dataset.proximo;
        passos.forEach(passo => passo.classList.remove('ativo'));
        document.getElementById(`passo-${proximoId}`).classList.add('ativo');
    });
});
