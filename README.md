# Projeto Node.js com MongoDB

Este projeto é uma API desenvolvida em Node.js que utiliza MongoDB como banco de dados. Ele permite gerenciar postagens com upload de imagens e criação de descrições automáticas com o Google Gemini.

---

## Tecnologias Utilizadas

- Node.js: Plataforma de execução.
- Express: Framework para criar rotas e middlewares.
- MongoDB: Banco de dados NoSQL.
- Multer: Para upload de arquivos.
- Google Generative AI SDK: Para geração de descrições automáticas de imagens.
---

## Instalação

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_PROJETO>
2. Instale as dependências:
    ```bash
    npm intall
3. Configure as variáveis de ambiente
   ```bash
   STRING_CONEXAO=<sua_string_de_conexao_com_mongodb>
   GEMINI_API_KEY=<sua_chave_da_google_generative_ai>
4. Certifique-se de ter uma pasta uploads na raiz para armazenar as imagens enviadas:
   ```bash
   mkdir uploads

---

## Uso

1. Inicie o Servidor:
   ```bash
   npm run dev
O servidor será iniciado em http://localhost:3000

2. Endpoints
   - **GET `/posts`**: Lista todos os posts.
   - **POST `/posts`: json {
    "descricao": "Texto descritivo",
    "imgUrl": "URL da imagem",
    "alt": "Texto alternativo"
    }
   - **POST `/posts/upload`: Faz o upload de uma imagem: Body (form-data):
    image (file): Imagem a ser enviada.
   - **PUT `/upload/:id:` : Atualiza uma imagem com uma descrição gerada automaticamente e muda seu caminho para uma url

## Deploy
  Deploy realizado no Google Cloud com o auxilio do arquivo services.sh
  Link: https://backnode-1025158667897.southamerica-east1.run.app

## Próximos Passos
- Implementar autenticação e controle de acesso.
- Adicionar suporte para outros tipos de arquivos no upload.
- Melhorar tratamento de erros e logs.
- Documentar endpoints com Swagger.

## Contribuição
Contribuições são bem-vindas! Faça um fork do projeto e envie um pull request com melhorias.

## Licença
Esse README cobre todos os pontos principais, incluindo a estrutura, uso e explicações detalhadas sobre os módulos e classes do projeto.


