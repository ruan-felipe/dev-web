const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./inventario.db');

db.serialize(() => {
    // Criar tabela de produtos
    db.run(`
        CREATE TABLE IF NOT EXISTS produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            codigo TEXT,
            descricao TEXT,
            categoria TEXT,
            quantidade INTEGER,
            unidade TEXT,
            preco REAL,
            fornecedor TEXT,
            data_entrada TEXT,
            data_validade TEXT,
            localizacao TEXT
        )
    `);

    // Criar tabela de fornecedores
    db.run(`
        CREATE TABLE IF NOT EXISTS fornecedores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            cnpj_cpf TEXT,
            telefone TEXT,
            email TEXT,
            site TEXT,
            avaliacao INTEGER,
            descontos TEXT
        )
    `);

    console.log("Tabelas criadas com sucesso.");
});

db.close();
