const express = require("express");
const path = require("path");

const { Cliente, Produto, Venda, Vendedor } = require("./models/classes");

const app = express();
const porta = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

/* EXEMPLO DE ROTA PARA CADASTRO 
app.post("/cadastrar-professor", (req, res) => {
    const { nome, email, formacao } = req.body;

    const professor = new Professor(nome, email, formacao);

    professor.cadastrar((erro) => {
        if (erro) {
            console.log("Erro ao cadastrar professor:", erro);
            return res.send("Erro ao cadastrar professor.");
        }
        res.redirect("/cadastro-professor.html?sucesso=true");
    });
});
*/

//------------------------------
// Rotas para cadastro
//------------------------------
app.post("/cadastrar-cliente", (req, res) => {
    const { nome, cpf, email, telefone, endereco, data_nascimento } = req.body;

    const cliente = new Cliente(null, nome, cpf, email, telefone, endereco, data_nascimento);

    cliente.cadastrar((erro) => {
        if (erro) {
            console.log("Erro ao cadastrar cliente:", erro);
            return res.send("Erro ao cadastrar cliente.");
        }
        res.redirect("/cadastro-cliente.html?sucesso=true");
    });
});

app.post("/cadastrar-vendedor", (req, res) => {
    const { nome, cpf, email, telefone, matricula, setor, comissao } = req.body;

    const vendedor = new Vendedor(null, nome, cpf, email, telefone, matricula, setor, comissao);

    vendedor.cadastrar((erro) => {
        if (erro) {
            console.log("Erro ao cadastrar vendedor:", erro);
            return res.send("Erro ao cadastrar vendedor.");
        }
        res.redirect("/cadastro-vendedor.html?sucesso=true");
    });
});

app.post("/cadastrar-produto", (req, res) => {
    const { nome_produto, descricao, preco, quantidade_estoque, categoria } = req.body;

    const produto = new Produto(null, nome_produto, descricao, preco, quantidade_estoque, categoria);

    produto.cadastrar((erro) => {
        if (erro) {
            console.log("Erro ao cadastrar produto:", erro);
            return res.send("Erro ao cadastrar produto.");
        }
        res.redirect("/cadastro-produto.html?sucesso=true");
    });
});

app.post("/cadastrar-venda", (req, res) => {
    const { id_cliente, id_vendedor, id_produto, quantidade, data_venda, valor_total } = req.body;
    
    const venda = new Venda(null, id_cliente, id_vendedor, id_produto, quantidade, data_venda, valor_total);

    venda.cadastrar((erro) => {
        if (erro) {
            console.log("Erro ao cadastrar venda:", erro);
            return res.send("Erro ao cadastrar venda.");
        }
        res.redirect("/cadastro-venda.html?sucesso=true");
    });
});

//------------------------------
// Rotas para buscar Dados
//------------------------------
app.get("/api/buscar-clientes", (req, res) => {
    const clientes = new Cliente();
    clientes.buscarDados((erro, clientes) => {
        if (erro) {
            console.log("Erro ao buscar clientes:", erro);
            return res.send("Erro ao buscar clientes.");
        }
        res.json(clientes);
    });
});

app.get("/api/buscar-vendedores", (req, res) => {
    const vendedores = new Vendedor();
    vendedores.buscarDados((erro, vendedores) => {
        if (erro) {
            console.log("Erro ao buscar vendedores:", erro);
            return res.send("Erro ao buscar vendedores.");
        }
        res.json(vendedores);
    });
});

app.get("/api/buscar-produtos", (req, res) => {
    const produtos = new Produto();
    produtos.buscarDados((erro, produtos) => {
        if (erro) {
            console.log("Erro ao buscar produtos:", erro);
            return res.send("Erro ao buscar produtos.");
        }
        res.json(produtos);
    });
});


//------------------------------
// Rotas para editar Dados
//------------------------------



//------------------------------
// Rotas para apagar Dados
//------------------------------




app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});