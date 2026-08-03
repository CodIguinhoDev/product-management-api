API REST para gerenciamento de produtos (CRUD), desenvolvida com Node.js, Express.js e MySQL.

---

# Como executar o projeto

## Pré-requisitos

* Node.js (v18 ou superior)
* MySQL instalado e em execução

---

## 1. Clone o repositório

```bash
git clone https://github.com/CodIguinhoDev/product-management-api
entre no repositório cd product-management-api
```

---

## 2. Instale as dependências

```bash
npm install
```

---

## 3. Configure o banco de dados

Você pode criar o banco de dados utilizando o **MySQL Workbench** ou o **terminal**.

### Opção 1 - MySQL Workbench

1. Abra o **MySQL Workbench**.
2. Clique em **File → Open SQL Script**.
3. Abra o arquivo `database/schema.sql`.
4. Clique no botão do raio

Esse script irá:

- Criar o banco de dados `products_db`;
- Criar a tabela `products`;
- Inserir um produto de exemplo.

### Opção 2 - Terminal

Execute o arquivo `database/schema.sql`:

```bash
mysql -u seu_usuario -p < database/schema.sql
```

Após informar sua senha, o script será executado e criará o banco de dados, a tabela `products` e um produto de exemplo.

> **Observação:** Se preferir utilizar outro nome para o banco de dados, altere o `CREATE DATABASE` e o `USE` presentes no `schema.sql` e também a variável `DATABASE` do arquivo `.env`.


## 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto utilizando o modelo abaixo:

```env
PORT=3000

HOST_DB=localhost
USER_DB=root
PASSWORD_DB=sua_senha
DATABASE=products_db

URL_FRONT=http://localhost:5173
```

---

## 5. Execute o projeto

```bash
npm run dev
```

O servidor será iniciado em:

```
http://localhost:3000/api/v1
```

---

# Documentação da API

Com o servidor em execução, acesse:

```
http://localhost:3000/api-docs
```

A documentação foi gerada utilizando Swagger, permitindo visualizar e testar todos os endpoints diretamente pelo navegador.

![Swagger](https://github.com/user-attachments/assets/914f4645-97e9-480a-99ba-f7db7c476edf)

---

# Endpoints

| Método | Endpoint               | Descrição                     |
| ------ | ---------------------- | ----------------------------- |
| GET    | `/api/v1/products`     | Lista todos os produtos       |
| GET    | `/api/v1/products/:id` | Busca um produto pelo ID      |
| POST   | `/api/v1/products`     | Cadastra um novo produto      |
| PUT    | `/api/v1/products/:id` | Atualiza um produto existente |
| DELETE | `/api/v1/products/:id` | Remove um produto             |

---

Todos os endpoints da API foram testados utilizando o Postman, garantindo o funcionamento das operações de CRUD.

---

## Funcionalidades
* Cadastrar produtos
* Listar todos os produtos
* Buscar produto por ID
* Atualizar produto por ID
* Remover produto por ID
---
## Tecnologias

* Node.js
* Express.js
* MySQL
* Swagger (Documentação da API)
* Postman (Testes dos endpoints)

