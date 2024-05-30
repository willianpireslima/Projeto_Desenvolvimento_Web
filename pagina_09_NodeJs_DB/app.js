// npm init -y
// nmp install express ejs path mysql body-parser
// npm install nodemon --save-dev
// npm start

// Importando Modulos
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

//Configurando os Listeners
require('events').EventEmitter.defaultMaxListeners = 6;
process.setMaxListeners(6);

const app = express();

// Configuração do banco de dados MySQL
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "site"
});

// Middleware para analisar dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
const filePath = path.join(__dirname, 'public');
console.log(`Juncao de todos os Path  : ${filePath}`)

//Template engine para usar arquivos de modelo estáticos em seu aplicativo
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Define o diretório de visualizações

// Rota para fazer um Insert
app.post('/insert', (req, res) => {
  const { nome, genero, numero, nasc } = req.body;

  // Inserir dados no banco de dados
  const sql = "INSERT INTO usuarios (nome, genero, numero, nasc) VALUES (?, ?, ?, ?)";
  con.query(sql, [nome, genero, numero, nasc], function (err, result) {
    if (err) {
      console.error('Erro ao inserir dados no banco de dados:', err);
      return res.status(500).send('Erro ao inserir dados no banco de dados');
    }
    console.log("1 registro inserido");
    res.send('Registro realizado com sucesso!');
  });
});

// Rota para fazer um Read
app.get('/', (req, res) => {
  // Adicione uma consulta ao banco de dados para recuperar os dados dos usuários
  con.query('SELECT * FROM usuarios', (err, rows) => {
    if (err) throw err; // Tratamento de erro, se necessário

    // Formatando a data antes de passá-la para o template
    rows.forEach(usuario => {
      const data = new Date(usuario.nasc);
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      const ano = data.getFullYear();
      usuario.nasc = `${dia}-${mes}-${ano}`;
    });
    res.render('index', {
      datapedido: rows // Passe os dados dos usuários formatados para o template
    });
  });
});

// Rota para fazer Update
app.post('/update', (req, res) => {
  const { id, column, value } = req.body;

  // Atualizar apenas a coluna especificada no banco de dados
  const sql = `UPDATE usuarios SET ${column} = ? WHERE id = ?`;
  con.query(sql, [value, id], function (err, result) {
    if (err) {
      console.error('Erro ao atualizar dados no banco de dados:', err);
      return res.status(500).send('Erro ao atualizar dados no banco de dados');
    }
    console.log("1 registro atualizado");
    res.send('Registro atualizado com sucesso!');
  });
});

// Rota para lidar com a exclusão de registros
app.post('/delete', (req, res) => {
  const { id } = req.body;

  // Excluir registro do banco de dados
  const sql = `DELETE FROM usuarios WHERE id = ?`;
  con.query(sql, [id], function (err, result) {
    if (err) {
      console.error('Erro ao excluir registro do banco de dados:', err);
      return res.status(500).send('Erro ao excluir registro do banco de dados');
    }
    console.log("1 registro excluído");
    res.send('Registro excluído com sucesso!');
  });
});

// Iniciar o servidor e configurando a porta
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
