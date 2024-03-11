/* Atalho: rnfs;*/
import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { estiloCardFilme } from "../stylesheet/estilos";
import imagemAlt from "../../assets/images/foto-alternativa.jpg";
import { Ionicons } from "@expo/vector-icons";
/* Hook Necessário pois não estamos em uma tela com acesso à prop navigation */
import { useNavigation } from "@react-navigation/native";

export default function CardFilme({ filme }) {
  /* Extraindo as informações do filme (titulo e imagem de capa) */
  const { title, poster_path } = filme;

  /*  Acessar resucursos de navegação */
  const navigation = useNavigation();

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

      <View style={estiloCardFilme.corpo}>
        <Text style={estiloCardFilme.titulo}>{title}</Text>

        <View style={estiloCardFilme.botoes}>
          <Pressable
            style={estiloCardFilme.botao}
            onPress={() => {
              navigation.navigate("Detalhes");
            }}
          >
            <View style={estiloCardFilme.botaoIcon}>
              <Ionicons name="book" size={18} color="#a471f9" />
              <Text style={estiloCardFilme.textoBotao}>Leia Mais</Text>
            </View>
          </Pressable>

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
