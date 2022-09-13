Passo 1 - Dentro da pasta deseja pelo PowerShell fazer o comando npm init -y

Passo 2 - Instalar o npm install express no projeto

Passo 3 - Adicionar um " "type": "module" " no package.json

Passo 4 - Criando a rota com app.get('/ads', () => {
    console.log('Acessou Ads!')
}) 1º paramêtro = endereço que vem depois da barra www.meusite.com.br/ads 
2º parâmetro = função, o que fazer depois que acessar o site

Passo 5 - app.listen(xxxx) < escolher o número da porta que vai ouvir a página

Passo 6 - app.get('/ads', (request, response) => {
    return response.send('Acessou Ads!')
}) No request nós pedimos os dados da requisição como jogo, tempo de jogo, nome, etc
Ou seja, buscar informações que estão vindo da requisição
No response nós devolvemos uma resposta/

Passo 7 - app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Anúncio 1' },
        { id: 2, name: 'Anúncio 2' },
        { id: 3, name: 'Anúncio 3' }
    ])
})
Agora trocamos o send por um json que pode retornar qualquer tipo primitivo, geralmente enviamos um array de objetos

Passo 8 - instalar HoppScotch via PWA

Passo 9 - instalar o typescript

Passo 10 - O node não entende typescript então é necessário colocar um   "build": "tsc" no package.json e criar um arquivo de configuração com npx tsc --init

Passo 11 - ModuleResolution : Node

Passo 12 - npm install @types/express -D

Passo 13 - Instalar npm i ts-node-dev -D

Passo 14 - "dev": "tsnd src/server.ts" em Scripts do tsconfig

Passo 15 - remover o type:node em package e em ts config deixar o module como Common json
Agora o server restarta sozinho quando há modificações