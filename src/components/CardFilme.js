/* Atalho: rnfs;*/
import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { estiloCardFilme } from "../stylesheet/estilos";
import imagemAlt from "../../assets/images/foto-alternativa.jpg";

export default function CardFilme({ filme }) {
  /* Extraindo as informações do filme (titulo e imagem de capa) */
  const { title, poster_path } = filme;

  return (
    <View style={estiloCardFilme.card}>
      {/* Para carregar a imagem do filme se não tiver vai aprecer a alternativa */}
      <Image
        resizeMode="cover"
        style={estiloCardFilme.imagem}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
      />

      {/* Opções que vão ficar ao lado da imagem */}
      <View style={estiloCardFilme.corpo}>
        {/* Para carregar o nome/titulo do Filme */}
        <Text style={estiloCardFilme.titulo}>{title}</Text>

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
