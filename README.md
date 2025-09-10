### PeopleWeb App

Se trata de uma aplicação web React vanilla + css para cadastro de pessoa. **(WIP - working in progress)**

- [x] Listagem de pessoas
- [x] Cadastro de pessoa nova
- [ ] Integrar atualizção
- [ ] Integrar deleção
- [ ] Implementar testes, unitarios e integração
- [ ] implementar mascaras nos campos

### Observações

- Esta aplicação depende do seguinte [projeto backend](https://github.com/lucasdasial/PeopleWeb.Api) que fornece a API para consumir os dados. **Realize o setup do mesmo** antes de tentar inicializar esse projeto.
- O projeto não utiliza `.envs` para nenhuma configuração.
- Certifique-se que a API esta rodando na porta preescrita no arquivo `src/http/api.ts`. Atualize caso nescessário.

### Setup - Instruções para rodar localmente.

1. Clone esse repositorio com `git`
2. Instale as dependencias do projeto com `npm install`. É nescessario ter o [NodeJS](https://nodejs.org/en/download/) instalado na maquina.

3) Execute a aplicação com o script de inicialização `dev` presente no arquivo `package.json` com o seguinte comando `node run dev`.
4) Após inicialização bem sucessida, a aplicação estará acessecivel em [http://localhost:5173/](http://localhost:5173/).

<img width="1422" height="725" alt="image" src="https://github.com/user-attachments/assets/f5284035-ae54-440f-9216-c47e0e746a82" />
