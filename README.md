# 📹 Video Player Redux vs Zustand

Um player de vídeo interativo desenvolvido com React e TypeScript, demonstrando a implementação de gerenciamento de estado com **Redux** e **Zustand**. Permite alternar entre as duas soluções em tempo real para comparar performance.

## 🚀 Demo Online

### 🌐 [VER PROJETO AO VIVO](https://video-player-redux.vercel.app/)

## ✨ Funcionalidades

### 🎬 Player de Vídeo Completo
• **Controles Intuitivos**: Play, pause, controle de volume e timeline
• **Visualização em Fullscreen**: Experiência imersiva de vídeo
• **Responsivo**: Interface adaptada para desktop e mobile
• **Progressão Visual**: Barra de progresso com navegação por clique

### 🔄 Comparação de State Management
• **Alternância em Tempo Real**: Troque entre Redux e Zustand sem perder o estado (individual)
• **Performance Side-by-Side**: Compare a performance das duas soluções
• **Estrutura Modular**: Implementações isoladas e bem organizadas
• **Testes Unitários**: Cobertura de testes para ambas as implementações

### 📚 Sistema de Lições
• **Navegação por Módulos**: Organize o conteúdo em módulos estruturados
<!-- • **Progresso de Visualização**: Acompanhe o progresso através das lições -->
• **Interface Limpa**: Design focado na experiência do usuário
• **Carregamento Dinâmico**: Conteúdo carregado sob demanda

### 🎨 Interface Visual
• **Design Moderno**: Interface clean e profissional
• **Animações Suaves**: Transições fluidas entre estados
• **Feedback Visual**: Indicadores claros de status
• **Tema Consistente**: Paleta de cores harmoniosa

## 🚀 Como Executar

### Pré-requisitos
• Node.js (versão 18 ou superior)
• npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/video-player-redux-zustand.git

# Entre no diretório
cd video-player-redux-zustand

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run lint     # Verificação de código
npm run preview  # Preview do build
npm run test     # Executa os testes
```

## 🛠️ Tecnologias

### Core
• **React 18** - Biblioteca principal
• **TypeScript** - Tipagem estática
• **Vite** - Build tool e dev server

### State Management
• **Redux Toolkit** - Gerenciamento de estado previsível
• **Zustand** - Solução leve para estado global
• **React-Redux** - Bindings oficiais do Redux para React

### Estilização
• **Tailwind CSS** - Framework CSS utilitário
• **Radix UI** - Componentes acessíveis
• **Lucide React** - Ícones modernos

### Qualidade de Código
• **ESLint** - Linter JavaScript/TypeScript
• **Biome** - Formatter e linter alternativo
• **Vitest** - Framework de testes rápido

## 🏗️ Arquitetura

### Estrutura de Pastas

```
src/
├── components/                 # Componentes React
│   ├── lesson.tsx             # Componente de lição
│   ├── player.tsx             # Player principal
│   ├── redux-player/          # Implementação Redux
│   │   ├── header.tsx         # Cabeçalho
│   │   ├── module.tsx         # Módulo de lições
│   │   ├── redux-player.tsx   # Player Redux
│   │   └── video.tsx          # Componente de vídeo
│   └── zustand-player/        # Implementação Zustand
│       ├── header.tsx         # Cabeçalho
│       ├── module.tsx         # Módulo de lições
│       ├── video.tsx          # Componente de vídeo
│       └── zustand-player.tsx # Player Zustand
├── store/                     # Store Redux
│   ├── index.ts              # Configuração da store
│   └── slices/               # Slices do Redux
│       ├── player.spec.ts    # Testes do slice
│       └── player.ts         # Slice do player
├── zustand-store/            # Store Zustand
│   └── index.ts              # Configuração do Zustand
├── lib/                      # Utilitários
│   └── axios.ts              # Configuração HTTP
└── App.tsx                   # Componente principal
```

### Padrões Utilizados
• **Redux Toolkit**: Padrão moderno para Redux com menos boilerplate
• **Zustand**: Store minimalista com API simples
• **Custom Hooks**: Lógica reutilizável encapsulada
• **Component Composition**: Separação clara de responsabilidades
• **TypeScript Strict**: Tipagem rigorosa para maior segurança

## 🎮 Como Usar

1. **Escolher State Management**: Alterne entre Redux e Zustand usando os botões no topo
2. **Navegar por Módulos**: Selecione diferentes módulos de conteúdo
3. **Reproduzir Vídeos**: Use os controles para play, pause e navegação
4. **Comparar Performance**: Observe as diferenças de implementação
5. **Testar Funcionalidades**: Explore todas as features disponíveis

## 🔍 Diferencial do Projeto

Este projeto demonstra de forma prática as **diferenças entre Redux e Zustand** para gerenciamento de estado em aplicações React:

### Redux Toolkit
• **Previsibilidade**: Estado imutável com actions bem definidas
• **DevTools**: Excelente experiência de debugging
• **Escalabilidade**: Ideal para aplicações grandes e complexas
• **Comunidade**: Ecossistema maduro e extenso

### Zustand
• **Simplicidade**: API minimalista e intuitiva
• **Performance**: Menor overhead e bundle size
• **Flexibilidade**: Menos opiniões sobre estrutura
• **Modern**: Aproveita hooks e patterns modernos do React

## 🚀 Rocketseat

Este projeto foi desenvolvido durante as aulas da **[Rocketseat](https://rocketseat.com.br)**, uma plataforma de educação em tecnologia que oferece conteúdo de alta qualidade para desenvolvedores.

## 👨‍💻 Autor

<div align="center">
  <img src="https://github.com/marquesmaycon.png" width="100px" style="border-radius: 50%"/>
  <br/>
  <strong>Maycon Marques</strong>
  <br/>
  <br/>
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mayconhenrique/)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/marquesmaycon)
  [![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:mayconmarquesh@gmail.com)

  ### Feito com ❤️ e muita 🎵
</div>
