# Sistema de Gerenciamento de Tarefas

Cada usuário pode criar, editar e excluir apenas suas próprias tarefas. Tarefas são categorizadas por status (pendente ou concluída) e prioridade (baixa, média ou alta), e devem ser concluídas antes da data de vencimento para evitar status de "atrasada".

## Tecnologias Utilizadas

- **Frontend:** React ou Next.js com TypeScript.
- **Backend:** Node.js com Express e TypeScript.
- **Banco de Dados:** PostgreSQL com Prisma ORM.
- **Autenticação:** JSON Web Tokens (JWT).

## Outros

- ESLint e Prettier para padronização de código.

## Requisitos Funcionais

- **Cadastro e login de usuários** (com JWT).
- **CRUD de tarefas:**
  - Criar tarefa: título, descrição, data limite, prioridade, status.
  - Editar tarefa.
  - Excluir tarefa.
  - Listar tarefas (com filtros e ordenação).
- **Filtros:**
  - Por prioridade (Alta, Média, Baixa).
  - Por status (Pendente, Concluída).
- **Relatório de tarefas concluídas** (opcional).
- **Responsividade**

## Design Patterns

- **Repository Pattern** para lidar com operações de banco de dados.
- **Singleton** para configuração do banco de dados.
