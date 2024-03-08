import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { estiloSeparador } from "../stylesheet/estilos";

export default function Separador() {
  return (
    <View style={estiloSeparador.viewSeparador}>
      <MaterialCommunityIcons name="movie-roll" size={13} color="#a471f9" />
      <MaterialCommunityIcons name="movie-roll" size={13} color="#a471f9" />
      <MaterialCommunityIcons name="movie-roll" size={13} color="#a471f9" />
    </View>
  );
}
