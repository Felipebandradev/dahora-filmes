import { ImageBackground, ScrollView, Text, View } from "react-native";
import React from "react";
import { estiloDetalhes } from "../stylesheet/estilos.js";
import SafeContainer from "../components/SafeContainer.js";
import imagemAlt from "../../assets/images/foto-alternativa.jpg";

export default function Detalhes({ route }) {
  const { filme } = route.params;

  const { vote_average, title, release_date, overview, backdrop_path } = filme;

  const dataPtBr = (date) => {
    const [ano, dia, mes] = date.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <SafeContainer>
      <View style={estiloDetalhes.subContainer}>
        <ImageBackground
          style={estiloDetalhes.imagemFundo}
          source={
            backdrop_path
              ? { uri: `https://image.tmdb.org/t/p/original/${backdrop_path}` }
              : imagemAlt
          }
        >
          <Text style={estiloDetalhes.titulo}> {title}</Text>
        </ImageBackground>

        <View style={estiloDetalhes.conteudo}>
          <ScrollView>
            <View style={estiloDetalhes.infos}>
              <Text style={[estiloDetalhes.texto, estiloDetalhes.avalicao]}>
                Avaliação: {vote_average}
              </Text>
              <Text style={[estiloDetalhes.texto, estiloDetalhes.lancamento]}>
                Lançamento: {dataPtBr(release_date)}
              </Text>
            </View>
            <Text style={[estiloDetalhes.texto, estiloDetalhes.descricao]}>
              {overview}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeContainer>
  );
}
