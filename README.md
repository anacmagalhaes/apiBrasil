# 💳 API Brasil Frontend

Este projeto é uma interface React simples que consome dados da [BrasilAPI](https://brasilapi.com.br/) utilizando Axios. Ele exibe cartões bancários com paginação e é estilizado com TailwindCSS.

⚠️ Status: Em desenvolvimento – funcionalidades básicas implementadas.

## 🚀 Tecnologias utilizadas

- React
- Axios
- TailwindCSS
- Vite

## 📦 Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/) (opcional, para clonar o repositório)

## ⚙️ Como rodar o projeto

Clone o projeto (ou baixe como ZIP):

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

Acesse a pasta do projeto:

```bash
cd nome-do-repositorio
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada pelo Vite).

## 📂 Estrutura do projeto

```
src/
│
├── components/
│   ├── BankCard.jsx       # Componente de exibição de cartões bancários
│   ├── Home.jsx           # Página principal com listagem dos cartões
│   └── Pagination.jsx     # Componente de paginação
│
├── App.jsx                # Componente raiz
├── main.jsx               # Ponto de entrada da aplicação React
├── index.css              # Estilização com TailwindCSS
```

## 🔗 Integração com API

As requisições são feitas com Axios para uma API externa (pública ou mockada). Os dados são exibidos em `BankCard` e paginados por `Pagination`.

## ✅ Funcionalidades atuais

- Exibição de cartões bancários
- Paginação
- Estilização com TailwindCSS

---
