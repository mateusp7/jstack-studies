# Anotações

## 1. CSR -> Client Side Rendering

- Muito utilizado em SPAs (Single Page Applications)
- Gera apenas um arquivo HTML quando geramos o build
- O client acessa uma página HTML e o servidor renderiza o conteúdo, devolvendo um index.html, independente da página acessada
- Após receber o index.html, o cliente solicita, para o server, os arquivos JS e CSS necessários e se existirem
- No fim, *quem faz toda essa montagem em tela é o Javascript*. Sendo assim, *a aplicação é toda montada do lado do cliente*

# Pros

-> Tempo de build é rápido;
-> Infraestrutura simplificada (precisa de um servidor que armazena arquivos estáticos);
-> Custo de infraestrutura baixa (monetário R$);
-> Zero custo de processamento (renderização é feita do lado do cliente, então depende do computador do usuário que está acessando a aplicação);

# Cons

-> Initial page loading (ao entrar no site a página fica branca e só depois carrega as informações, mas lembrando que isso não é um problema de performance);
-> A performance depende da internet e hardware do usuário;
-> SEO (Search Engine Optimization) é prejudicado (devido ao carregamento inicial);

# Ferramentas

-> Vite
-> Webpack/babel/rollup/parcel
-> Create React App (CRA) - Não utilizar

# Casos de uso

-> Dashboards
-> Paineis
-> ERP's
-> CRM's


## 2. SSG - > Static Site Generation

- Dentro de uma aplicação com várias rotas, *quando geramos o build* (yarn build, npm run build, pnpm build), ele gera um index.html para cada rota 
- Se a rota for /sign-up, ele gera um signup.html
- Portanto, todos esses arquivos HTML gerados no build, são enviados para o servidor, e ele devolve para o cliente
os arquivos .html gerados
- Além disso, *as requisições para endpoint são tambem geradas no build*, para que seja mais rápido o acesso as páginas
- Os arquivos Javascript que são gerados, *são apenas para as interações do usuário em tela*, ele não tem o papel de renderiza a página como no CSR

# Pros

-> Opção mais rápida de todas;
-> SEO melhor (devido ao carregamento inicial não existir);
-> Infraestrutura simplificada (precisa de um servidor que armazena arquivos estáticos);
-> Custo de infraestrutura baixa (monetário R$);
-> Zero custo de processamento (renderização é feita do lado do cliente, então depende do computador do usuário que está acessando a aplicação);

# Cons

-> Tempo de build é mais longo, pois é gerado para todas as rotas, chamadas de API, etc;
-> Nós não temos dados em real time, pois as chamadas a API são feitas no build;

# Ferramentas

-> Next.JS;
-> Gatsby;
-> Astro.

# Casos de uso

-> Landing Pages
-> Sites intitucionais
-> Blogs desde que tenham poucos posts por dia


## 3. SSR -> Server Side Rendering

- Todas as páginas são geradas no servidor
- Gera todos os .HTML em runtime (on the fly)
- Segue quase a mesma ideia do SSG, porém, não tem um "pré-geramento" das páginas no build. Nesse caso, quando o cliente acessa uma página, o servidor NODE faz a requisição da página e gera um HTML

# Pros

-> Initial page Loading;
-> SEO melhor;
-> Dados em tempo real;
-> Tempo de build rápido;

# Cons

-> Complexidade e custo da infraestrutura, quando comparado com as outras estratégias;

# Ferramentas

-> Next.JS;
-> Gatsby;
-> Astro;
-> Remix.

# Casos de uso

-> Ecommerce
-> Blogs
-> Sites de notícias