<div>
    <h1 align=center>JT Eventos - Back-end</h1>
</div>

<p align=center>
<img alt="NodeJs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
</p>

API REST do JT Eventos - Uma aplicação que permite que usuários/empresas gerenciem o aluguel de seus estabelecimentos para realização de eventos.

# Variáveis de ambiente
Este projeto utiliza a seguintes variáveis de ambiente:

| Nome        | Descrição                                                                        | Valor padrão    |
| ------------| ---------------------------------------------------------------------------------| ----------------|
| DB_USER     | Usuário do Banco de dados                                                        |                 |
| DB_PASSWORD | Senha do Banco de dados                                                          |                 |
| DB_NAME     | Nome do banco de dados                                                           |                 |
| DB_FULLNAME | Nome completo do banco de dados (utilizado para string de conexão com o MongoDB) |                 |
| NODE_ENV    | Ambiente onde a aplicação será executada                                         | development     |
| PORT        | Porta onde a aplicação será executada                                            | 3000            |
| HOST        | Host que irá executar a aplicação                                                |                 |
| SECRET      | Segredo da chave de criptografia                                                 |                 |
| TIMEOUT     | Tempo de expiração do Token de acesso                                            | 300 (5 minutos) |

# Pré-requisitos
- Instalar [Node.js](https://nodejs.org/en/)

# Iniciando a aplicação
- Instale as dependências
```shell
npm install
```
- Buildar e rodar o projeto
```shell
npm start
```
- Buildar e rodar o projto em movo de desenvolvedor
```shell
npm run dev
```

# Desenvolvedores
<div align="center">

| [<img src="https://github.com/jonaspohlmann.png" width=115 ><br><sub>Jonas Polhmann Araujo](https://github.com/jonaspohlmann)</sub> | [<img src="https://github.com/thiagoenca.png" width=115><br><sub>Thiago Martins Proença](https://github.com/thiagoenca)</sub> |
|:-----------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------:|

</div>