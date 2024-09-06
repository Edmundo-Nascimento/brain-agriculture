# Brain Agriculture

## Tabela de Bibliotecas Utilizadas

| Biblioteca          | Versão    |
|---------------------|-----------|
| `react`             | ^18.3.1   |
| `vite`              | ^5.4.1    |
| `@react-input/mask` | ^1.2.5    |
| `@reduxjs/toolkit`  | ^2.2.7    |
| `axios`             | ^1.7.7    |
| `axios-mock-adapter`| ^2.0.0    |
| `react-leaflet`     | ^4.2.1    |
| `leaflet`           | ^1.9.4    |
| `chart.js`          | ^4.4.4    |
| `react-chartjs-2`   | ^5.2.0    |
| `tailwindcss`       | ^3.4.10   |
| `zod`               | ^3.23.8   |
| `zod-formik-adapter`| ^1.3.0    |
| `react-toastify`    | ^10.0.5   |
| `react-select`      | ^5.8.0    |
| `react-router-dom`  | ^6.26.1   |
| `react-redux`       | ^9.1.2    |
| `formik`            | ^2.4.6    |

## Funcionalidades Implementadas

- [x] **CRUD completo para cadastro de produtores rurais:** o sistema permite cadastrar, editar e excluir produtores.
- [x] **Validação de CPF e CNPJ:** assegura que apenas valores válidos sejam inseridos.
- [x] **Validação de áreas:** a soma das áreas agricultáveis e de vegetação não pode exceder a área total da fazenda.
- [x] **Culturas por produtor:** cada produtor pode plantar mais de uma cultura em sua fazenda.

### Funcionalidades do Dashboard
- [x] **Total de fazendas em quantidade.**
- [x] **Total de fazendas em hectares (área total).**
- [x] **Gráfico de pizza por estado.**
- [x] **Gráfico de pizza por cultura.**
- [x] **Gráfico de pizza por uso de solo (área agricultável e vegetação).**

## 🚀 Tecnologias

Este projeto utiliza as seguintes tecnologias:

- **[NodeJS](https://nodejs.org/)** - Ambiente de execução JavaScript server-side.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset de JavaScript que adiciona tipagem estática.
- **[Vite](https://vitejs.dev/)** - Ferramenta de build rápida e eficiente para front-end.
- **[React](https://react.dev/)** - Biblioteca para construção de interfaces de usuário.
- **[React Router](https://reactrouter.com/en/main/)** - Roteamento dinâmico para aplicações React.

## ✋🏻 Pré-requisitos

- **Node.js** `>= 18` - Certifique-se de ter o Node.js instalado.

## 🔥 Instalação & Execução

### Usando Docker Compose

1. Certifique-se de que o Docker esteja rodando em sua máquina.
2. No diretório raiz do projeto, execute o comando:
    ```bash
    npm run docker
    # ou
    yarn docker
    ```
3. Acesse a aplicação pelo navegador em: [http://localhost:8080/](http://localhost:8080/).

### Método Tradicional

1. Clone o repositório:
    ```bash
    git clone <link-do-repositorio>
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd brain-agriculture
    ```
3. Instale as dependências:
    ```bash
    npm install
    # ou
    yarn
    ```
4. Execute a aplicação:
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

## Estrutura do Projeto

```plaintext
brain-agriculture/
│
├── src/
│   ├── assets/           # Arquivos estáticos (imagens, etc.)
│   ├── api/              # Configuração do axios e mock adapter
│   ├── app/              # Configurações gerais (store do Redux, etc.)
│   ├── context/          # Context API
│   ├── features/         # Funcionalidades da aplicação
│   ├── pages/            # Páginas da aplicação
│   ├── services/         # Serviços da aplicação
│   └── common/
│       ├── components/   # Componentes reutilizáveis
│       ├── data/         # Mocks e constantes
│       ├── formatters/   # Funções de formatação
│       ├── helpers/      # Funções auxiliares
│       └── utils/        # Utilidades diversas
