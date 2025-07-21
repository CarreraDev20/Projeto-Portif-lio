document.addEventListener('DOMContentLoaded', () => {
    // 1. Rolagem Suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Ativa a rolagem suave
                });
            }

            // Remove a classe 'active' de todos os links e adiciona ao clicado
            document.querySelectorAll('.menu-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // 2. Scroll Spy para destacar o link ativo na navegação
    const sections = document.querySelectorAll('section, main#inicio'); // Seleciona todas as seções e o cabeçalho inicial
    const navLinks = document.querySelectorAll('.menu-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Ajuste o offset para quando a seção está visível na tela
            if (scrollY >= sectionTop - sectionHeight / 3) { // Use sectionHeight / 3 para um offset razoável
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active'); // Remove a classe 'active' de todos
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active'); // Adiciona a classe 'active' ao link da seção atual
            }
        });
    });

    // 3. Feedback visual para o formulário (exemplo simples)
    const formulario = document.getElementById('formulario');
    const nomeInput = document.getElementById('nome');
    const mensagemInput = document.getElementById('mensagem');
    const telefoneWhatsApp = '5571992996457'; // Seu número de WhatsApp

    if (formulario) {
        formulario.addEventListener('submit', (event) => {
            event.preventDefault(); // Previne o envio padrão do formulário

            // Validação simples
            if (nomeInput.value.trim() === '' || mensagemInput.value.trim() === '') {
                alert('Por favor, preencha todos os campos do formulário.');
                // Você pode adicionar um feedback visual mais elaborado aqui (ex: mudar borda para vermelho)
                if (nomeInput.value.trim() === '') {
                    nomeInput.style.borderColor = 'red';
                } else {
                    nomeInput.style.borderColor = ''; // Reset
                }
                if (mensagemInput.value.trim() === '') {
                    mensagemInput.style.borderColor = 'red';
                } else {
                    mensagemInput.style.borderColor = ''; // Reset
                }
                return; // Impede o envio se a validação falhar
            }

            // Resetar a cor da borda se tudo estiver preenchido
            nomeInput.style.borderColor = '';
            mensagemInput.style.borderColor = '';

            const nome = nomeInput.value;
            const mensagem = mensagemInput.value;
            const texto = `Olá, me chamo ${nome}, ${mensagem}`;
            const msgFormatada = encodeURIComponent(texto);
            const urlZap = `https://wa.me/${telefoneWhatsApp}?text=${msgFormatada}`;

            window.open(urlZap, "_blank");

            // Limpa o formulário após o envio
            formulario.reset();
        });
    }
});



      function enviarWhatsApp(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const mensagem = document.getElementById('mensagem').value;
            const telefone = '5571992996457';

            const texto = `Olá, me chamo ${nome}, ${mensagem}`;
            const msgFormatada = encodeURIComponent(texto);
            const urlZap = `https://wa.me/${telefone}?text=${msgFormatada}`;

            window.open(urlZap, "_blank");

            console.log(urlZap);
        }