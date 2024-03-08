/* Atalho: rnfs;*/
import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { estiloCardFilme } from "../stylesheet/estilos";
import imagemAlt from "../../assets/images/foto-alternativa.jpg";

export default function CardFilme({ filme }) {
  return (
    <View style={estiloCardFilme.card}>
      {/* Para carregar a imagem do filme se não tiver vai aprecer a alternativa */}
      <Image style={estiloCardFilme.imagem} source={imagemAlt} />

      {/* Opções que vão ficar ao lado da imagem */}
      <View style={estiloCardFilme.corpo}>
        {/* Para carregar o nome/titulo do Filme */}
        <Text style={estiloCardFilme.titulo}>{filme.title}</Text>

        {/* Botões com ações para ler ou salvar o filme */}
        <View style={estiloCardFilme.botoes}>
          {/* Botão para ler mais do filme */}
          <Pressable style={estiloCardFilme.botao}>
            <Text style={estiloCardFilme.textoBotao}>Leia Mais</Text>
          </Pressable>
          {/* Botão para salvar o filme */}
          <Pressable style={estiloCardFilme.botao}>
            <Text style={estiloCardFilme.textoBotao}>Salvar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
