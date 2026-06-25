const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "alunolab",
    database: "cadastro_comercial"
});

 /* EXEMPLO DE CLASSE PARA CADASTRO 
class Pagamento {
    constructor(numero, matricula_professor, horas_trabalhadas, valor_hora,data_pag, salario) {
        this.numero = numero;
        this.matricula_professor = matricula_professor;
        this.horas_trabalhadas = horas_trabalhadas;
        this.valor_hora = valor_hora;
        this.data_pag = data_pag;
        this.salario = salario;
    }

    cadastrar(callback) {
        const sql = `
            INSERT INTO pag_professor (matricula_professor, horas_trabalhadas, valor_hora, data_pag, salario)
            VALUES (?, ?, ?, ?, ?)
        `;

        conexao.query(sql, [
            this.matricula_professor,
            this.horas_trabalhadas,
            this.valor_hora,
            this.data_pag,
            this.salario
        ], callback);
    }

    buscarDados(callback) {
        const sql = `
            SELECT 
                pag_professor.*, professores.nome AS nome_professor
            FROM
                pag_professor
                    LEFT JOIN
                professores ON professores.matricula = pag_professor.matricula_professor
        `;

        conexao.query(sql, callback);
    }

    editarDados(callback) {
        const sql = `
            UPDATE pag_professor
            SET matricula_professor = ?, horas_trabalhadas = ?, valor_hora = ?, data_pag = ?, salario = ?
            WHERE numero = ?
        `;
        conexao.query(sql, [
            this.matricula_professor,
            this.horas_trabalhadas,
            this.valor_hora,
            this.data_pag,
            this.salario,
            this.numero
        ], callback);
    }

    apagarDados(callback) {
        const sql = `
            DELETE FROM pag_professor
            WHERE numero = ?
        `;
        conexao.query(sql, [this.numero], callback);
    }
}
*/

class Pessoa {
    constructor(nome, cpf, email, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
    }
}

class Cliente extends Pessoa {
    constructor(id_cliente, nome, cpf, email, telefone, endereco, data_nascimento) {
        super(nome, cpf, email, telefone);
        this.idCliente = id_cliente;
        this.endereco = endereco;
        this.data_nascimento = data_nascimento; 
    }
    cadastrar(callback) {
        const sql = `
            INSERT INTO cliente (nome, cpf, email, telefone, endereco, data_nascimento)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        conexao.query(sql, [this.nome, this.cpf, this.email, this.telefone, this.endereco, this.data_nascimento], callback);
    }
    buscarDados(callback) {
        const sql = `
            SELECT * FROM cliente
        `;
        conexao.query(sql, callback);
    }
    editarDados(callback) {
        const sql = `
            UPDATE cliente
            SET nome = ?, cpf = ?, email = ?, telefone = ?, endereco = ?, data_nascimento = ?
            WHERE id_cliente = ?
        `;
        conexao.query(sql, [this.nome, this.cpf, this.email, this.telefone, this.endereco, this.data_nascimento, this.idCliente], callback);
    }
    apagarDados(callback) {
        const sql = `
            DELETE FROM cliente
            WHERE id_cliente = ?
        `;
        conexao.query(sql, [this.idCliente], callback);
    }
}

class Vendedor extends Pessoa {
    constructor(id_vendedor, nome, cpf, email, telefone, matricula, setor, comissao) {
        super(nome, cpf, email, telefone);
        this.idVendedor = id_vendedor;
        this.matricula = matricula;
        this.setor = setor;
        this.comissao = comissao;
    }
    cadastrar(callback) {
        const sql = `
            INSERT INTO vendedor (nome, cpf, email, telefone, matricula, setor, comissao)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        conexao.query(sql, [this.nome, this.cpf, this.email, this.telefone, this.matricula, this.setor, this.comissao], callback);
    }
    buscarDados(callback) {
        const sql = `
            SELECT * FROM vendedor
        `;
        conexao.query(sql, callback);
    }
    editarDados(callback) {
        const sql = `
            UPDATE vendedor
            SET nome = ?, cpf = ?, email = ?, telefone = ?, matricula = ?, setor = ?, comissao = ?
            WHERE id_vendedor = ?
        `;
        conexao.query(sql, [this.nome, this.cpf, this.email, this.telefone, this.matricula, this.setor, this.comissao, this.idVendedor], callback);
    }
    apagarDados(callback) {
        const sql = `
            DELETE FROM vendedor
            WHERE id_vendedor = ?
        `;
        conexao.query(sql, [this.idVendedor], callback);
    }
}

class Produto {
    constructor(id_produto, nome_produto, descricao, preco, quantidade_estoque, categoria) {
        this.idProduto = id_produto;
        this.nomeProduto = nome_produto;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidadeEstoque = quantidade_estoque;
        this.categoria = categoria;
    }
    cadastrar(callback) {
        const sql = `
            INSERT INTO produtos (nome_produto, descricao, preco, quantidade_estoque, categoria)
            VALUES (?, ?, ?, ?, ?)
        `;
        conexao.query(sql, [this.nomeProduto, this.descricao, this.preco, this.quantidadeEstoque, this.categoria], callback);
    }
    buscarDados(callback) {
        const sql = `
            SELECT * FROM produtos
        `;
        conexao.query(sql, callback);
    }
    editarDados(callback) {
        const sql = `
            UPDATE produtos
            SET nome_produto = ?, descricao = ?, preco = ?, quantidade_estoque = ?, categoria = ?
            WHERE id_produto = ?
        `;
        conexao.query(sql, [this.nomeProduto, this.descricao, this.preco, this.quantidadeEstoque, this.categoria, this.idProduto], callback);
    }
    apagarDados(callback) {
        const sql = `
            DELETE FROM produtos
            WHERE id_produto = ?
        `;
        conexao.query(sql, [this.idProduto], callback);
    }
}

class Venda {
    constructor(id_venda, id_cliente, id_vendedor, id_produto, quantidade, data_venda, valor_total) {
        this.idVenda = id_venda;
        this.idCliente = id_cliente;
        this.idVendedor = id_vendedor;
        this.idProduto = id_produto;
        this.quantidade = quantidade;
        this.dataVenda = data_venda;
        this.valorTotal = valor_total;
    }
    cadastrar(callback) {
        const sql = `
            INSERT INTO vendas (id_cliente, id_vendedor, id_produto, quantidade, data_venda, valor_total)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        conexao.query(sql, [this.idCliente, this.idVendedor, this.idProduto, this.quantidade, this.dataVenda, this.valorTotal], callback);
    }
    buscarDados(callback) {
        const sql = `
            SELECT * FROM vendas
        `;
        conexao.query(sql, callback);
    }
    editarDados(callback) {
        const sql = `
            UPDATE vendas
            SET id_cliente = ?, id_vendedor = ?, id_produto = ?, quantidade = ?, data_venda = ?, valor_total = ?
            WHERE id_venda = ?
        `;
        conexao.query(sql, [this.idCliente, this.idVendedor, this.idProduto, this.quantidade, this.dataVenda, this.valorTotal, this.idVenda], callback);
    }
    apagarDados(callback) {
        const sql = `
            DELETE FROM vendas
            WHERE id_venda = ?
        `;
        conexao.query(sql, [this.idVenda], callback);
    }
}

module.exports = { 
    Cliente, 
    Vendedor,
    Produto,
    Venda
};