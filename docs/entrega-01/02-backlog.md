# 2. Backlog do Produto

As histórias de usuário estão agrupadas em épicos e seguem o formato *"Como [ator], quero [ação], para [benefício]"*.

- **Prioridade (MoSCoW):** **M** = Must have (essencial), **S** = Should have (importante), **C** = Could have (desejável).
- **Pontos:** estimativa relativa de esforço na escala de Fibonacci (1, 2, 3, 5, 8, 13).
- **Sprint:** em que sprint a história está planejada (ver seção 3).
- **(validação):** critério incluído após a validação do protótipo com 5 participantes (seção 6.4).

## Resumo

<!-- quadro: Resumo do backlog do produto -->
| ID | História | Épico | Prior. | Pontos | Sprint |
|---|---|---|---|---|---|
| US01 | Cadastrar conta de estudante | Contas e perfis | M | 5 | 1 |
| US02 | Cadastrar conta de proprietário | Contas e perfis | S | 3 | 3 |
| US03 | Autenticar-se no sistema | Contas e perfis | M | 3 | 1 |
| US04 | Gerenciar perfil e perfil de convivência | Contas e perfis | M | 3 | 2 |
| US05 | Anunciar moradia com vagas | Anúncios | M | 8 | 1 |
| US06 | Gerenciar minhas moradias e vagas | Anúncios | S | 3 | 2 |
| US07 | Buscar e filtrar moradias | Busca | M | 5 | 1 |
| US08 | Ver moradias no mapa com a distância até o campus | Busca | M | 5 | 2 |
| US09 | Visualizar detalhes da moradia | Busca | M | 3 | 1 |
| US10 | Demonstrar interesse em uma vaga | Contato | M | 3 | 2 |
| US11 | Responder interesses e agendar visitas | Contato | M | 5 | 2 |
| US12 | Ver compatibilidade de convivência | Convivência | S | 5 | 3 |
| US13 | Procurar colegas para dividir moradia | Convivência | S | 5 | 3 |
| US14 | Favoritar moradias | Convivência | C | 2 | 2 |
| US15 | Avaliar moradia | Confiança e moderação | S | 3 | 3 |
| US16 | Denunciar anúncio | Confiança e moderação | M | 3 | 3 |
| US17 | Moderar denúncias e verificar proprietários | Confiança e moderação | M | 5 | 3 |
| | **Total** | | | **69** | |

---

## Épico 1: Contas e perfis

### US01: Cadastrar conta de estudante
**Como** visitante, **quero** criar uma conta de estudante usando meu e-mail da UFU, **para** procurar moradia e anunciar vagas com a garantia de que os outros estudantes também são da universidade.

**Critérios de aceitação:**
- Apenas e-mails do domínio `ufu.br` são aceitos para contas de estudante.
- O cadastro exige nome, e-mail, senha, curso, período e telefone.
- A senha tem no mínimo 8 caracteres, com letras e números.
- O sistema envia um código de confirmação para o e-mail informado, e a conta só é ativada após a confirmação.
- Não é possível cadastrar duas contas com o mesmo e-mail.

### US02: Cadastrar conta de proprietário
**Como** proprietário de imóvel, **quero** criar uma conta de proprietário, **para** anunciar kitnets, quartos e imóveis para estudantes da UFU.

**Critérios de aceitação:**
- O cadastro exige nome, e-mail, senha, telefone e CPF.
- O e-mail é confirmado por código, como na conta de estudante.
- A conta fica com o status "aguardando verificação" até que um moderador a aprove.
- O proprietário pode cadastrar moradias antes da aprovação, mas elas só ficam visíveis na busca depois dela.

### US03: Autenticar-se no sistema
**Como** usuário cadastrado, **quero** entrar e sair do sistema com meu e-mail e senha, **para** acessar as funcionalidades restritas com segurança.

**Critérios de aceitação:**
- O login é feito com e-mail e senha.
- Contas não confirmadas ou suspensas não conseguem entrar, e o sistema informa o motivo.
- O usuário pode redefinir a senha por meio de um código enviado ao e-mail.
- O usuário pode encerrar a sessão a qualquer momento.

### US04: Gerenciar perfil e perfil de convivência
**Como** estudante, **quero** editar meus dados e informar meus hábitos de convivência, **para** que anunciantes e futuros colegas de casa saibam como eu vivo.

**Critérios de aceitação:**
- O estudante pode alterar nome, foto, curso, período, telefone e uma breve apresentação.
- O perfil de convivência registra: horário de sono (cedo, tarde ou variável), nível de organização e limpeza (1 a 5), frequência de festas e visitas (nunca, às vezes ou frequente), se fuma, se tem pets, se aceita pets e a importância de silêncio para estudar (1 a 5).
- O perfil também registra se aceita visitas que dormem na casa, onde costuma estudar (em casa, na biblioteca ou ambos), como prefere dividir as tarefas domésticas (escala, cada um cuida do seu ou diarista) e por quanto tempo pretende ficar (um semestre, um ano ou o curso todo). *(validação)*
- A tela informa que as respostas não são exibidas a outros usuários, apenas o resultado da compatibilidade. *(validação)*
- O e-mail não pode ser alterado.
- O perfil de convivência é opcional, mas sem ele a compatibilidade (US12) não é calculada.

## Épico 2: Anúncios

### US05: Anunciar moradia com vagas
**Como** estudante ou proprietário, **quero** anunciar uma moradia com suas vagas disponíveis, **para** encontrar quem ocupe o quarto ou o imóvel.

**Critérios de aceitação:**
- A moradia tem tipo (república, apartamento, casa, kitnet ou quarto), título, descrição, endereço completo, público (masculino, feminino ou misto), comodidades (internet, garagem, lavanderia, mobiliada etc.) e regras (aceita pets, permite fumar, permite visitas).
- O anúncio informa o número de moradores atuais, a forma de divisão das despesas e os itens de mobília incluídos. *(validação)*
- O anunciante indica se oferece **vagas em moradia compartilhada** ou o **imóvel inteiro**; no imóvel inteiro, a moradia tem uma única vaga, que corresponde ao imóvel todo. *(validação)*
- O sistema localiza o endereço no mapa e calcula a distância até cada campus de Uberlândia.
- A moradia tem de 1 a 10 fotos, cada uma com a legenda do cômodo (quarto, banheiro, cozinha, área de serviço etc.). *(validação)*
- A moradia tem ao menos uma vaga, com tipo de quarto (individual ou compartilhado), valor do aluguel, estimativa de contas (água, luz, internet), valor do condomínio quando houver e data de disponibilidade.
- O cadastro em etapas mostra o progresso (ex.: "Etapa 2 de 5"). *(validação)*

### US06: Gerenciar minhas moradias e vagas
**Como** anunciante, **quero** editar, pausar ou remover minhas moradias, atualizar as vagas e informar os moradores atuais, **para** manter o anúncio fiel à realidade.

**Critérios de aceitação:**
- O anunciante vê a lista das próprias moradias, com o número de vagas disponíveis e de interessados.
- O anunciante pode adicionar vagas e marcar uma vaga como ocupada.
- Moradias pausadas ou sem vagas disponíveis deixam de aparecer na busca.
- O anunciante pode vincular estudantes cadastrados como moradores atuais; o estudante vinculado precisa confirmar o vínculo.

## Épico 3: Busca

### US07: Buscar e filtrar moradias
**Como** visitante ou estudante, **quero** buscar moradias e filtrar por tipo, valor, campus, distância, público, tipo de quarto e comodidades, **para** encontrar opções que caibam no meu orçamento e na minha rotina.

**Critérios de aceitação:**
- Apenas moradias ativas com vagas disponíveis aparecem nos resultados.
- O valor exibido e o filtro de valor seguem a regra RN01 (aluguel, contas e condomínio).
- Cada resultado destaca se é **imóvel inteiro** ou **vaga em moradia compartilhada** e mostra a distância e o tempo estimado a pé até o campus escolhido (RN02). *(validação)*
- Os filtros podem ser combinados.
- Os resultados podem ser ordenados por menor valor, menor distância até o campus escolhido ou mais recentes.
- Os resultados são paginados.

### US08: Ver moradias no mapa com a distância até o campus
**Como** visitante ou estudante, **quero** ver os resultados da busca em um mapa junto com os campi da UFU, **para** entender a localização de cada moradia e quanto vou me deslocar.

**Critérios de aceitação:**
- O mapa mostra os campi de Uberlândia e as moradias encontradas.
- Antes do aceite de um interesse, o mapa mostra apenas a região aproximada da moradia (raio de cerca de 300 metros), sem o endereço exato.
- Cada moradia exibe o valor (RN01) e a distância e o tempo a pé até o campus escolhido (RN02).
- O painel de filtros (incluindo a faixa de valor) fica visível também no mapa. *(validação)*

### US09: Visualizar detalhes da moradia
**Como** visitante ou estudante, **quero** ver todos os detalhes de uma moradia, **para** decidir se vale a pena demonstrar interesse.

**Critérios de aceitação:**
- A página mostra fotos, descrição, tipo, bairro, região no mapa, distância até os campi, público, comodidades, regras, vagas com valores e datas, nota média das avaliações e dados públicos do anunciante.
- A página mostra também o número de moradores, a lista deles (nome, curso e período), a divisão das despesas, o condomínio e a mobília incluída. *(validação)*
- Moradias de proprietários exibem o selo "proprietário verificado".
- Moradias removidas ou ocultas pela moderação não ficam acessíveis.

## Épico 4: Contato

### US10: Demonstrar interesse em uma vaga
**Como** estudante, **quero** demonstrar interesse em uma vaga e enviar uma mensagem ao anunciante, **para** iniciar a negociação.

**Critérios de aceitação:**
- O estudante escolhe a vaga e escreve uma mensagem de apresentação.
- O anunciante recebe uma notificação por e-mail.
- O estudante não pode demonstrar interesse em uma vaga da própria moradia nem ter dois interesses ativos na mesma vaga.
- O estudante acompanha o status dos seus interesses (pendente, aceito, recusado ou cancelado).
- Antes do envio, o sistema explica que a mensagem vai para o anunciante e que o interesse fica pendente até a resposta. *(validação)*

### US11: Responder interesses e agendar visitas
**Como** anunciante, **quero** aceitar ou recusar os interesses recebidos e combinar uma visita, **para** conhecer os candidatos à vaga.

**Critérios de aceitação:**
- O anunciante vê os interessados em cada vaga, com a apresentação, o curso, o período, o selo de estudante verificado e a compatibilidade de cada um. *(validação)*
- Ao aceitar um interesse, o sistema libera ao estudante o endereço exato e o telefone do anunciante, e ao anunciante o telefone do estudante.
- O anunciante pode propor uma data e um horário de visita, que o estudante confirma ou recusa.
- O estudante é notificado por e-mail de cada resposta.

## Épico 5: Convivência

### US12: Ver compatibilidade de convivência
**Como** estudante, **quero** ver o meu grau de compatibilidade com os moradores atuais de uma moradia, **para** escolher um lugar onde a convivência tenha mais chance de dar certo.

**Critérios de aceitação:**
- A compatibilidade é um percentual de 0 a 100%, calculado pela regra RN03 a partir dos perfis de convivência do estudante e dos moradores vinculados.
- O sistema mostra os pontos em comum e os pontos de atenção (ex.: "horários de sono diferentes").
- A compatibilidade não é exibida se o estudante ou nenhum dos moradores tiver o perfil de convivência preenchido.
- Os hábitos individuais dos moradores não são exibidos, apenas o resultado da comparação.

### US13: Procurar colegas para dividir moradia
**Como** estudante sem moradia, **quero** publicar que procuro colegas para dividir um aluguel e ver quem também procura, **para** formar um grupo e alugar um imóvel juntos.

**Critérios de aceitação:**
- O anúncio de procura tem orçamento máximo, campus de referência, tipo de moradia desejada, data prevista de mudança e uma descrição.
- O estudante vê as procuras ativas de outros estudantes, ordenadas pela compatibilidade de convivência (RN03).
- O estudante pode enviar um convite com mensagem a outro estudante; o contato de ambos é liberado quando o convite é aceito.
- O estudante pode encerrar a própria procura a qualquer momento.
- Cada procura exibe o selo "estudante verificado (e-mail UFU)", e o mural pode ser filtrado por compatibilidade mínima. *(validação)*

### US14: Favoritar moradias
**Como** estudante, **quero** salvar moradias como favoritas, **para** compará-las e voltar a elas depois.

**Critérios de aceitação:**
- O estudante pode adicionar e remover favoritos.
- A lista de favoritos indica as moradias que não têm mais vagas disponíveis.
- O estudante pode comparar até 3 favoritas lado a lado: valor, distância e tempo a pé, tipo de oferta, comodidades e compatibilidade (RN01 a RN03). *(validação)*

## Épico 6: Confiança e moderação

### US15: Avaliar moradia
**Como** estudante que morou ou visitou uma moradia, **quero** avaliá-la, **para** ajudar outros estudantes a escolher bem.

**Critérios de aceitação:**
- Só pode avaliar quem fez uma visita à moradia (visita confirmada cuja data já passou) ou é ou foi morador confirmado dela.
- A avaliação tem notas de 1 a 5 para custo-benefício, localização, conservação e convivência, além de um comentário.
- Cada estudante avalia uma mesma moradia apenas uma vez, mas pode editar a avaliação.
- O anunciante pode publicar uma resposta a cada avaliação.

### US16: Denunciar anúncio
**Como** usuário, **quero** denunciar uma moradia, **para** sinalizar golpe, anúncio falso, discriminação ou conteúdo inadequado.

**Critérios de aceitação:**
- A denúncia exige um motivo (golpe ou pedido de pagamento antecipado, anúncio falso, discriminação, conteúdo inadequado ou outro) e permite uma descrição.
- Um usuário não pode denunciar a mesma moradia duas vezes.
- Uma moradia com 3 ou mais denúncias pendentes é ocultada automaticamente até a análise.

### US17: Moderar denúncias e verificar proprietários
**Como** moderador, **quero** analisar as denúncias e os cadastros de proprietários, **para** manter a plataforma segura.

**Critérios de aceitação:**
- O moderador vê duas filas: denúncias pendentes (ordenadas pela quantidade de denúncias) e proprietários aguardando verificação.
- Na denúncia, o moderador pode julgá-la procedente (a moradia é removida) ou improcedente (a moradia volta a ficar visível), e pode suspender o anunciante.
- No cadastro de proprietário, o moderador pode aprovar ou recusar, informando o motivo.
- O usuário afetado é notificado por e-mail de cada decisão.

## Regras de negócio

As regras abaixo definem os valores calculados que aparecem nas histórias e no protótipo.

**RN01 – Valor exibido de uma moradia**

- O valor total mensal de uma vaga é a soma do aluguel, da estimativa de contas e do condomínio.
- Nos resultados da busca, no mapa e nos favoritos, a moradia exibe o menor valor total entre as suas vagas disponíveis. Quando as vagas disponíveis têm valores diferentes, o valor aparece com o prefixo "a partir de".
- O filtro de faixa de valor inclui a moradia quando ao menos uma vaga disponível está dentro da faixa.

**RN02 – Distância e tempo a pé até o campus**

- A distância é o comprimento da rota a pé entre a moradia e cada campus, obtido do Serviço de Mapas quando o endereço é cadastrado ou alterado.
- O tempo a pé é a distância dividida por 80 metros por minuto (cerca de 4,8 km/h), arredondado para o minuto mais próximo. Exemplo: 1.200 m resultam em 15 minutos.

**RN03 – Compatibilidade de convivência**

- A compatibilidade entre dois estudantes compara cada item do perfil de convivência, com uma nota de 0 a 1 e o peso indicado no quadro a seguir.
- O percentual do par é a soma das notas multiplicadas pelos pesos, dividida pela soma dos pesos (16) e multiplicada por 100.
- A compatibilidade com uma moradia é a média dos percentuais do estudante com cada morador que tem perfil de convivência, arredondada para o inteiro mais próximo.
- São pontos em comum os itens com nota 1 em todos os pares, e pontos de atenção os itens com nota 0 em algum par.

<!-- quadro: Itens, notas e pesos da compatibilidade de convivência -->
| Item do perfil | Peso | Nota do item |
|---|---|---|
| Horário de sono | 2 | 1 se iguais; 0,5 se um deles é "variável"; 0 para cedo × tarde |
| Festas e visitas | 2 | 1 se iguais; 0,5 se vizinhos na escala (nunca, às vezes, frequente); 0 para nunca × frequente |
| Organização e limpeza (1 a 5) | 2 | 1 − (diferença ÷ 4) |
| Silêncio para estudar (1 a 5) | 2 | 1 − (diferença ÷ 4) |
| Fumo | 2 | 1 se os dois fumam ou os dois não fumam; 0 caso contrário |
| Pets | 2 | 0 se um tem pet e o outro não aceita pet; 1 caso contrário |
| Visitas que dormem na casa | 1 | 1 se iguais; 0 se diferentes |
| Local de estudo | 1 | 1 se iguais; 0,5 se diferentes |
| Divisão de tarefas | 1 | 1 se iguais; 0,5 se diferentes |
| Tempo de permanência | 1 | 1 se iguais; 0,5 se vizinhos (semestre, ano, curso todo); 0 para semestre × curso todo |

---

## Backlog futuro (após o MVP)

Sugestões da validação que ficam registradas, mas fora das três sprints do MVP:

<!-- quadro: Histórias do backlog futuro -->
| ID | História | Origem | Prior. |
|---|---|---|---|
| US18 | **Como** estudante, **quero** conversar com o anunciante por mensagens dentro do app, **para** combinar a visita sem trocar telefone logo no primeiro contato. | Participantes Fernando F. e Pedro B. | C |
| US19 | **Como** estudante, **quero** salvar uma busca e ser avisado quando surgir uma vaga que atenda aos meus filtros, **para** não perder vagas novas. | Participante Andre P. | C |
