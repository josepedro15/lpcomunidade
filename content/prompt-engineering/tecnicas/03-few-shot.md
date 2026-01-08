# 📚 Few-Shot Prompting - Ensinando por Exemplos

## O que é Few-Shot Prompting?

Few-Shot é quando você **mostra exemplos** do que quer antes de pedir o resultado. A IA aprende o padrão e replica.

> **Analogia**: É como mostrar 3 bolos decorados para alguém e pedir "faça outro assim".

---

## Os Três Tipos

| Tipo | Exemplos | Quando Usar |
|------|----------|-------------|
| **Zero-Shot** | 0 | Tarefas simples e claras |
| **One-Shot** | 1 | Quando um exemplo basta |
| **Few-Shot** | 2-5 | Padrões específicos ou complexos |

---

## Por que Funciona?

- A IA "entende" melhor o que você quer
- Você garante consistência no formato
- Reduz explicações longas
- Perfeito para criar padrões replicáveis

---

## Como Usar na Prática

### Estrutura Básica

```
[INSTRUÇÃO GERAL]

[EXEMPLO 1]
Entrada: {input exemplo 1}
Saída: {output exemplo 1}

[EXEMPLO 2]
Entrada: {input exemplo 2}
Saída: {output exemplo 2}

[AGORA VOCÊ]
Entrada: {seu input real}
Saída:
```

---

## Exemplos Práticos

### 📝 Exemplo 1: Descrições de Produto

```
Crie descrições de produtos para minha loja de eletrônicos.
Siga exatamente este padrão:

---
EXEMPLO 1:
Produto: Fone Bluetooth XR500
Descrição: 🎧 Som cristalino que acompanha seu ritmo. 
Bateria de 40h, cancelamento de ruído ativo e conforto 
para maratonas musicais. Conecte e desconecte do mundo.
Preço: R$299 → R$249 (economize R$50)

EXEMPLO 2:
Produto: Carregador Turbo 65W
Descrição: ⚡ De 0 a 100% em tempo recorde. Compatível 
com notebook, tablet e celular. Um carregador para 
dominar todos. Compacto para levar a qualquer lugar.
Preço: R$189 → R$149 (economize R$40)
---

AGORA CRIE PARA:
Produto: Mouse Gamer RGB 12000 DPI
Preço original: R$199, preço promocional: R$159
```

---

### 📧 Exemplo 2: Respostas de Atendimento

```
Você é o atendente virtual da minha loja. Siga o padrão 
de respostas abaixo:

---
EXEMPLO 1:
Cliente: "Quanto tempo demora a entrega?"
Resposta: "Oi! 😊 A entrega leva de 3 a 7 dias úteis, 
dependendo da sua região. Assim que despacharmos, você 
recebe o código de rastreio por email. Posso ajudar 
com mais alguma coisa?"

EXEMPLO 2:
Cliente: "Vocês parcelam?"
Resposta: "Claro! 💳 Parcelamos em até 12x sem juros 
no cartão. Para compras acima de R$200, o frete é 
grátis! Quer que eu envie o link do produto?"
---

AGORA RESPONDA:
Cliente: "Posso trocar se não servir?"
```

---

### 📱 Exemplo 3: Legendas para Instagram

```
Crie legendas para posts da minha cafeteria seguindo este estilo:

---
EXEMPLO 1:
Foto: Latte art de coração
Legenda: "Cada xícara é uma declaração de amor. ☕❤️
O segredo? Grãos torrados com carinho e baristas 
apaixonados pelo que fazem. Vem provar na [Nome Café]

#café #latteart #cafeteria #momentocafé"

EXEMPLO 2:
Foto: Croissant saindo do forno
Legenda: "Camadas de manteiga, horas de preparo, 
segundos pra devorar. 🥐✨ Nosso croissant é feito 
do zero, todo dia. Quem já provou sabe que vale 
cada caloria!

#croissant #padaria #caféeveryday #massa"
---

AGORA CRIE PARA:
Foto: Café gelado em dia de sol
```

---

### 📊 Exemplo 4: Análise de Dados Padronizada

```
Analise dados de vendas seguindo este formato:

---
EXEMPLO:
Dados: Jan (R$50k), Fev (R$45k), Mar (R$62k)

📈 ANÁLISE RÁPIDA
• Tendência: Recuperação após queda
• Variação mensal: +37.7% (Fev→Mar)
• Destaque: Março superou Janeiro em 24%

🎯 INSIGHT PRINCIPAL
A queda em Fevereiro foi sazonal (carnaval). 
Março indica tendência de alta.

⚡ AÇÃO SUGERIDA
Preparar estoque para Abril antecipando continuidade.
---

AGORA ANALISE:
Dados: Abr (R$58k), Mai (R$71k), Jun (R$68k)
```

---

## Dicas para Few-Shot Perfeito

### ✅ Faça:
- Use 2-3 exemplos (mais que 5 é excessivo)
- Mantenha exemplos consistentes entre si
- Escolha exemplos representativos do que você quer
- Varie os exemplos para cobrir cenários diferentes

### ❌ Evite:
- Exemplos contraditórios
- Exemplos muito similares (não ensina variedade)
- Exemplos muito longos (a IA pode ignorar partes)

---

## Template Few-Shot Universal

```
[TAREFA]
{Descreva o que você quer}

[FORMATO ESPERADO]
{Explique a estrutura}

---
EXEMPLO 1:
Input: [exemplo de entrada]
Output: [exemplo de saída]

EXEMPLO 2:
Input: [exemplo de entrada]  
Output: [exemplo de saída]
---

AGORA VOCÊ:
Input: [seu input real]
Output:
```

---

## Quando Usar Cada Técnica

| Situação | Técnica Recomendada |
|----------|---------------------|
| Tarefa simples e clara | Zero-Shot |
| Formato específico necessário | Few-Shot (2-3 exemplos) |
| Problema complexo de raciocínio | Chain of Thought |
| Formato + raciocínio | Few-Shot + CoT combinados |

---

## Combinando Few-Shot + Chain of Thought

Para o máximo de precisão, combine as duas técnicas:

```
Resolva problemas de precificação seguindo este exemplo:

---
EXEMPLO:
Problema: Produto custa R$50 para produzir. Quero 40% de margem.
Raciocínio: 
1. Margem de 40% significa que o custo é 60% do preço final
2. Preço = Custo ÷ 0.60
3. Preço = 50 ÷ 0.60 = R$83,33
Resposta: Preço sugerido: R$83,33 (ou R$84,90 arredondado)
---

AGORA RESOLVA:
Problema: Produto custa R$120 para produzir. Quero 35% de margem.
```

---

## Próximos Passos

→ [Templates Prontos](../templates/) - Copie e use imediatamente
→ [Scripts de Vendas](../../vendas/scripts/) - Aplique em vendas

---

> 💡 **Dica VisionarIA**: Crie uma "biblioteca de exemplos" para seus casos mais comuns. Quando precisar de algo similar, é só colar os exemplos e pedir o novo.
