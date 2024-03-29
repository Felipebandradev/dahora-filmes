https://nextjs.org/

React native
https://reactnative.dev/
https://reactnative.dev/docs/components-and-apis
https://expo.dev/

## Como usar:

- CMD do node
- Entra na pasta mobile
  Pode entrar assim:
  C:\Users\diretório>cd\ entre
  C:\>cd mobile entre
  C:\mobile>

- Depois :
- npx create-expo-app nome-do-meu-app
- se pedir para confirma dar proceed(y) y
  espere instalar

- cd nome-do-meu-app entre
- `npx expo start` -`npm start`

baixe o aplicativo no seu celular chamado: expo go e tive a foto do QR code que apareceu no terminal (pode fazer uma conta)

se o aplicativo cair digite no terminal a letra r

se vc sair com ctrl C e querer entrar novamente. Digite npx expo start ou npm start

Npx significa  instalar e executar

#### Para usar emulador no navegador

- Android Studio
- Android SDK
- Java JDK
- Imagem Android para emuladpr

#### Para abrir emulador no navegador

- Android Studio
- `npm start` ou `npx expo start`
- depois a letra `a`

#### Para parar o emulador no navegador

- ctrl C
- para voltar `npm start` e a letra `a`

#### Biblioteca de icons

- https://docs.expo.dev/guides/icons/
- faz a instalação no terminal node. Antes pare se tiver rodando
- npm install @expo/vector-icons

- site de icons https://icons.expo.fyi/Index

- site para fontes https://docs.expo.dev/versions/latest/sdk/font/
- sie para fazer a fonte funcionar https://docs.expo.dev/versions/latest/sdk/splash-screen/

#### Fonte

- Para fonte precisa instalar no node.js - npx expo install expo-font
- e para usar precisa instalar - npx expo install expo-splash-screen

**Pegar fontes**

- no site https://fonts.google.com/
- escolhe a fonte e baixe no seu computador
- coloque na pasta que fonts na assets

# DaHora Filmes

Exemplo de app nativo multiplataforma criando com React Native e Expo.

## Branch 2

### Utilização de fonts adicionais

- Dowload dos arqyuvos de font (formato TFF ou OTF)
- Colocação na pasta `assets/fonts`
- instalação da libs `expo-fonyts` e ` expo-splash`

- Colocação na pasta assets\fonts
- Instalação das libs expo-fonts e expo-splash-screen
  Importação das fontes com auxílio dos hooks useFonts e useCallback.
  Aplicação das fontes usando regras de StyleSheet.

  ## 03-componentes-de-telas

- Criação das telas básicas: Sobre e Privacidade
- Componente `ScrollView` para conteúdos maiores que a tela com suporte à rolagem
- Componente `Linking` para criação de link para a web.

## Branch 04

Para Gerenciar os recursos de navegação é necessário usar uma biblioteca de navegação

As mais conhecidas são as **React Navigation** e a **Expo Router**

Atualmente (Feveireiro/ 2024) a biblioteca mais usadas e considerade padrão é a **React Navigation**

- React Navigation: https://reactnavigation.org
- Expo Router: https://docs.expo.dev/router/introduction

### Como usar o react navigation com a navegação Stack

#### Pacotes de Instalações

React Navigation: `npm install @react-navigation/native`

Depêndencias para navegação:

`npx expo install react-native-screens react-native-safe-area-context`

Mecanismo de navegação: `npm install @react-navigation/native-stack`

#### Configurações

No `App.js` importamos o `NavigationContainer` e o `creatNativeSatckNavigator`, em seguida os configuramos para determinar o `Stack.Screen` e seus componentes correspondentes (no momento, apenes `Home`, `Sobre`, `Privacidade`)

## Branch 05-desafio--tela-BuscarFilmes

### Orientações

1. Crie uma nova branch chamada **05-desafio--tela-BuscarFilmes**

2. Crie a tela `BuscarFilmes` e programe os recursos necessários para a estruturação e estilização, deixando semelhante às imagens de referência _(Veja no Teams)_.

3. Adicione esta tela à **Stack de navegação**

4. Em `Home`, programe o botão que faz a navegação para a tela `BuscarFilmes`

### Desafios

- Usar um componente nativo de campo de entrada de formulário
- Aplicar useState para captura do que é digitado no campo de formulário
- Usar um componente de alerta para validação básica: exibir mensagem na tela caso o usuário toque no botão sem preencher nada no formulário
- Usar o componente de alerta para mostrar mensagem dizendo "Você procurou pelo filme [mostrar o nome do filme digitado]

### Solução: recursos utilizados

- componete/Recursos nativos: `TextInput`, `Vibration` e `Alert`
- Eventos:
  - `onChageText` no `TextInput` para captura em tempo real do nome do filme digitando e atualização no `state` usando a função `filmesDigitado`
  - `onSubmitEditing` no `TextInput` para acionamento da função `buscarFilmes`

## Branch 06-telas-de-resultados-programação-api

- Cadastro na API TheMovieDB
- Criação de uma chave de API (API Key)
- Configuração de varfikável ambiente através do arquivo `.env` contendo a API Key via Expo (arquivo ENV são ignorados no versionamento )

#### Consumo de dados da API

- Instalação da lib **Axios**
- Configuração/exportação do `services/api-movidedb.js` contendo a programação básica de acesso à API para uso em diferentes partes do app.

#### Exibição dos Resultados

- Utilização do componente `FlatList` para listagem dinâmica dos resultados
- Criação do componente `CardFilme` com uso de prop (`filme`) com carregamento do `title` e do `poster-path` (imagem) de cada filme.

## Branch 07-melhorias-nos-resultados

- Loading usando `ActivityIndicator`
- Em `Resultados`, aplicamos à `FlatList` componentes personalizados para o caso de não haver filmes na busca (`NaoEncontrado/ListEmptyComponent`) e para separar cada elemento da `FlatList` (`Separador/ItemSeparatorComponent`)
- Em `CardFilme` colocamos uma condicional para o carregamento de imagem alternativa caso algum filme não tenha imagem, e também ícones nos botões.
  tem menu de contexto

  ## Branch 08-tela-de-detaçhes-do-filme

  - Criação de tela `Detalhes.js` e edição dela à `stack` em `App.js`
  - Em `CardFilme`, utilização do hook ` useNavigation` para funcionalidade de navegação do botão **Leia Mais**

  - Em `App.js` na `Stack.Screen Detalhes`, adicionamos uma prop `options` configurada para exibir um `Pressable` ou `Button` responsável por permitir a navegação direta para `Home`

  ## Branch 09-gerenciamento-de-favoritos

### Recurso nativo/lib: AsyncStorage

`AsyncStorage` é uma lib mantida pela equipe de Expo que permite armazenar dados **offline** em formato `string` no dispositivo do usuário. é uma lib semelhante á API web `localStorage` usa em sites.

Link da Instalação: `https://docs.expo.dev/versions/latest/sdk/async-storage/`
Link da Documentação: `https://react-native-async-storage.github.io/async-storage/docs/usage`

## Dica

Instale a extensão **ES7+ React** no VS Code para facilitar a programação de componentes

https://encycolorpedia.pt/search?upload=70418cc38d78aef11636c06c25fe4cf632d96c9ab9f48f63e0
