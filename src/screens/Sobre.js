import { Text, View, Image, Pressable, Linking } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import { estiloSobre } from "../stylesheet/estilos";

import imddbLogo from "../../assets/images/logo-tmdb.png";

export default function Sobre() {
  return (
    <SafeContainer>
      <View style={estiloSobre.subContainer}>
        <Text style={estiloSobre.subtitulo}>Sobre o app Dá Hora Filmes</Text>
        <Text style={estiloSobre.texto}>
          O <Text style={estiloSobre.nomeApp}>Dá hora filmes</Text> é um
          aplicativo com a finalidade de permitir a busca por informações sobre
          filmes existentes na base de dados pública disponibilizada pelo site
          The Movie Database (TMDb).
        </Text>
        <View style={estiloSobre.formatLogo}>
          <Pressable onPress={() => {Linking.openURL(`https://www.themoviedb.org/?language=pt-BR`)}}>
            <Image
              resizeMode="contain"
              source={imddbLogo}
              style={estiloSobre.logo}
            />
          </Pressable>
        </View>
        <Text style={estiloSobre.texto}>
          Ao localizar um filme, o usuário pode visualizar informações como
          título, data de lançamento, nota média de avaliação e uma breve
          descrição sobre o filme e, caso queira, salvar estas informações em
          uma lista no próprio aplicativo para visualização posterior.
        </Text>
        <Text style={estiloSobre.texto}>
          O aplicativo poderá receber novos recursos conforme o feedback e
          demanda dos usuários.
        </Text>
        <Text style={estiloSobre.texto}> Dá hora filmes &copy; 2024</Text>
      </View>
    </SafeContainer>
  );
}
