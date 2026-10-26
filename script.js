console.log("MVP da Loja de Roupas iniciado!");

function validarProduto(produto) {
    if (!produto.nome || produto.nome.trim() === "") {
        return {
            valido: false,
            mensagem: "O nome do produto é obrigatório."
        };
    }

    if (typeof produto.preco !== "number" || produto.preco <= 0) {
        return {
            valido: false,
            mensagem: "O preço deve ser maior que zero."
        };
    }

    if (!Number.isInteger(produto.quantidade) || produto.quantidade < 0) {
        return {
            valido: false,
            mensagem: "A quantidade deve ser um número inteiro não negativo."
        };
    }

    return {
        valido: true,
        mensagem: "Produto válido."
    };
}

// Integração com o formulário no navegador.
if (typeof document !== "undefined") {
    const formulario = document.getElementById("form-produto");
    const campoNome = document.getElementById("nome");
    const campoPreco = document.getElementById("preco");
    const campoQuantidade = document.getElementById("quantidade");
    const mensagem = document.getElementById("mensagem");

    if (formulario && campoNome && campoPreco && campoQuantidade && mensagem) {
        formulario.addEventListener("submit", function(evento) {
            evento.preventDefault();

            const produto = {
                nome: campoNome.value,
                preco: Number(campoPreco.value),
                quantidade: Number(campoQuantidade.value)
            };

            const resultado = validarProduto(produto);
            mensagem.textContent = resultado.mensagem;

            if (resultado.valido) {
                formulario.reset();
            }
        });
    }
}

export { validarProduto };
