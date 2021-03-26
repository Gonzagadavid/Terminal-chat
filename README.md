# Terminal chat  :computer: :speech_balloon:   

Neste projeto foi criado um diretório para executar como servidor e outro para funcionar como cliente (aplicação). O primeiro(servidor) é responsável por renderizar informações, mensagens e atividades como quem saiu e entrou na sala, passadas pelo segundo(cliente), de acordo com a sala escolhida.

### Este projeto foi desenvolvido utilizando:

- NodeJS versão 15.12, utilizando o node type modules;
- Express;
- Blessed;
- uuid.

### Para visualizar o projeto em funcionamento:

- Atenção: Para o funcionamento desse projeto é necessário ter a versão 15.12 ou superior do NodeJS instalada na máquina;
- Após clonar o diretório do projeto execute o comando `npm install`  no diretório "server" e  no diretório "cliente", para que todas a dependências necessárias sejam instaladas.
- Inicie o servidor com o comando `npm start`  no diretório "server". E em outros terminais utilize o comando  `node index.js --username { nome do usuário } --room {nome da sala } --hostURI http://localhost:9898`  no diretório "cliente", ou basta digitar npm run user em um terminal e npm run user2 no outro terminal para usuario teste;
- Você conseguirá comunicar entre eles através de um chat. 

Esse foi um projeto feito durante a semana de JavaScript Expert, que ocorreu do dia 21/03/2021 ao dia 24/03/2021,  promovida por Erick Wendel.
