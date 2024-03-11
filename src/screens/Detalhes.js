import { ImageBackground, ScrollView, Text, View } from "react-native";
import React from "react";
import { estiloDetalhes } from "../stylesheet/estilos.js";
import SafeContainer from "../components/SafeContainer.js";
import imagemAlt from "../../assets/images/foto-alternativa.jpg";

export default function Detalhes() {
  return (
    <SafeContainer>
      <View style={estiloDetalhes.subContainer}>
        <ImageBackground style={estiloDetalhes.imagemFundo} source={imagemAlt}>
          <Text style={estiloDetalhes.titulo}> Titulo do Filme </Text>
        </ImageBackground>

        <View style={estiloDetalhes.conteudo}>
          <ScrollView>
            <View style={estiloDetalhes.infos}>
              <Text style={[estiloDetalhes.texto, estiloDetalhes.avalicao]}>
                Avaliação...
              </Text>
              <Text style={[estiloDetalhes.texto, estiloDetalhes.lancamento]}>
                Lançamento...
              </Text>
            </View>
            <Text style={[estiloDetalhes.texto, estiloDetalhes.descricao]}>
              Descrição...
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeContainer>
  );
}
