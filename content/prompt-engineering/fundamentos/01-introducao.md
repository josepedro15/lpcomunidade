# 🧠 Introdução à Engenharia de Prompt

## O que é Engenharia de Prompt?

Engenharia de Prompt é a arte e ciência de **criar instruções eficazes** para guiar o comportamento de modelos de linguagem (LLMs) como ChatGPT, Claude, Gemini e outros.

> **Para empresários**: Pense nisso como aprender a "falar a língua" da IA. Quanto melhor você se comunica, melhores resultados obtém.

---

## Por que Isso Importa para o Seu Negócio?

| Sem Engenharia de Prompt | Com Engenharia de Prompt |
|--------------------------|--------------------------|
| Respostas genéricas | Respostas específicas e úteis |
| Múltiplas tentativas | Resultado na primeira vez |
| Perda de tempo | Economia de horas |
| Resultados inconsistentes | Qualidade previsível |

---

## Os 6 Elementos de um Prompt Eficaz

### 1. **Contexto** 📋
Informação de fundo que a IA precisa saber.

```
❌ Ruim: "Escreva um email"
✅ Bom: "Você é o gerente de vendas de uma empresa de software B2B"
```

### 2. **Objetivo** 🎯
O que você quer alcançar.

```
❌ Ruim: "Me ajude com marketing"
✅ Bom: "Crie 5 headlines para anúncios no Facebook focados em urgência"
```

### 3. **Papel (Role)** 👤
A persona que a IA deve assumir.

```
✅ "Atue como um copywriter com 10 anos de experiência em e-commerce"
✅ "Você é um consultor financeiro especializado em pequenas empresas"
```

### 4. **Tom e Estilo** 🎨
Como a mensagem deve ser entregue.

```
✅ "Use linguagem informal e amigável"
✅ "Seja direto e objetivo, sem rodeios"
✅ "Mantenha um tom profissional mas acessível"
```

### 5. **Restrições** 🚫
O que deve ser evitado ou enfatizado.

```
✅ "Não use jargões técnicos"
✅ "Limite a resposta a 3 parágrafos"
✅ "Evite clichês de vendas"
```

### 6. **Formato** 📐
A estrutura da saída desejada.

```
✅ "Responda em formato de lista numerada"
✅ "Use bullet points para os benefícios"
✅ "Estruture como: Problema → Solução → Benefício"
```

---

## Exercício Prático

### Antes (Prompt fraco):
```
Escreva algo sobre meu produto
```

### Depois (Prompt estruturado):
```
CONTEXTO: Sou dono de uma loja de roupas masculinas online, focada em 
camisas sociais para executivos entre 30-50 anos.

OBJETIVO: Criar uma descrição de produto para uma camisa de linho azul 
marinho, preço R$189.

PAPEL: Atue como um copywriter especializado em moda masculina premium.

TOM: Sofisticado mas acessível, sem parecer esnobe.

RESTRIÇÕES: Máximo 150 palavras. Evite clichês como "elegância atemporal".

FORMATO: 
- Headline chamativa (até 10 palavras)
- 2 parágrafos de descrição
- 3 bullet points com benefícios
```

---

## Próximos Passos

1. ✅ [Framework COSTAR](../tecnicas/01-framework-costar.md) - O framework mais prático
2. ✅ [Chain of Thought](../tecnicas/02-chain-of-thought.md) - Para problemas complexos
3. ✅ [Few-Shot Prompting](../tecnicas/03-few-shot.md) - Ensinando por exemplos

---

> 💡 **Dica VisionarIA**: Salve seus melhores prompts em um documento. Com o tempo, você terá uma biblioteca personalizada que economiza horas de trabalho.
