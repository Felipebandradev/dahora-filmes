import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import React from "react";
import { estiloDetalhes } from "../stylesheet/estilos.js";
import SafeContainer from "../components/SafeContainer.js";
import imagemAlt from "../../assets/images/foto-alternativa.jpg";

export default function Detalhes({ route }) {
  const { filme } = route.params;

  const {
    vote_average,
    title,
    release_date,
    overview,
    backdrop_path,
    poster_path,
  } = filme;

  const dataPtBr = (date) => {
    const [ano, mes, dia] = date.split("-");
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
          {poster_path && (
            <Image
              resizeMode="contain"
              source={{
                uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
              }}
              style={estiloDetalhes.imagem}
            />
          )}
        </ImageBackground>

        <View style={estiloDetalhes.conteudo}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={estiloDetalhes.titulo}> {title}</Text>
            <View style={estiloDetalhes.infos}>
              <Text style={[estiloDetalhes.texto, estiloDetalhes.avalicao]}>
                {vote_average ? `${vote_average}` : "Indisponível"}
              </Text>
              <Text style={[estiloDetalhes.texto, estiloDetalhes.lancamento]}>
                {release_date
                  ? `Lançamento: ${dataPtBr(release_date)}`
                  : "Indisponível"}
              </Text>
            </View>
            <Text style={[estiloDetalhes.texto, estiloDetalhes.descricao]}>
              {overview || "Sem descrção"}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeContainer>
  );
}
