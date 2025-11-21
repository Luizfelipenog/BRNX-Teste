  # Teste  – Desenvolvedor Fullstack

  Sistema interno para centralizar a gestão de demandas técnicas de provedores de internet, permitindo cadastro de provedores, registro de demandas e acompanhamento do histórico de ações técnicas realizadas. 


  ## 📌 Objetivo do Sistema

  Desenvolver uma aplicação **fullstack (backend + frontend)** que permita:

  - Cadastrar provedores atendidos pela consultoria.
  - Registrar demandas técnicas associadas a cada provedor.
  - Registrar e consultar ações técnicas realizadas em cada demanda.
  - Acompanhar status e histórico completo das demandas de forma clara e rápida. 



  ## 🏗️ Tecnologias e Stack Sugerida

  > As tecnologias abaixo utilizadas

  - **Backend**
    - Node.js
    - TypeScript
    - Prisma ORM
    - PostgreSQL

  - **Frontend**
    - React
    - TypeScript

  - **Infra / Dev**
    - Docker
    - Docker Compose
    - Arquitetura com separação de responsabilidades (controllers, services, repositories, etc.)

  ---

  ## ✅ Requisitos do Sistema

  ### 1. Requisitos de Back-end

  O backend deve expor uma API para:

  - **Provedores**
    - Criar novos provedores.
    - Listar provedores.
    - (Opcional) Atualizar e remover provedores.

  - **Demandas**
    - Criar demandas associadas a um provedor.
    - Listar demandas com opção de filtro por:
      - **Status**
      - **Provedor**
    - Buscar detalhes de uma demanda específica.
    - Atualizar status da demanda (ex.: `Pendente`, `Em andamento`, `Concluída`).
    - Atualizar demais campos da demanda.

  - **Ações Técnicas**
    - Registrar novas ações técnicas vinculadas a uma demanda.
    - Listar histórico de ações técnicas de uma demanda. 

  #### Modelagem de Dados (conceitual)

  - **Provedor**
    - `id`
    - `nomeFantasia`
    - `responsavel`
    - `contato` (e-mail, telefone, etc.)
  - **Demanda**
    - `id`
    - `provedorId` (FK para Provedor)
    - `titulo`
    - `descricao`
    - `tipo` (`Diagnóstico`, `Manutenção`, `Configuração`, `Instalação`, `Outro`)
    - `status`
    - `dataCriacao`
  - **AcaoTecnica**
    - `id`
    - `demandaId` (FK para Demanda)
    - `descricao`
    - `tecnicoResponsavel`
    - `dataExecucao` 

  ---

  ### 2. Requisitos de Front-end

  O frontend deve fornecer uma interface funcional que permita: 

  - **Provedores**
    - Formulário para cadastro de provedor.
    - Listagem de provedores para seleção nas demandas (select/combobox).

  - **Demandas**
    - Tela de listagem de demandas (tabela ou cards):
      - Exibição de título, provedor, tipo, status e data de criação.
      - Filtros por:
        - Provedor
        - Status
    - Tela/formulário para criação de nova demanda.
    - Tela de detalhes da demanda:
      - Exibe informações completas da demanda.
      - Permite atualização do status.

  - **Ações Técnicas**
    - Na tela de detalhes da demanda:
      - Listar histórico de ações técnicas, em ordem cronológica.
      - Formulário para adicionar nova ação técnica (descrição, técnico, data). :contentReference[oaicite:7]{index=7}  

  ---



  **Funcionalidades:**

  - Criar nova demanda vinculado a um provedor.
  - Listar demandas com filtros por status e provedor.
  - Visualizar detalhes completos da demanda.
  - Atualizar status (ex.: `Pendente` → `Concluída`).
  - Exibir histórico de ações técnicas.

  ---

  ### 🧩 Ação Técnica

  **Campos mínimos:**

  - Descrição da ação  
  - Nome do técnico responsável  
  - Data de execução  
  - Demanda associada 

  **Funcionalidades:**

  - Registrar nova ação técnica em uma demanda.
  - Listar todas as ações técnicas de uma demanda (histórico).

 

  ## 🐘 Banco de Dados

  O banco de dados deve representar os três conceitos principais: :contentReference[oaicite:11]{index=11}  

  - **Provedores**
  - **Demandas**
  - **Ações Técnicas**

  Requisitos:

  - Relacionamento bem definido:
    - 1 Provedor → N Demandas  
    - 1 Demanda → N Ações Técnicas
  - Uso de PostgreSQL (recomendado).
  - Modelagem livre, contanto que atenda ao escopo funcional.

  ---

  ## 🐳 Docker e Ambiente

  Recomenda-se o uso de **Docker e Docker Compose** para subir: :contentReference[oaicite:12]{index=12}  

  - Serviço de backend
  - Serviço de frontend
  - Banco de dados PostgreSQL

  O projeto deve incluir:

  - `docker-compose.yml`
  - `.env.example` com as variáveis necessárias (ex.: URL do banco, portas etc.)
  - Instruções claras no README para execução com e sem Docker.


  ## Telas Do Sistema


- 