import { Text, View, Pressable, ScrollView, Image } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { estilosFavoritos } from "../stylesheet/estilos";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import imagemAlt from "../../assets/images/foto-alternativa.jpg";

export default function Favoritos({ navigation }) {
  /* State para carregar dasdos do AsyncStorage */
  const [listaFavoritos, setListaFavoritos] = useState([]);

  /* useEffect será disparado assim que o usuário entrar na tela Favoritos (portanto, sumente uma vez) */
  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        /* Acessamos o storage criando previamente e guardamos as strings */
        const dados = await AsyncStorage.getItem("@favoritosbarbosa");

        /* Se houver dados convertemos as strings em objetos e atualizamos o State */
        if (dados) {
          setListaFavoritos(JSON.parse(dados));
        }
      } catch (error) {
        console.log("Erro ao carregar os dados:  " + error);
        Alert.alert(
          "Erro",
          "Erro ao carregar os dados tente novamente mais tarde"
        );
      }
    };
    carregarFavoritos();
  }, []);

  console.log(listaFavoritos);

  return (
    <SafeContainer>
      <View style={estilosFavoritos.subContainer}>
        <View style={estilosFavoritos.viewFavoritos}>
          <Text style={estilosFavoritos.texto}>
            Quantidade: {listaFavoritos.length}
          </Text>
          <Pressable style={estilosFavoritos.botao}>
            <Text style={estilosFavoritos.textoBotao}>
              <Ionicons name="trash" size={16} color="red" /> Excluir Favoritos
            </Text>
          </Pressable>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filme) => {
            return (
              <View key={filme.id} style={estilosFavoritos.cardFavorito}>
                <Pressable
                  style={estilosFavoritos.filmeFavorito}
                  onPress={() => {
                    navigation.navigate("Detalhes", { filme });
                  }}
                >
                  <View style={estilosFavoritos.dentroBotao}>
                    <Image
                      resizeMode="contain"
                      style={estilosFavoritos.imagem}
                      source={
                        filme.poster_path
                          ? {
                              uri: `https://image.tmdb.org/t/p/w500/${filme.poster_path}`,
                            }
                          : imagemAlt
                      }
                    />
                    <Text style={estilosFavoritos.cardTitulo}>
                      {filme.title}
                    </Text>
                  </View>
                </Pressable>
                <Pressable style={estilosFavoritos.excluir}>
                  <Ionicons name="trash" size={20} color="white" />
                  <Text style={estilosFavoritos.textoExcluir}>
                    Excluir dos favoritos
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeContainer>
  );
}
