/* Atalho: rnfs;*/
import { Alert, Image, Pressable, Text, Vibration, View } from "react-native";
import React from "react";
import { estiloCardFilme } from "../stylesheet/estilos";
import imagemAlt from "../../assets/images/foto-alternativa.jpg";
import { Ionicons } from "@expo/vector-icons";
/* Hook Necessário pois não estamos em uma tela com acesso à prop navigation */
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CardFilme({ filme }) {
  /* Extraindo as informações do filme (titulo e imagem de capa) */
  const { title, poster_path } = filme;

  /*  Acessar resucursos de navegação */
  const navigation = useNavigation();

  /* Criando a função de salvar um filme */
  const salvar = async () => {
    try {
      /*  1) Verificar/carregar os favoritos armazanados no AsyncStorage.
      Usamos o getItem do AsyncStorage para analisar se existe um armazenamento com o nome indicado (@favoritosBarbosa). Se não Existir, será criado posteriormente */
      const filmesFavoritos = await AsyncStorage.getItem("@favoritosbarbosa");
      /*  2) Verificar/criar uma lista de filmes favoritos (dados).
      Se filmes favoritos existir (ou seja, tem dados no storage), pegamos estes dados (strings) e convertemos em objeto(JSON.parse). Caso contrário listaDeFilmes será um Array vazio  */
      const listaDeFilmes = filmesFavoritos ? JSON.parse(filmesFavoritos) : [];

      /* 3) Verificar se ja tem algum filme na lista para evitar de ter mais de um filme salvo
      na lista de favoritos.
      Usamso a Função .some()para avaliar se o ID do filme na tela do app (nos Cards). Se for, retorna TRUE indicando que o filme já foi salvo em algum momento. Caso contrário , retorna FALSE indicando que filme ainda não foi salvo. */
      const jaTemFilme = listaDeFilmes.some((filmeNaLista) => {
        return filmeNaLista.id === filme.id;
        // True or False
      });

      /* 4) Verificação , altere e registra o filme */
      /*  4.1) Se ja tem filme, avisaremos ao usuário */
      if (jaTemFilme) {
        Alert.alert("Ops!", "Você já salvou esse filme");
        Vibration.vibrate(300);
        return;
      }
      /*  4.2) Se não, vamos  colocar na lista */
      listaDeFilmes.push(filme);

      /* 5) usar o asyncStorage para gravar no armazenamento offline do dispositivo  */
      await AsyncStorage.setItem(
        "@favoritosbarbosa",
        JSON.stringify(listaDeFilmes)
      );
      Alert.alert("Favoritos", `Filme: ${title} salvo com sucesso!!`);
    } catch (error) {
      console.log("Deu ruim: " + error);

      Alert.alert("Erro", "erro aou salvar o filme");
    }
  };

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
              navigation.navigate("Detalhes", { filme });
            }}
          >
            <View style={estiloCardFilme.botaoIcon}>
              <Ionicons name="book" size={18} color="#a471f9" />
              <Text style={estiloCardFilme.textoBotao}>Leia Mais</Text>
            </View>
          </Pressable>

          <Pressable style={estiloCardFilme.botao} onPress={salvar}>
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
