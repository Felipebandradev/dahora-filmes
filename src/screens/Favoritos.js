import { Text, View, Pressable, ScrollView } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { estilosFavoritos } from "../stylesheet/estilos";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Favoritos() {
  /* State para carregar dasdos do AsyncStorage */
  const [listaFavoritos, setListaFavoritos] = useState([]);

  /* useEffect será disparado assim que o usuário entrar na tela Favoritos (portanto, sumente uma vez) */
  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        const dados = await AsyncStorage.getItem("@favoritosbarbosa");
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
          <Text style={estilosFavoritos.texto}>Favoritos</Text>
        </View>
      </View>
    </SafeContainer>
  );
}
