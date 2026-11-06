```javascript
document.addEventListener("DOMContentLoaded", () => {

    // ALTERNAR TEMA
    const botaoTema = document.getElementById("botao-tema");
    const iconeTema = botaoTema?.querySelector("i");

    if (botaoTema && iconeTema) {
        botaoTema.addEventListener("click", () => {
            document.body.classList.toggle("tema-escuro");

            const escuro = document.body.classList.contains("tema-escuro");

            iconeTema.className = escuro
                ? "bi bi-sun-fill"
                : "bi bi-moon-stars-fill";
        });
    }

    // EFEITO MÁQUINA DE ESCREVER
    const elementoTexto = document.getElementById("texto-digitado");

    if (elementoTexto) {
        const frases = [
            "Estudante de Desenvolvimento Web",
            "Aprendendo HTML, CSS e JavaScript",
            "Futuro Desenvolvedor"
        ];

        let indiceFrase = 0;
        let indiceLetra = 0;
        let apagando = false;

        function escrever() {
            const frase = frases[indiceFrase];

            if (apagando) {
                indiceLetra--;
            } else {
                indiceLetra++;
            }

            elementoTexto.textContent = frase.substring(0, indiceLetra);

            let velocidade = apagando ? 45 : 90;

            if (!apagando && indiceLetra === frase.length) {
                apagando = true;
                velocidade = 1800;
            }

            if (apagando && indiceLetra === 0) {
                apagando = false;
                indiceFrase = (indiceFrase + 1) % frases.length;
                velocidade = 500;
            }

            setTimeout(escrever, velocidade);
        }

        escrever();
    }

    // MENU MOBILE
    const botaoMenu = document.getElementById("botao-menu-mobile");
    const menu = document.getElementById("menu-navegacao");

    if (botaoMenu && menu) {
        const iconeMenu = botaoMenu.querySelector("i");

        botaoMenu.addEventListener("click", () => {
            menu.classList.toggle("ativo");

            const aberto = menu.classList.contains("ativo");

            iconeMenu.className = aberto
                ? "bi bi-x-lg"
                : "bi bi-list";

            botaoMenu.setAttribute(
                "aria-label",
                aberto ? "Fechar menu" : "Abrir menu"
            );
        });

        document.querySelectorAll(".link-menu").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("ativo");
                iconeMenu.className = "bi bi-list";
                botaoMenu.setAttribute("aria-label", "Abrir menu");
            });
        });
    }

    // BOTÃO VOLTAR AO TOPO
    const botaoTopo = document.getElementById("botao-topo");

    if (botaoTopo) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                botaoTopo.classList.add("visivel");
            } else {
                botaoTopo.classList.remove("visivel");
            }
        });

        botaoTopo.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // ANO AUTOMÁTICO
    const elementoAno = document.getElementById("ano-atual");

    if (elementoAno) {
        elementoAno.textContent = new Date().getFullYear();
    }

    // ANIMAÇÃO DAS SEÇÕES
    const secoes = document.querySelectorAll(".secao-oculta");

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("secao-visivel");
                    observador.unobserve(entrada.target);
                }
            });
        }, {
            threshold: 0.1
        });

        secoes.forEach(secao => observador.observe(secao));
    } else {
        secoes.forEach(secao => {
            secao.classList.add("secao-visivel");
        });
    }

});
```