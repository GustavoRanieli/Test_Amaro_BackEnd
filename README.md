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

/src/
│
├── components/     // Componentes reutilizáveis do projeto
├── pages/          // Páginas da aplicação
├── routes/         // Configuração das rotas da aplicação
├── slices/         // Slice do Redux (redutores e ações)
├── store/          // Configuração do Redux Store
│   └── index.ts    // Arquivo de configuração do Redux
│
├── App.tsx         // Arquivo principal da aplicação
├── App.css         // Estilos globais
├── main.tsx        // Ponto de entrada da aplicação
│
├── package.json    // Manifesto do projeto (dependências, scripts, etc.)
├── tsconfig.json   // Configuração do TypeScript
└── yarn.lock       // Arquivo de lock do Yarn




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

