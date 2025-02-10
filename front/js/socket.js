const chat = document.getElementById('chat');
const input = document.getElementById('input');
const ws = new WebSocket('ws://localhost:8080');
const inputElement = document.getElementById('input');
const messageElement = document.getElementById('messageAlert');

ws.onmessage = (event) => {
  let message = event.data;

  if (message instanceof Blob) {
    const reader = new FileReader();
    reader.onload = function() {
      message = reader.result;
      
      const messageElement = document.createElement('p');
      messageElement.textContent = `Alien: ${message}`;
      chat.appendChild(messageElement);
      chat.scrollTop = chat.scrollHeight;
    };
    reader.readAsText(message);
  } else {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    chat.appendChild(messageElement);
    chat.scrollTop = chat.scrollHeight;
  }

};

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value.trim() !== '') {
    const message = input.value;
    const messageElement = document.createElement('p');

    messageElement.textContent = `Voce: ${message}`;
    chat.appendChild(messageElement);
    chat.scrollTop = chat.scrollHeight;

    ws.send(message);
    input.value = '';
  }
});

inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      if (!sessionStorage.getItem('userSession')) {
        messageElement.style.display = 'block';
        inputElement.disabled = true; 
      }
    }
  });

async function capturarIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    ip = data.ip;
    console.log(ip);
  } catch (error) {
    console.log('Erro ao capturar o IP:', error);
  }
}

capturarIP();