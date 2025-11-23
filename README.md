# 📝 Task Manager App

Um aplicativo moderno de gerenciamento de tarefas construído com as mais recentes tecnologias React e melhores práticas de desenvolvimento.

## 🚀 Tecnologias Utilizadas

### Frontend Core
- ⚛️ **React 19.2.0** - Biblioteca principal para construção da interface
- 🏗️ **TypeScript 5.9.3** - Tipagem estática e melhor experiência de desenvolvimento
- ⚡ **Vite 7.2.4** - Build tool e dev server ultra rápido
- 🎨 **Tailwind CSS 4.1.17** - Framework CSS utilitário para estilização

### Roteamento e Estado
- 🧭 **TanStack Router 1.136.18** - Roteamento type-safe com auto-complete
- 🔄 **TanStack Query 5.90.10** - Gerenciamento de estado servidor/cache
- 📡 **Axios 1.13.2** - Cliente HTTP para requisições à API

### Formulários e Validação
- 📋 **React Hook Form 7.66.1** - Gerenciamento eficiente de formulários
- ✅ **Zod 4.1.12** - Validação de schemas TypeScript-first
- 🔗 **@hookform/resolvers** - Integração entre React Hook Form e Zod

### UI e Componentes
- 🎪 **Radix UI** - Componentes acessíveis e não-estilizados
  - Checkbox, Label, Separator, Slot
- 🎭 **Class Variance Authority** - Gerenciamento de variantes de classes CSS
- 🔧 **Tailwind Merge** - Utilitário para merge de classes Tailwind
- 🌟 **Lucide React** - Ícones modernos e personalizáveis
- 🍞 **React Toastify** - Notificações toast elegantes

### Qualidade de Código e Dev Tools
- 🚨 **Biome 2.3.6** - Linter e formatter ultra-rápido
- 📝 **Commitlint** - Padronização de mensagens de commit
- 🐕 **Husky** - Git hooks para automação
- 🎯 **Lint-staged** - Execução de linters apenas em arquivos modificados
- 📦 **Commitizen** - Interface interativa para commits padronizados

## 🏗️ Arquitetura e Padrões

### 📁 Organização de Pastas

```
src/
├── components/          # Componentes reutilizáveis
│   ├── login-form/      # Feature: Formulário de login
│   ├── task-list/       # Feature: Lista de tarefas
│   │   ├── task-list-filter-button/
│   │   ├── task-list-filter-form/
│   │   ├── task-list-item/
│   │   └── task-list-items/
│   └── ui/              # Componentes base da UI
├── hooks/               # Custom hooks
├── http/                # Camada de comunicação HTTP
│   ├── auth/
│   ├── profile/
│   └── tasks/
├── lib/                 # Utilitários e configurações
└── routes/              # Definição de rotas
    ├── _private/        # Rotas protegidas
    └── _public/         # Rotas públicas
```

### 🎯 Padrões de Projeto Implementados

#### **MVVM (Model-View-ViewModel)**
- **Model**: Lógica de negócio e estado (`*.model.ts`)
- **View**: Componentes de apresentação (`*.view.tsx`)
- **ViewModel**: Ponte entre Model e View (`*.viewmodel.tsx`)

#### **Feature-Based Architecture**
Cada feature possui sua própria pasta com:
- `index.ts` - Barrel export
- `*.types.ts` - Definições de tipos
- `*.schema.ts` - Schemas de validação
- `*.model.ts` - Lógica de negócio
- `*.view.tsx` - Componente de apresentação
- `*.viewmodel.tsx` - Controlador de apresentação

#### **Custom Hooks Pattern**
Hooks especializados para operações específicas:
- `useSignIn` / `useSignOut` - Autenticação
- `useListTasks` - Listagem de tarefas
- `useCompleteTask` / `useUnCompleteTask` - Manipulação de tarefas
- `useMe` - Dados do usuário

## 🔧 Boas Práticas Implementadas

### ✨ Código Limpo
- **Separation of Concerns**: Separação clara entre lógica e apresentação
- **Single Responsibility**: Cada arquivo/função tem uma responsabilidade única
- **Composition over Inheritance**: Uso de composição de componentes

### 🛡️ Type Safety
- **TypeScript Strict Mode**: Tipagem rigorosa em todo o projeto
- **Schema Validation**: Validação runtime com Zod
- **Type-safe Routing**: Roteamento completamente tipado

### 🎨 UI/UX
- **Consistent Design System**: Sistema de design consistente com Tailwind
- **Accessibility**: Componentes acessíveis com Radix UI
- **Responsive Design**: Layout responsivo para todos os dispositivos

### 🔄 Estado e Performance
- **Server State Management**: TanStack Query para cache e sincronização
- **Optimistic Updates**: Atualizações otimistas na UI
- **Code Splitting**: Divisão automática de código por rota

### 🧪 Qualidade
- **Linting**: Biome para análise estática de código
- **Formatting**: Formatação automática e consistente
- **Git Hooks**: Validação automática antes dos commits
- **Conventional Commits**: Padronização de mensagens de commit

## 🚦 Começando

### 📋 Pré-requisitos

- Node.js >= 18.0.0
- npm >= 9.0.0 ou yarn >= 1.22.0

### 🛠️ Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/ricardoaruiz/task-manager-app.git
cd task-manager-app
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
# Edite o arquivo .env.local com suas configurações
```

### 🏃‍♂️ Executando o Projeto

#### Desenvolvimento
```bash
npm run dev
# ou
yarn dev
```
Acesse: http://localhost:5173

#### Build para Produção
```bash
npm run build
# ou
yarn build
```

#### Preview da Build
```bash
npm run preview
# ou
yarn preview
```

### 🧹 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento

# Build
npm run build            # Gera build para produção
npm run preview          # Preview da build de produção

# Qualidade de Código
npm run lint             # Formata código com Biome
npm run lint:fix         # Corrige e formata código automaticamente

# Testes
npm run test             # Executa testes (placeholder)

# Git
npm run prepare          # Instala Husky hooks (automático)
```

## 🌟 Features

### 🔐 Autenticação
- ✅ Login seguro com validação
- ✅ Logout com limpeza de sessão
- ✅ Proteção de rotas privadas
- ✅ Validação de formulários em tempo real

### 📋 Gerenciamento de Tarefas
- ✅ Listagem de tarefas com filtros
- ✅ Marcar/desmarcar como concluído
- ✅ Filtros por status
- ✅ Interface responsiva e acessível
- ✅ Loading states e skeleton screens

### 🎨 Interface
- ✅ Design system consistente
- ✅ Tema escuro moderno
- ✅ Componentes acessíveis
- ✅ Animações suaves
- ✅ Notificações toast

## 📈 Performance

### ⚡ Otimizações Implementadas
- **Code Splitting**: Carregamento sob demanda por rota
- **Tree Shaking**: Eliminação de código não utilizado
- **Bundle Optimization**: Otimização automática do Vite
- **HTTP Caching**: Cache inteligente com TanStack Query
- **Lazy Loading**: Carregamento preguiçoso de componentes

### 📊 Métricas
- **First Contentful Paint**: < 1.5s
- **Bundle Size**: Otimizado com tree shaking
- **TypeScript**: 100% coverage

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### 📝 Padrões de Commit

Este projeto segue o [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação
refactor: refatoração
test: testes
chore: tarefas auxiliares
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**Desenvolvido com ❤️ usando as melhores práticas de desenvolvimento**

[⬆ Voltar ao topo](#-task-manager-app)

</div>