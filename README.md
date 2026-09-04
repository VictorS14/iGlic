# 💙 iGlic — Controle de Glicose

Aplicação web para controle e monitoramento de níveis de glicose (glicemia) no sangue.
Permite registrar medições, visualizar médias diárias/período, histórico completo e configurar faixas alvo (metas terapêuticas).

Projeto prático (MVP) com foco em aprendizado — **frontend React + backend Node/Express + PostgreSQL**.

---

## ✨ Funcionalidades

- 🔐 **Login simplificado** como convidado (cria uma sessão automaticamente via JWT com tempo de expiração de 24h)
- ➕ **Registrar medições** de glicose com data/hora personalizável
- ✏️ **Editar** e 🗑️ **apagar** medições existentes
- 📊 **Média diária** e média por período (7/14/30 dias)
- 📋 **Leituras recentes** do dia em cards
- 📜 **Histórico completo** de todas as medições agrupadas por data
- 🎯 **Configuração de faixa alvo** (muito alto, mínimo e máximo desejado)
- 🧾 Cálculo de **variabilidade glicêmica** e métricas visuais
- 🔔 Notificações visuais (toasts) ao salvar/editar registros

---

## 🏗️ Arquitetura e Tecnologias

### 🖥️ Frontend (`/frontend`) — React 19 + Vite
| Tecnologia | Uso |
|---|---|
| Vite | Build tool e dev server |
| React 19 | UI framework |
| React Router v7 | Navegação e rotas protegidas |
| TanStack Query (React Query) v5 | Cache, mutations e estado assíncrono |
| Zustand v5 | Estado global (modal, menus, faixa alvo) |
| Axios | Cliente HTTP com interceptores (JWT + logout no 401) |
| Tailwind CSS v4 | Estilização |
| react-hot-toast | Notificações toast |
| react-icons | Ícones |

### ⚙️ Backend (`/backend`) — Node.js + Express 5
| Tecnologia | Uso |
|---|---|
| Node.js + Express 5 | API REST |
| node-postgres (`pg`) | Driver oficial PostgreSQL (Pool) |
| JWT (`jsonwebtoken`) | Autenticação Bearer (24h) |
| dotenv | Variáveis de ambiente |
| nodemon | Dev server com hot-reload |
| CORS | CORS habilitado para todas as origens |

### 🗄️ Banco de Dados
- **PostgreSQL** — pode ser local ou hospedado (Supabase, Neon, ElephantSQL, Render, etc.)
- Conexão via Pool do `pg` com suporte a `DATABASE_URL` (recomendado) ou variáveis separadas.

---

