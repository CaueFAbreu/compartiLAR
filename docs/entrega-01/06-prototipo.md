# 6. Protótipo de Baixa Fidelidade

O protótipo é um conjunto de wireframes (rascunhos de tela, sem cores definitivas nem funcionalidades) usado para validar as histórias de usuário com estudantes antes da implementação. A equipe seguiu o ciclo de prototipação do Anexo II do enunciado: construiu uma primeira versão, avaliou-a com usuários reais e refinou o protótipo e os requisitos a partir do que observou.

- **Versão 2 (final):** 18 telas refinadas após a validação, com o conteúdo completo de cada tela.
   - https://excalidraw.com/#json=RzYsVfe1HAERL_tuBwV7U,wPNdSUItD6wjMIeuL_TEMw
- **Versão 1 (rascunho):** 18 telas usadas na validação com os estudantes.
   - https://excalidraw.com/#json=cbhYKHrcFDrYxQ9V9vK-l,rt_s-KqllqKu8-kkyWjYUg
- **Ferramenta:** Excalidraw, com traço de rascunho à mão, adequado à baixa fidelidade.
- **Arquivo-fonte:** [compartilar-wireframes.excalidraw](../prototipo/v2/compartilar-wireframes.excalidraw)

## 6.1 Telas

<!-- quadro: Telas do protótipo -->
| Tela | Nome | Histórias atendidas | Elementos principais |
|---|---|---|---|
| T01 | Página inicial | US07 | Busca rápida (campus, valor máximo e tipo de oferta); atalhos "Ver no mapa" e "Procuro colega"; cards de vagas recentes com o tipo de oferta, o tempo a pé e o valor. |
| T02 | Cadastro | US01, US02 | Escolha "Sou estudante" ou "Sou proprietário"; nome, e-mail institucional, senha, telefone, curso e período; aceite dos termos. |
| T03 | Confirmação de e-mail | US01, US02 | Código de 6 dígitos, botão "Confirmar", reenvio com contagem regressiva e validade do código. |
| T04 | Login e recuperação de senha | US03 | Login por e-mail e senha; fluxo de redefinição em três passos (e-mail, código e nova senha). |
| T05 | Busca de moradias (lista) | US07 | Campus de referência, ordenação e alternância lista/mapa; filtros de tipo de oferta, moradia, valor total, distância, público e comodidades; cards com tipo de oferta em destaque, distância, tempo a pé, moradores, valor total e compatibilidade. |
| T06 | Busca de moradias (mapa) | US08 | Mapa com os quatro campi de Uberlândia e regiões aproximadas com o valor; o mesmo painel de filtros fica visível; resumo da moradia selecionada; aviso de que o endereço exato só aparece após o aceite. |
| T07 | Detalhes da moradia | US09, US10, US12, US14, US15, US16 | Fotos por cômodo; descrição e mobília; moradores atuais com curso e período; tabela de vagas com aluguel, contas e data; mapa com a região; distância e tempo a pé até cada campus; compatibilidade com pontos em comum e de atenção; anunciante com selo de verificado; regras e divisão das despesas; avaliações; "Salvar favorito" e "Denunciar". |
| T08 | Formulário "Tenho interesse" | US10 | Vaga escolhida, mensagem de apresentação e a explicação de que a mensagem vai ao anunciante e fica pendente até a resposta. |
| T09 | Anunciar moradia (em etapas) | US05 | Barra de progresso "Etapa 1 de 5"; tipo de moradia; vagas compartilhadas ou imóvel inteiro; título, descrição, público, número de moradores, divisão das despesas e regras; prévia da etapa de vagas com aluguel, contas, condomínio e data. |
| T10 | Minhas moradias | US06 | Moradias com status, vagas e interessados; ações editar, pausar, vagas e moradores; convite de morador pelo e-mail da UFU, com o status de cada vínculo. |
| T11 | Interessados e visitas | US11 | Interessados por vaga com curso, período, selo de verificado, compatibilidade e mensagem; "Aceitar" e "Recusar"; após o aceite, telefone liberado e proposta de data e horário de visita. |
| T12 | Meus interesses | US10, US11 | Interesses com status; no aceito, endereço exato, contato do anunciante e visita proposta com "Confirmar visita" e "Sugerir outro horário". |
| T13 | Meu perfil e convivência | US04 | Dados pessoais e "Sobre mim"; aviso de que as respostas não aparecem para ninguém; perguntas de sono, festas, organização, silêncio, visitas que dormem, local de estudo, fumo, pets, divisão de tarefas e tempo de permanência. |
| T14 | Procuro colega | US13 | Formulário "Minha procura"; mural filtrável por compatibilidade mínima e campus; cards com curso, período, selo de verificado, compatibilidade e orçamento; abas de convites. |
| T15 | Favoritos | US14 | Grade de favoritos com seleção para comparar e a etiqueta "Sem vagas"; tabela de comparação lado a lado (valor, distância, tipo, compatibilidade e comodidades). |
| T16 | Avaliar moradia | US15 | Notas de 1 a 5 em quatro critérios e comentário; avaliações publicadas com a resposta do anunciante. |
| T17 | Formulário de denúncia | US16 | Motivos da denúncia, descrição e aviso sobre a ocultação com 3 denúncias. |
| T18 | Painel de moderação | US17 | Fila de moradias denunciadas; detalhes, histórico do anunciante e justificativa; decisões procedente, improcedente e suspender; aba de proprietários aguardando verificação. |

## 6.2 Fluxos de navegação

1. **Calouro procurando vaga:** T01 → T02 → T03 → T13 → T05 → T07 → T08 → T12.
2. **Busca pelo mapa:** T01 → T06 → T07.
3. **Morador anunciando uma vaga na república:** T09 → T10 → T11.
4. **Formar um grupo para alugar juntos:** T01 → T14 → enviar convite.
5. **Proprietário verificado:** T02 → T03 → T09 → (moderador) T18 → moradia visível na busca.

## 6.3 Versão 1 e validação com usuários

A versão 1 foi desenhada a partir da especificação das telas e apresentada a 5 estudantes da UFU de cursos diferentes, entre moradores de república e pessoas procurando moradia ou alguém para dividir. Cada participante percorreu os fluxos 1, 3 e 4 e respondeu a cinco perguntas:

1. Você conseguiu concluir a tarefa sem ajuda? Onde teve dúvida?
2. Que informação você sentiu falta na página da moradia?
3. Você confiaria na compatibilidade de convivência para escolher onde morar? O que acrescentaria ao questionário?
4. Você usaria o compartiLAR em vez dos grupos de WhatsApp e Facebook? Por quê?
5. Que funcionalidade você acrescentaria?

![Versão 1 – T01 Página inicial, usada na validação](../prototipo/v1/T01.png)

<!-- quadro: Resultados da validação com usuários | fonte: Pesquisa de usabilidade realizada pelos autores (2026). -->
| Participante | Curso, período e situação | Principais observações | Sugestão |
|---|---|---|---|
| Fernando F. | Computação, formado, mora em república | Achou fácil de usar; não ficou claro se a mensagem de interesse ia direto ao anunciante; sentiu falta do valor médio das contas e do número de moradores. | Chat de texto no app. |
| Andre P. | Ciência da Computação, 8º período, mora em república | Navegação clara e cadastro rápido; não percebeu o filtro de preço no mapa; quer distância e tempo até o campus na lista e fotos de mais cômodos. | Mostrar distância e tempo até o campus nos cards da busca. |
| Pedro N. | Engenharia Ambiental, 4º período, procura apartamento | Gostou dos filtros e favoritos; confundiu "apartamento inteiro" com "vaga em apartamento"; quer condomínio, mobília e regras da casa. | Deixar o tipo de moradia mais visível e permitir comparar favoritos lado a lado. |
| Felipe P. | Agronomia, 5º período, procura quem divida apartamento | Achou o "Procuro colega" útil; não sabia quantas etapas faltavam no anúncio; quer ver curso, período e verificação do interessado. | Filtro de compatibilidade e verificação de perfil (e-mail institucional) na busca de colega. |
| Pedro B. | Psicologia, 4º período, procura quem divida moradia | Achou o perfil de convivência bem pensado; não sabia se as respostas eram públicas; quer saber quantos moram na casa e como as despesas são divididas. | Perguntas de rotina (sono, estudo, silêncio) no perfil e um campo livre "sobre mim". |

**Principais achados:**

- **Os 5 participantes concluíram as tarefas**, quatro deles sem nenhuma ajuda.
- **Os 5 disseram que usariam o compartiLAR** no lugar dos grupos, citando a busca com filtros, o perfil verificado e a compatibilidade.
- **As dúvidas se concentraram em quatro pontos:** o destino da mensagem de interesse, o filtro de preço no mapa, a diferença entre vaga e imóvel inteiro e o progresso do anúncio em etapas.
- **A informação mais pedida foi sobre a casa e as despesas:** número de moradores, divisão das despesas, contas, condomínio e mobília.
- **Os participantes confiariam na compatibilidade como ponto de partida** e sugeriram novas perguntas: visitas que dormem, local de estudo, divisão de tarefas e tempo de permanência.

O registro completo das respostas está no repositório do projeto, em [docs/validacao/pesquisa-usabilidade-prototipo-v1.pdf](../validacao/pesquisa-usabilidade-prototipo-v1.pdf).

## 6.4 Refinamento: ajustes feitos a partir da validação

<!-- quadro: Ajustes decorrentes da validação -->
| Observação da validação | Ajuste nos requisitos | Telas da v2 |
|---|---|---|
| Não ficou claro para onde vai a mensagem de interesse | US10: o sistema explica o envio antes de confirmar | T08 |
| Filtro de preço não foi percebido no mapa | US08: filtros sempre visíveis no mapa | T06 |
| Confusão entre vaga e imóvel inteiro | US07: tipo de oferta em destaque nos resultados | T01, T05, T09 |
| Falta de distância e tempo até o campus na lista | US07: distância e tempo a pé em cada resultado | T01, T05, T07 |
| Falta de número de moradores, divisão de despesas, condomínio e mobília | US05 e US09: novos campos do anúncio | T07, T09 |
| Fotos de poucos cômodos | US05: legenda do cômodo em cada foto | T07 |
| Não estava claro quantas etapas faltavam no anúncio | US05: barra de progresso | T09 |
| Dúvida sobre quem vê as respostas de convivência | US04: aviso de privacidade | T13 |
| Novas perguntas de convivência | US04: visitas que dormem, local de estudo, divisão de tarefas e permanência | T13 |
| Ver curso, período e verificação de quem demonstra interesse | US11 e US13: curso, período e selo de verificado | T11, T14 |
| Comparar favoritos | US14: comparação lado a lado | T15 |
| Chat no app e alertas de busca salva | US18 e US19 registradas no backlog futuro | — |

## 6.5 Wireframes da versão 2

![T01 – Página inicial](../prototipo/v2/T01.png)

![T02 – Cadastro](../prototipo/v2/T02.png)

![T03 – Confirmação de e-mail](../prototipo/v2/T03.png)

![T04 – Login e recuperação de senha](../prototipo/v2/T04.png)

![T05 – Busca de moradias (lista)](../prototipo/v2/T05.png)

![T06 – Busca de moradias (mapa)](../prototipo/v2/T06.png)

![T07 – Detalhes da moradia](../prototipo/v2/T07.png)

![T08 – Formulário "Tenho interesse"](../prototipo/v2/T08.png)

![T09 – Anunciar moradia (em etapas)](../prototipo/v2/T09.png)

![T10 – Minhas moradias](../prototipo/v2/T10.png)

![T11 – Interessados e visitas](../prototipo/v2/T11.png)

![T12 – Meus interesses](../prototipo/v2/T12.png)

![T13 – Meu perfil e convivência](../prototipo/v2/T13.png)

![T14 – Procuro colega](../prototipo/v2/T14.png)

![T15 – Favoritos](../prototipo/v2/T15.png)

![T16 – Avaliar moradia](../prototipo/v2/T16.png)

![T17 – Formulário de denúncia](../prototipo/v2/T17.png)

![T18 – Painel de moderação](../prototipo/v2/T18.png)
