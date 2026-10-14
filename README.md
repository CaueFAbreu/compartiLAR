# compartiLAR

> Encontre sua república, seu quarto ou alguém para dividir o aluguel perto da UFU.

O **compartiLAR** é uma plataforma web para estudantes da Universidade Federal de Uberlândia (UFU) encontrarem moradia:

- **Busca de moradias:** repúblicas, apartamentos compartilhados, casas, kitnets e quartos com vagas disponíveis, com filtros por preço, tipo, comodidades e distância até o campus, e visualização em mapa.
- **Compatibilidade de convivência:** cada estudante preenche um perfil de hábitos (sono, limpeza, festas, visitas, pets etc.), e o sistema calcula a compatibilidade com os moradores atuais de cada vaga.
- **Procura de colegas:** estudantes sem imóvel publicam que procuram alguém para dividir um aluguel e encontram colegas compatíveis.
- **Confiança:** cadastro de estudantes pelo e-mail institucional, proprietários verificados pela moderação, avaliações de quem já morou e denúncia de anúncios falsos.

Projeto desenvolvido para a disciplina de Engenharia de Software (FACOM/UFU), com o Prof. Fabiano Azevedo Dorça.

## Equipe

| Integrante | Papel |
|---|---|
| Cauê Fernando Faria Abreu | Product Owner, Scrum Master e desenvolvedor (backend e arquitetura) |
| João Pedro de Moraes e Menezes | Desenvolvedor (frontend, protótipo e qualidade) |

## Documentação

### Entrega 01: requisitos e planejamento

| # | Artefato | Arquivo |
|---|---|---|
| 1 | Definição do escopo | [docs/entrega-01/01-escopo.md](docs/entrega-01/01-escopo.md) |
| 2 | Backlog do produto (histórias de usuário) | [docs/entrega-01/02-backlog.md](docs/entrega-01/02-backlog.md) |
| 3 | Planejamento das sprints | [docs/entrega-01/03-sprints.md](docs/entrega-01/03-sprints.md) |
| 4 | Casos de uso e diagrama de casos de uso | [docs/entrega-01/04-casos-de-uso.md](docs/entrega-01/04-casos-de-uso.md) |
| 5 | Modelo conceitual (diagrama ER) | [docs/entrega-01/05-modelo-conceitual.md](docs/entrega-01/05-modelo-conceitual.md) |
| 6 | Protótipo de baixa fidelidade | [docs/entrega-01/06-prototipo.md](docs/entrega-01/06-prototipo.md) |

Os diagramas são versionados como código em [docs/diagramas/](docs/diagramas/) (PlantUML).

## Stack planejada (MVP, Entrega 02)

| Camada | Tecnologias |
|---|---|
| Frontend | React, TypeScript, Vite, Tailwind CSS, Leaflet (mapas com OpenStreetMap) |
| Backend | Node.js, TypeScript, Express, arquitetura em camadas (Controllers, Services, Repositories, DTOs) |
| Dados | PostgreSQL com Prisma ORM; armazenamento de fotos em nuvem |
| Qualidade | Jest, ESLint, GitHub Actions (CI) |
| Infraestrutura | Docker Compose (desenvolvimento) e deploy em nuvem |

## Gestão do projeto

O planejamento das sprints e a divisão de tarefas ficam no Jira. O acesso está descrito no documento de entrega.
