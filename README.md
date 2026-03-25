# Todo List 

A aplicação é uma lista de tarefas desenvolvida em React que permite criar, organizar e acompanhar atividades. O usuário pode cadastrar tarefas com datas, horários e inserir cores personalizadas, visualizar o tempo restante por meio de um cronômetro regressivo e identificar tarefas expiradas com destaque visual.

---

## Funcionalidades

- Criar tarefas com:
  - Título
  - Data de início e fim
  - Hora de início e fim (formato 24h)
  - Cor personalizada
- Exibir:
  - Data e hora de início
  - Data e hora de término
  - Cronômetro regressivo automático para tarefas pendentes
- Alterar status da tarefa:
  - Pendente
  - Concluída
  - Cancelada
- Alertas de confirmação ao:
  - Concluir tarefa
  - Cancelar tarefa
  - Remover tarefa
- Destaque visual em vermelho para tarefas expiradas
- Filtros:
  - Todas
  - Pendentes
  - Concluídas
  - Canceladas
- Persistência de dados com localStorage
- Interface responsiva e Mobile First

---

## Tecnologias Utilizadas

- React
- Vite
- JavaScript (ES6+)
- Context API
- React Hooks (useState, useEffect, useContext, useMemo)
- Hooks Customizados
- CSS (Mobile First)
- LocalStorage (Web API)

---

##  Como Rodar o Projeto Localmente

### Passo a passo

1. Clone o repositório:
```
git clone https://github.com/leeoze/Lista-de-Tarefas.git
```

2. Acesse a pasta do projeto:
```
cd Lista-de-Tarefas
```

3. Instale as dependências:
```
npm install
```

4. Inicie o servidor de desenvolvimento:
```
npm run dev
```

5. Abra o navegador e acesse:
```
http://localhost:5173
```

---

---

## 📄 Licença

Projeto desenvolvido para fins educacionais e de portfólio.


