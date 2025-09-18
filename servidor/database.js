
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
    db.exec(`
        -- Tabela Pessoas
        CREATE TABLE IF NOT EXiSTS Pessoas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            senha VARCHAR(255) NOT NULL,
            data_nascimento VARCHAR(10) NOT NULL,
            cargo BOOL NOT NULL
        );

        -- Tabela Turma_de_Danca
        CREATE TABLE IF NOT EXiSTS Turma_de_Danca (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            danca VARCHAR(100) NOT NULL,
            hora VARCHAR(6) NOT NULL,
            quantidade_total INT NOT NULL,
            mensalidade DECIMAL(10, 2) NOT NULL,
            data_criacao TEXT NOT NULL
        );

        -- Tabela Pessoa_Turma (relacionamento N:N entre Pessoas e Turmas)
        CREATE TABLE IF NOT EXiSTS Pessoa_Turma (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_pessoa INT NOT NULL,
            id_turma INT NOT NULL,
            data_entrada TEXT NOT NULL,
            FOREIGN KEY (id_pessoa) REFERENCES Pessoas(id) ON DELETE CASCADE,
            FOREIGN KEY (id_turma) REFERENCES Turma_de_Danca(id) ON DELETE CASCADE
        );
`)
})

function insert(tabela, columns, values) {
    return new Promise((resolve, rejects) => {

        if (!tabela || !columns || !values) {
            return rejects(new Error('Verifique se Está vazio'))
        }
        if (columns.length !== values.length) {
            return rejects(new Error('A quantidade tem que ser a mesma'))
        }

        const placeValue = columns.map(() => "?").join(',');
        const query = `INSERT INTO ${tabela} (${columns.join(',')}) VALUES (${placeValue})`

        db.run(query, values, function (e) {
            if (e) {
                rejects(new Error(`[INSERT] Erro: ${e}`))
            }
            else {
                resolve({ id: this.lastID, changes: this.changes })
            }
        })
    })
}

function select(tabela, columns, where, params) {
    return new Promise((resolve, rejects) => {
        const query = `SELECT ${columns.join(',')} FROM ${tabela} ${where}`

        db.all(query, params, (e, result) => {
            if (e) {
                rejects(new Error('[SELECT] Erro na função Select'))
            }
            else {
                resolve(result || [])
            }
        })
    })

}


module.exports = {
    db,
    insert,
    select,
}