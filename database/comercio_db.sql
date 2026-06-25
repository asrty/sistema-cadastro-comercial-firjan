CREATE DATABASE cadastro_comercial;

USE cadastro_comercial;

CREATE TABLE cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(15),
    endereco VARCHAR(255), 
    data_nascimento DATE
);

CREATE TABLE vendedor (
    id_vendedor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(15),
    matricula VARCHAR(20),
    setor VARCHAR(50),
    comissao DECIMAL(10,2) 
);

CREATE TABLE produto (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(50) NOT NULL,
    descricao VARCHAR(100),
    preco DECIMAL(10,2) NOT NULL,
    quantidade_estoque DECIMAL(12,3) NOT NULL,
    categoria VARCHAR(50)
);

CREATE TABLE venda (
    id_venda INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_vendedor INT NOT NULL,
    id_produto INT NOT NULL,
    data_venda DATE NOT NULL,
    valor_total DECIMAL(12,2) NOT NULL,

    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
    FOREIGN KEY (id_vendedor) REFERENCES vendedor(id_vendedor),
    FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);