# Guia: montar o projeto no Jira

O arquivo [jira-import.csv](jira-import.csv) contém todo o planejamento: 6 épicos, 17 histórias (com critérios de aceitação, prioridade e pontos) e 52 tarefas (41 subtarefas das histórias e 11 tarefas de infraestrutura, validação e entrega).

Cada item tem as etiquetas (labels) `sprint-1`, `sprint-2` ou `sprint-3`. As tarefas também têm `resp-caue` ou `resp-joao`.

> Os nomes dos menus do Jira mudam com frequência. Se algum caminho abaixo não bater, procure a opção equivalente.

## 1. Criar o projeto

1. Crie uma conta gratuita no Jira (plano Free, até 10 usuários).
   - **Dica:** como o professor precisa de usuário e senha, crie uma conta Atlassian só para o projeto (por exemplo, com um Gmail novo) e use-a para dar acesso a ele. Assim ninguém precisa passar a senha pessoal.
2. Crie um projeto com o modelo **Scrum**. Se o Jira perguntar o tipo, prefira **company-managed**, que aceita melhor a importação de subtarefas.
3. Nome do projeto: `compartiLAR`. Chave sugerida: `MOR`.
4. Convide o outro integrante da equipe.

## 2. Importar o CSV

1. Abra a importação de itens por CSV. Ela costuma estar na tela de busca de itens ("Filtros" ou "Itens", no menu "⋯": **Importar itens do CSV**) ou em **Configurações › Sistema › Importação de sistema externo › CSV**.
2. Selecione o arquivo `jira-import.csv`.
3. Escolha o projeto `compartiLAR`.
4. Mapeie as colunas:

| Coluna do CSV | Campo do Jira |
|---|---|
| Issue Id | Issue Id |
| Parent Id | Parent Id (ou "Parent") |
| Issue Type | Tipo de item (mapeie Epic, Story, Task e Sub-task para os tipos em português, se aparecerem) |
| Summary | Resumo |
| Description | Descrição |
| Priority | Prioridade |
| Story Points | Story Points (ou "Estimativa de story points") |
| Labels (as duas colunas) | Labels / Etiquetas |

5. Confira na tela final se o Jira indica 75 itens e conclua a importação.

**Se a hierarquia não importar** (histórias soltas, sem épico): abra cada épico e use "Adicionar item filho" para vincular as histórias. São só 17 histórias.

## 3. Criar as sprints

1. Na tela **Backlog**, crie três sprints:

| Sprint | Início | Fim | Meta |
|---|---|---|---|
| Sprint 1 | 19/10/2026 | 08/11/2026 | O estudante consegue se cadastrar, anunciar uma moradia e encontrá-la na busca. |
| Sprint 2 | 09/11/2026 | 29/11/2026 | O estudante vê as moradias no mapa e negocia a vaga com o anunciante até a visita. |
| Sprint 3 | 30/11/2026 | 20/12/2026 | A plataforma recomenda pela convivência, é avaliada pelos usuários e é moderada. |

2. Filtre o backlog pela etiqueta `sprint-1`, selecione todos os itens (Shift + clique) e mova-os para a Sprint 1. Repita para as sprints 2 e 3.

## 4. Atribuir os responsáveis

1. Na busca avançada, use a consulta `labels = resp-joao`.
2. Use **Alteração em massa › Editar › Responsável** para atribuir todas ao João.
3. Repita com `labels = resp-caue` para o Cauê.
4. As histórias ficam com o Cauê, que é o Product Owner.

## 5. Prints para o documento

Tire os prints abaixo e salve em `docs/gestao/prints/` com estes nomes:

| Arquivo | Conteúdo |
|---|---|
| `01-backlog.png` | Tela Backlog com as três sprints e os itens |
| `02-sprint1-quadro.png` | Quadro da Sprint 1 (inicie a sprint para o quadro aparecer) |
| `03-historia-detalhe.png` | Uma história aberta (ex.: US05), mostrando descrição, critérios, pontos, responsável e subtarefas |
| `04-epicos.png` | Lista de épicos com o progresso |
| `05-cronograma.png` | Visão de cronograma (Timeline) com as sprints |
