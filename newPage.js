document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as abas clicáveis
    const abas = document.querySelectorAll('.aba');

    abas.forEach(aba => {
        aba.addEventListener('click', () => {
            // Pega o valor do atributo 'data-aba' (ex: 'manga' ou 'anime')
            const alvoId = aba.getAttribute('data-aba');
            const alvoConteudo = document.getElementById(alvoId);

            // Remove a classe 'aba-ativa' de todas as abas
            document.querySelectorAll('.aba').forEach(a => a.classList.remove('aba-ativa'));
            
            // Adiciona a classe 'aba-ativa' apenas na aba clicada
            aba.classList.add('aba-ativa');

            // Esconde todos os conteúdos
            document.querySelectorAll('.menu-aba-conteudo').forEach(conteudo => {
                conteudo.classList.remove('conteudo-ativo');
            });

            // Mostra o conteúdo correspondente à aba clicada
            if (alvoConteudo) {
                alvoConteudo.classList.add('conteudo-ativo');
            }
        });
    });
});