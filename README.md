Documentação do Projeto Backend - Teste Amaro
1. Introdução
Este documento fornece uma visão geral do projeto "Teste Amaro" e orientações sobre como configurar e executar o projeto no ambiente local.

2. Requisitos
Ambiente:

Node.js versão 14 ou superior.
Yarn.
MySQL instalado e configurado com o banco de dados test_amaro.
Arquivo .env com as variáveis de ambiente configuradas corretamente.
Dependências:

Instale as dependências do projeto usando o comando:
-yarn install


3. Estrutura do Projeto
O projeto é estruturado da seguinte forma:

Copiar código
/src/
│
├── config/         // Configurações globais (ex: configuração do JWT, banco de dados, etc.)
├── controllers/    // Lógica de controle da aplicação
├── database/       // Lógica de interação com o banco de dados
├── routers/        // Definições de rotas da API
├── uploads/        // Diretório para armazenar arquivos de upload
│   └── <upload_files>
├── index.ts        // Arquivo de entrada do projeto (configuração inicial)
├── .env            // Variáveis de ambiente (definir as variáveis de configuração do banco e outras necessidades)
├── package.json    // Manifesto do projeto (dependências, scripts, etc.)
├── README          // Este documento
└── test_amaro.sql  // Banco de dados SQL inicial para criação do banco `test_amaro`



4. Configuração do Banco de Dados
Criar o banco de dados:

Utilize o script SQL test_amaro.sql para criar o banco de dados test_amaro.
mysql -u root -p < path_to/test_amaro.sql

Variáveis de ambiente (.env):
Configure as variáveis de ambiente necessárias para conectar ao banco de dados. Exemplo:
USER='admin_testAmaro'
HOST='localhost'
PASSWORD='ciEd[Ma0-iJ_DYrC'
DATABASE='test_amaro'
JWT_SECRET='amaro_teste'


5. Inicialização do Projeto
Instalar dependências:
-yarn install
Rodar o servidor:

Após instalar as dependências, inicie o servidor com:
-yarn dev
O projeto estará disponível em http://localhost:3000.


7. Observação
Como o projeto foi desenvolvido no domingo, alguns aspectos como estilo, responsividade e outros detalhes não foram implementados.

