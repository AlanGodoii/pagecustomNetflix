const perguntas = document.querySelectorAll(".faq-item");

perguntas.forEach((pergunta) => {

    const titulo = pergunta.querySelector("summary");

    titulo.addEventListener("click", (event) => {

        event.preventDefault();

        const estavaAberta = pergunta.hasAttribute("open");

        perguntas.forEach((outraPergunta) => {
            outraPergunta.removeAttribute("open");
        });

        if (!estavaAberta) {
            pergunta.setAttribute("open", "");
        }

    });

});