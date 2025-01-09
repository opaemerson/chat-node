# Usa a imagem Node.js oficial
FROM node:18

# Define o diret�rio de trabalho dentro do cont�iner
WORKDIR /usr/src/app

# Copia os arquivos necess�rios para o cont�iner
COPY package*.json ./
COPY server.js ./

# Instala as depend�ncias do projeto
RUN npm install

# Exp�e a porta do WebSocket
EXPOSE 8080

# Comando para iniciar o servidor
CMD ["node", "server.js"]
