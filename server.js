const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'mysql',
  user: 'chatuser',
  password: 'chatpassword',
  database: 'chatdb'
});


wss.on('connection', (ws) => {
  wss.clients.forEach((client) => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send('Alguem entrou no chat');
    }
  });

  ws.on('message', (message) => {
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});


db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
  } else {
    console.log('Conectado ao MySQL');
  }
});