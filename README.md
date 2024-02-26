https://nextjs.org/

React native
https://reactnative.dev/
https://reactnative.dev/docs/components-and-apis
https://expo.dev/

## Como usar:

- CMD do node
- Entra na pasta mobile
  Pode entrar assim:
  C:\Users\aline.mteixeira2>cd\ entre
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

## Dica

Instale a extensão **ES7+ React** no VS Code para facilitar a programação de componentes

https://encycolorpedia.pt/search?upload=70418cc38d78aef11636c06c25fe4cf632d96c9ab9f48f63e0
