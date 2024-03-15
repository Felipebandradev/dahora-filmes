import {
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
  Alert,
  Vibration,
} from "react-native";
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

  const excluirTodosFavoritos = async () => {
    Alert.alert(
      "Excluir Todos?",
      "Tem certeza que deseja excluir todos os favoritos?",
      [
        {
          text: "Cancelar",
          style: "cancel", // verificar, estilo somente irá funcionar em ios
        },
        {
          text: "Sim, sem dó",
          style: "destructive", // estilo somente irá funcionar em ios
          onPress: async () => {
            /* Removemos nosso storage de favoritos  */
            await AsyncStorage.removeItem("@favoritosbarbosa");

            /* E atualizamos o state para que sejam removidos da tela */
            setListaFavoritos([]);
          },
        },
      ]
    );
  };

  const excluirUm = async (filmeId, FilmeTitulo) => {
    Alert.alert(
      "Excluir ",
      "Tem certeza que deseja excluir " + FilmeTitulo + " dos favoritos?",
      [
        {
          text: "Cancelar",
          style: "cancel", // verificar, estilo somente irá funcionar em ios
        },
        {
          text: "Sim, sem dó",
          style: "destructive", // estilo somente irá funcionar em ios
          onPress: async () => {
            try {
              /* Gerando uma nova lista de filmes EXCETO o que vai ser removido */
              const novosFav = listaFavoritos.filter(
                (filme) => filme.id !== filmeId
              );

              /* Atualizando o Storage com os dados nova lista de favoritos sem o filme excluido */
              await AsyncStorage.setItem(
                "@favoritosbarbosa",
                JSON.stringify(novosFav)
              );

              /* Atualizaar o state sem como os dados da nova lista SEM o filme ser removido */
              setListaFavoritos(novosFav);

              Vibration.vibrate(300);
            } catch (error) {
              console.log("Erro ao Excluir: ", error);
            }
          },
        },
      ]
    );
  };

  return (
    <SafeContainer>
      <View style={estilosFavoritos.subContainer}>
        <View style={estilosFavoritos.viewFavoritos}>
          <Text style={estilosFavoritos.texto}>
            Quantidade: {listaFavoritos.length}
          </Text>
          {/* Se a quantidade de lista de favoritos for maior que 0 vai aparecer */}
          {listaFavoritos.length > 0 && (
            <Pressable
              style={estilosFavoritos.botao}
              onPress={excluirTodosFavoritos}
            >
              <Text style={estilosFavoritos.textoBotao}>
                <Ionicons name="trash" size={16} color="red" /> Excluir
                Favoritos
              </Text>
            </Pressable>
          )}
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
                  <Text style={estilosFavoritos.cardTitulo}>{filme.title}</Text>
                </Pressable>
                <Pressable
                  style={estilosFavoritos.excluir}
                  onPress={() => excluirUm(filme.id, filme.title)}
                >
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
