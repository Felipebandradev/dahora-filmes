/* Atalho: rnfs;*/
import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { estiloCardFilme } from "../stylesheet/estilos";
import imagemAlt from "../../assets/images/foto-alternativa.jpg";
import { Ionicons } from "@expo/vector-icons";

export default function CardFilme({ filme }) {
  /* Extraindo as informações do filme (titulo e imagem de capa) */
  const { title, poster_path } = filme;

  return (
    <View style={estiloCardFilme.card}>
      {/* Para carregar a imagem do filme se não tiver vai aprecer a alternativa */}
      <Image
        resizeMode="cover"
        style={estiloCardFilme.imagem}
        source={
          poster_path
            ? { uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }
            : imagemAlt
        }
      />

      {/* Opções que vão ficar ao lado da imagem */}
      <View style={estiloCardFilme.corpo}>
        {/* Para carregar o nome/titulo do Filme */}
        <Text style={estiloCardFilme.titulo}>{title}</Text>

        {/* Botões com ações para ler ou salvar o filme */}
        <View style={estiloCardFilme.botoes}>
          {/* Botão para ler mais do filme */}
          <Pressable style={estiloCardFilme.botao}>
            <View style={estiloCardFilme.botaoIcon}>
              <Ionicons name="book" size={18} color="#a471f9" />
              <Text style={estiloCardFilme.textoBotao}>Leia Mais</Text>
            </View>
          </Pressable>
          {/* Botão para salvar o filme */}
          <Pressable style={estiloCardFilme.botao}>
            <View style={estiloCardFilme.botaoIcon}>
              <Ionicons name="add-circle" size={18} color="#a471f9" />
              <Text style={estiloCardFilme.textoBotao}>Salvar</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
