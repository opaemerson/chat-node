# Usa a imagem Node.js oficial
FROM node:18

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos necessários para o contêiner
COPY package*.json ./
COPY server.js ./

# Instala as dependências do projeto
RUN npm install

# Expõe a porta do WebSocket
EXPOSE 8080

# Comando para iniciar o servidor
CMD ["node", "server.js"]
