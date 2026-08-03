API REST para gerenciamento de produtos (CRUD), desenvolvida com Node.js, Express e MySQL

Como rodar o projeto localmente
Pré-requisitos
[Node.js](https://nodejs.org/) instalado (v18+)
[MySQL](https://www.mysql.com/) instalado e rodando localmente (ou acesso a uma instância remota)
1. Clone o repositório
bash
git clone https://github.com/seu-usuario/products-crud-api.git
cd products-crud-api
2. Instale as dependências
bash
npm install
3. Configure o banco de dados

Execute o script database/schema.sql no seu MySQL — ele cria o banco e a tabela products, além de inserir um produto de exemplo:

bash
mysql -u seu_usuario -p < database/schema.sql

Se preferir usar outro nome de banco, ajuste o CREATE DATABASE/USE no script e a variável DATABASE no .env (passo a seguir) para que fiquem iguais.

4. Configure as variáveis de ambiente

Copie o arquivo de exemplo e preencha com os seus dados:

bash
cp .env.example .env
dotenv
PORT=defina_uma_porta

HOST_DB=seu_host
USER_DB=seu_usuario_do_banco
PASSWORD_DB=sua_senha_do_banco
DATABASE=nome_do_seu_banco

URL_FRONT=url_do_front_end
5. Inicie o servidor
bash
npm run dev

O servidor por padrão sobe em http://localhost:{PORT}, com as rotas prefixadas em /api/v1.

Documentação da API (Swagger)

Com o servidor rodando, acesse:

http://localhost:{PORT}/api-docs

Lá é possível visualizar todos os endpoints documentados e testá-los diretamente pelo navegador.

<img width="1342" height="613" alt="Image" src="https://github.com/user-attachments/assets/914f4645-97e9-480a-99ba-f7db7c476edf" />
Endpoints
Método	Rota	Descrição
GET	/api/v1/products	Lista todos os produtos
GET	/api/v1/products/:id	Busca um produto pelo ID
POST	/api/v1/products	Cadastra um novo produto
PUT	/api/v1/products/:id	Atualiza um produto pelo ID
DELETE	/api/v1/products/:id	Remove um produto pelo ID

Funcionalidades
Cadastrar produto
Listar todos os produtos
Buscar produto por ID
Editar produto por ID
Remover produto por ID
