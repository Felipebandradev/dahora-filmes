import { Text, View, Pressable, ScrollView } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { estilosFavoritos } from "../stylesheet/estilos";

export default function Favoritos() {
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
