# 🔗 Chain of Thought (CoT) - Raciocínio Passo a Passo

## O que é Chain of Thought?

Chain of Thought (Cadeia de Pensamento) é uma técnica que **força a IA a "pensar em voz alta"**, mostrando seu raciocínio passo a passo antes de dar a resposta final.

> **Analogia**: É como pedir para alguém resolver um problema de matemática mostrando toda a conta, não só o resultado final.

---

## Por que Usar?

A IA erra menos quando você a obriga a raciocinar. Isso é especialmente útil para:

- ✅ Cálculos e análises numéricas
- ✅ Tomada de decisões complexas
- ✅ Comparações entre opções
- ✅ Diagnóstico de problemas
- ✅ Planejamento estratégico

---

## Como Ativar Chain of Thought

### Método 1: A Frase Mágica (Zero-Shot CoT)

Adicione no final do seu prompt:

```
"Pense passo a passo antes de responder."
```

ou

```
"Vamos resolver isso etapa por etapa."
```

---

### Método 2: Estrutura Explícita

```
Antes de dar sua resposta final, siga este processo:

1. ENTENDIMENTO: Repita o problema com suas palavras
2. ANÁLISE: Liste os fatores relevantes
3. RACIOCÍNIO: Desenvolva sua linha de pensamento
4. CONCLUSÃO: Apresente sua resposta final
```

---

## Exemplos Práticos

### 📊 Exemplo 1: Decisão de Preço

**Sem CoT:**
```
Qual preço devo cobrar pelo meu curso online de Excel?
```

**Com CoT:**
```
Preciso definir o preço do meu curso online de Excel.

Informações:
- Curso de 8 horas de vídeo
- Inclui 50 planilhas prontas
- Foco em Excel para finanças pessoais
- Público: iniciantes (25-45 anos)
- Concorrentes cobram entre R$97 e R$297

Pense passo a passo:
1. Analise os fatores que influenciam o preço
2. Considere o posicionamento vs concorrentes
3. Avalie percepção de valor do público
4. Sugira 3 opções de preço com justificativa para cada
5. Recomende qual escolher e por quê
```

---

### 📈 Exemplo 2: Diagnóstico de Vendas

```
Minhas vendas online caíram 30% no último mês.

Dados disponíveis:
- Tráfego do site: estável
- Taxa de conversão: caiu de 2.5% para 1.8%
- Ticket médio: aumentou 10%
- Principal produto: camisetas
- Reclamações: 3 sobre prazo de entrega

Analise passo a passo:
1. Identifique onde está o problema no funil
2. Liste possíveis causas para cada problema identificado
3. Cruze com os dados disponíveis
4. Proponha hipóteses ordenadas por probabilidade
5. Sugira 3 ações para testar cada hipótese
```

---

### 🎯 Exemplo 3: Estratégia de Marketing

```
Tenho R$5.000 para investir em marketing digital este mês.

Meu negócio:
- Loja de produtos naturais
- 60% das vendas vêm do Instagram
- Ticket médio: R$85
- Meta: aumentar vendas em 20%

Antes de recomendar onde investir, analise passo a passo:
1. Calcule quantas vendas extras preciso para atingir a meta
2. Estime o CAC (Custo de Aquisição) aceitável
3. Compare os canais disponíveis (Instagram Ads, Google, Influenciadores)
4. Considere riscos e vantagens de cada opção
5. Proponha uma divisão do orçamento com justificativa
```

---

## Template Chain of Thought

```
[SITUAÇÃO/PROBLEMA]
{Descreva o contexto}

[DADOS DISPONÍVEIS]
{Liste informações relevantes}

[INSTRUÇÃO]
Antes de responder, siga este raciocínio:

1. COMPREENSÃO: O que exatamente precisa ser resolvido?
2. FATORES: Quais elementos influenciam a decisão?
3. ANÁLISE: Como esses fatores se relacionam?
4. OPÇÕES: Quais são as alternativas possíveis?
5. AVALIAÇÃO: Prós e contras de cada opção
6. RECOMENDAÇÃO: Qual a melhor escolha e por quê?
```

---

## Quando NÃO Usar CoT

❌ Tarefas simples e diretas (ex: "Traduza isso para inglês")
❌ Geração criativa pura (ex: "Escreva um poema")
❌ Quando você precisa de respostas rápidas e curtas

---

## Variações Avançadas

### Self-Consistency (Auto-Consistência)
Peça para a IA resolver o mesmo problema de 3 formas diferentes e comparar as respostas:

```
Resolva este problema de 3 maneiras diferentes, 
depois compare os resultados e me dê a resposta 
mais confiável.
```

### Tree of Thoughts
Para decisões muito complexas, peça para explorar múltiplos caminhos:

```
Antes de decidir, explore 3 abordagens diferentes:
- Abordagem conservadora
- Abordagem agressiva  
- Abordagem equilibrada

Depois, recomende qual seguir.
```

---

## Próximos Passos

→ [Few-Shot Prompting](./03-few-shot.md) - Ensinando com exemplos
→ [Templates Prontos](../templates/) - Prompts para copiar e usar

---

> 💡 **Dica VisionarIA**: Use CoT sempre que a resposta da IA parecer "superficial demais". Se ela está errando, provavelmente está pulando etapas de raciocínio.
