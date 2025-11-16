# 🌟 Orb Background Component - Documentação

## Visão Geral

O componente **Orb** é um background animado em WebGL que adiciona um efeito visual premium à landing page. Ele utiliza a biblioteca `ogl` para renderizar shaders GLSL com animações fluidas e interativas.

## 🎨 Paleta de Cores Dourada

As cores foram ajustadas para combinar com o tema Black & Gold do projeto:

```glsl
// Cores base do shader
const vec3 baseColor1 = vec3(0.957, 0.816, 0.247); // Dourado claro #F4D03F
const vec3 baseColor2 = vec3(0.831, 0.686, 0.216); // Dourado principal #D4AF37
const vec3 baseColor3 = vec3(0.545, 0.435, 0.278); // Bronze/Dourado escuro #8B6F47
```

### Conversão de Cores

Para converter cores HEX para valores RGB normalizados (0-1):

```
HEX: #D4AF37
RGB: (212, 175, 55)
Normalizado: (212/255, 175/255, 55/255) = (0.831, 0.686, 0.216)
```

## 📦 Instalação

A biblioteca `ogl` já foi instalada:

```bash
npm install ogl
```

## 🚀 Uso

### Importação

```typescript
import Orb from "@/components/Orb";
```

### Implementação Básica

```tsx
<div className="relative w-full h-screen">
  <div className="absolute inset-0 opacity-40">
    <Orb 
      hue={0}
      hoverIntensity={0.3}
      rotateOnHover={true}
      forceHoverState={false}
    />
  </div>
  
  <div className="relative z-10">
    {/* Seu conteúdo aqui */}
  </div>
</div>
```

## ⚙️ Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `hue` | `number` | `0` | Ajuste de matiz (hue) das cores em graus (0-360) |
| `hoverIntensity` | `number` | `0.2` | Intensidade da distorção ao passar o mouse (0-1) |
| `rotateOnHover` | `boolean` | `true` | Se o orb deve rodar ao passar o mouse |
| `forceHoverState` | `boolean` | `false` | Força o estado hover sempre ativo |

## 🎭 Customização

### 1. Ajustar Opacidade

Use classes Tailwind no container:

```tsx
<div className="absolute inset-0 opacity-30"> {/* Ajuste aqui */}
  <Orb />
</div>
```

### 2. Mudar Cores

Edite diretamente no shader (`Orb.tsx`):

```glsl
// Exemplo: Tons de azul
const vec3 baseColor1 = vec3(0.2, 0.6, 1.0);
const vec3 baseColor2 = vec3(0.1, 0.4, 0.8);
const vec3 baseColor3 = vec3(0.05, 0.2, 0.5);
```

### 3. Velocidade de Animação

Ajuste a linha no shader:

```glsl
float n0 = snoise3(vec3(uv * noiseScale, iTime * 0.5)); // Mude 0.5 para mais rápido/lento
```

### 4. Intensidade do Hover

```tsx
<Orb hoverIntensity={0.5} /> {/* Aumenta a distorção */}
```

### 5. Tamanho do Orb

Ajuste o `innerRadius` no shader:

```glsl
const float innerRadius = 0.6; // Valores menores = orb maior
```

## 🎨 Exemplos de Uso

### Hero Section (Sutil)

```tsx
<section className="relative min-h-screen">
  <div className="absolute inset-0 opacity-40">
    <Orb 
      hue={0}
      hoverIntensity={0.3}
      rotateOnHover={true}
    />
  </div>
  
  <div className="relative z-10">
    <h1>Seu Título</h1>
  </div>
</section>
```

### Footer/CTA (Intenso)

```tsx
<section className="relative py-32">
  <div className="absolute inset-0 opacity-50">
    <Orb 
      hue={0}
      hoverIntensity={0.5}
      rotateOnHover={true}
      forceHoverState={true}
    />
  </div>
  
  <div className="relative z-10">
    <button>Call to Action</button>
  </div>
</section>
```

### Sidebar/Card

```tsx
<div className="relative w-96 h-96 rounded-xl overflow-hidden">
  <div className="absolute inset-0 opacity-60">
    <Orb 
      hue={20}
      hoverIntensity={0.4}
    />
  </div>
  
  <div className="relative z-10 p-8">
    <h3>Card Title</h3>
  </div>
</div>
```

## 🎯 Onde Foi Implementado

### 1. Seção Hero
- **Localização**: Primeira seção da página
- **Opacidade**: 40%
- **Props**: hoverIntensity={0.3}, rotateOnHover={true}

### 2. Seção de Fechamento
- **Localização**: Última seção (CTA final)
- **Opacidade**: 30%
- **Props**: hoverIntensity={0.4}, rotateOnHover={true}

## 🔧 Performance

### Otimizações Implementadas

1. **Canvas Responsivo**: Ajusta automaticamente ao tamanho da tela
2. **Device Pixel Ratio**: Suporta telas Retina/4K
3. **RAF (RequestAnimationFrame)**: Animação suave em 60fps
4. **Cleanup Adequado**: Remove todos os event listeners e libera memória WebGL
5. **Alpha Blending**: Transparência otimizada

### Considerações de Performance

- ✅ Funciona bem em desktop moderno
- ⚠️ Pode ser pesado em mobile/tablets antigos
- 💡 Considere desabilitar em mobile:

```tsx
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative">
      {!isMobile && (
        <div className="absolute inset-0 opacity-40">
          <Orb />
        </div>
      )}
      {/* conteúdo */}
    </section>
  );
};
```

## 🎨 Paletas de Cores Alternativas

### Prateado/Prata

```glsl
const vec3 baseColor1 = vec3(0.9, 0.9, 0.95);
const vec3 baseColor2 = vec3(0.7, 0.7, 0.75);
const vec3 baseColor3 = vec3(0.4, 0.4, 0.45);
```

### Verde Esmeralda

```glsl
const vec3 baseColor1 = vec3(0.3, 0.9, 0.6);
const vec3 baseColor2 = vec3(0.2, 0.7, 0.5);
const vec3 baseColor3 = vec3(0.1, 0.4, 0.3);
```

### Roxo/Violeta

```glsl
const vec3 baseColor1 = vec3(0.8, 0.4, 1.0);
const vec3 baseColor2 = vec3(0.6, 0.2, 0.8);
const vec3 baseColor3 = vec3(0.3, 0.1, 0.5);
```

### Azul Oceano

```glsl
const vec3 baseColor1 = vec3(0.3, 0.8, 1.0);
const vec3 baseColor2 = vec3(0.2, 0.6, 0.9);
const vec3 baseColor3 = vec3(0.1, 0.3, 0.6);
```

## 🐛 Troubleshooting

### Orb não aparece

1. Verifique se o container tem altura definida
2. Verifique se WebGL está habilitado no navegador
3. Verifique console do navegador por erros

### Performance ruim

1. Reduza a opacidade
2. Desabilite em mobile
3. Reduza `hoverIntensity`
4. Não use múltiplos orbs simultâneos

### Cores não aparecem corretas

1. Verifique se os valores RGB estão entre 0.0 e 1.0
2. Use a função `adjustHue` para ajustes finos
3. Teste em diferentes monitores

## 📚 Recursos

- [OGL Library Documentation](https://github.com/oframe/ogl)
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [GLSL Shader Reference](https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language)
- [Shadertoy](https://www.shadertoy.com/) - Inspiração para shaders

## 🎓 Como Funciona

### Shader Pipeline

1. **Vertex Shader**: Posiciona os vértices do triângulo que cobre a tela
2. **Fragment Shader**: Calcula a cor de cada pixel
3. **Noise Function**: Cria variações orgânicas usando Simplex Noise
4. **Light Functions**: Simula iluminação radial
5. **Color Mixing**: Combina as 3 cores base dinamicamente

### Interatividade

- **Mouse Tracking**: Detecta posição do mouse relativa ao orb
- **Hover State**: Aplica distorção quando mouse está próximo
- **Rotation**: Roda o orb suavemente durante hover
- **Smooth Transitions**: Usa interpolação (lerp) para transições suaves

## 📄 Licença

Este componente usa a biblioteca OGL que é open-source (MIT License).

---

**Última atualização:** 2025-11-16
**Versão do componente:** 1.0.0

