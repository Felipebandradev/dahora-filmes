import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Text>Dá Hora Filmes</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Button title="Buscar Filmes" />
          <Button title="Favoritos" />
        </View>
        <View style={estilos.viewRodape}>
          <Button title="privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
  },

  viewLogo: {
    backgroundColor: "green",
    flex: 0.7,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "79.9%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  viewBotoes: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "79.9%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "orange",
  },

  viewRodape: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "red",
    width: "79.9%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
