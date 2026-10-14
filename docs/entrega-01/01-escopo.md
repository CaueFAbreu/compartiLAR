# 1. Definição do Escopo

## 1.1 Visão geral

O **compartiLAR** é uma plataforma web que ajuda estudantes da Universidade Federal de Uberlândia (UFU) a encontrar onde morar. A plataforma reúne, em um só lugar:

- vagas em **repúblicas**, **apartamentos e casas compartilhados**, **kitnets** e **quartos**;
- a **distância de cada moradia até o campus** em que o estudante estuda;
- a **compatibilidade de convivência** entre quem procura a vaga e quem já mora no imóvel;
- estudantes que ainda não têm imóvel e **procuram colegas para dividir** um aluguel.

O lema do produto resume a proposta: *"Encontre sua república, seu quarto ou alguém para dividir o aluguel perto da UFU."*

## 1.2 Problema

A cada semestre, milhares de estudantes chegam a Uberlândia vindos de outras cidades, e outros tantos precisam trocar de moradia. Hoje essa busca é informal e cheia de atritos:

- **Informação espalhada:** as vagas são anunciadas em grupos de WhatsApp e Facebook, em cartazes nos campi e em sites imobiliários genéricos, que não mostram vagas em repúblicas nem quartos para dividir.
- **Falta de contexto:** os anúncios raramente informam a distância até o campus, o valor real das contas, as regras da casa ou quem são os moradores.
- **Convivência às cegas:** o estudante só descobre se combina com os moradores (horários, limpeza, festas, visitas) depois de se mudar, o que gera conflitos e trocas frequentes de moradia.
- **Risco de golpes:** calouros de fora da cidade são alvo de anúncios falsos e de pedidos de depósito antecipado por imóveis que não existem.
- **Dificuldade de achar quem divida:** quem quer alugar um apartamento com outras pessoas não tem um lugar para encontrar colegas com orçamento e hábitos parecidos.

## 1.3 Solução proposta

<!-- quadro: Funcionalidades principais da solução -->
| Frente | Funcionalidades principais |
|---|---|
| Anúncios | Cadastro de moradias com tipo, endereço, fotos, regras, comodidades e vagas (valor do aluguel, estimativa de contas, tipo de quarto e data de disponibilidade). |
| Busca | Filtros por tipo, preço, campus e distância, público (masculina, feminina ou mista), comodidades e regras; visualização dos resultados em mapa. |
| Convivência | Perfil de hábitos de cada estudante e cálculo de compatibilidade com os moradores atuais; mural de estudantes que procuram colegas para dividir. |
| Contato | Manifestação de interesse em uma vaga, resposta do anunciante e agendamento de visita. |
| Confiança | Estudantes validados pelo e-mail institucional; proprietários verificados pela moderação; endereço exato revelado só após o aceite do interesse; avaliações de quem já morou; denúncias e moderação. |

Pagamentos, contratos e reservas **não** passam pela plataforma: o compartiLAR conecta as partes, que combinam o restante diretamente.

## 1.4 Stakeholders

<!-- quadro: Stakeholders do compartiLAR -->
| Stakeholder | Descrição | Interesse no sistema |
|---|---|---|
| **Estudantes que procuram moradia** (usuários principais) | Alunos da UFU, em especial calouros vindos de outras cidades. | Encontrar uma vaga segura, perto do campus, dentro do orçamento e com pessoas compatíveis. |
| **Moradores de repúblicas e apartamentos compartilhados** | Estudantes que têm vaga sobrando no lugar onde moram. | Preencher a vaga rapidamente com alguém que combine com a casa. |
| **Proprietários e administradores de imóveis** | Pessoas que alugam kitnets, quartos ou imóveis inteiros para estudantes. | Divulgar imóveis para o público universitário e reduzir o tempo de imóvel vago. |
| **Moderadores** | Membros da equipe ou voluntários de centros acadêmicos, com permissões especiais. | Verificar proprietários, analisar denúncias e retirar anúncios falsos. |
| **Diretoria de assistência estudantil e centros acadêmicos** | Setores que orientam calouros sobre moradia (stakeholders indiretos). | Ter um canal confiável para indicar aos ingressantes. |
| **Equipe de desenvolvimento** | Cauê Fernando Faria Abreu e João Pedro de Moraes e Menezes. | Entregar um MVP funcional e validado com usuários reais. |

## 1.5 Escopo do MVP

**Dentro do escopo:**

- Cadastro de estudantes (e-mail `@ufu.br`) e de proprietários (verificados pela moderação).
- Perfil de usuário e perfil de convivência do estudante.
- Cadastro e gestão de moradias e vagas, com fotos e localização.
- Busca com filtros, distância até os campi de Uberlândia (Santa Mônica, Umuarama, Educação Física e Glória) e visualização em mapa.
- Manifestação de interesse, resposta do anunciante e agendamento de visita.
- Cálculo de compatibilidade de convivência.
- Mural "procuro colega para dividir".
- Favoritos, avaliações de moradias, denúncias e moderação.

**Fora do escopo:**

- Pagamentos, cauções, contratos de locação e reservas pela plataforma.
- Chat em tempo real (o contato ocorre por mensagem registrada e pelos dados liberados após o aceite).
- Aplicativo móvel nativo (a interface web será responsiva).
- Campi fora de Uberlândia (Monte Carmelo, Patos de Minas e Ituiutaba) — previstos para versões futuras.

## 1.6 Premissas e restrições

- Qualquer pessoa pode buscar moradias, mas apenas usuários cadastrados podem demonstrar interesse, anunciar ou avaliar.
- O endereço exato e o contato do anunciante só são exibidos ao estudante cujo interesse foi aceito. Antes disso, o mapa mostra apenas a região aproximada.
- Anúncios de proprietários só ficam visíveis depois que a moderação verifica o cadastro do proprietário.
- O projeto será desenvolvido por uma equipe de duas pessoas, em três sprints de três semanas.

## 1.7 Validação com usuários reais

As histórias de usuário partem da vivência da equipe e de colegas que passaram pela busca de moradia em Uberlândia. A primeira versão do protótipo foi validada com 5 estudantes da UFU, entre moradores de república e pessoas procurando moradia ou alguém para dividir. Todos concluíram as tarefas e disseram que usariam a plataforma no lugar dos grupos de WhatsApp e Facebook. As sugestões deles geraram ajustes em 9 histórias do backlog, 2 histórias novas para depois do MVP e a segunda versão do protótipo (seções 6.3 e 6.4).
