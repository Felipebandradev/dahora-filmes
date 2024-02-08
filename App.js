import { Button, SafeAreaView, StatusBar, Text, View } from "react-native";

import { estilosInicio } from "./src/stylesheet/estilos";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilosInicio.container}>
        <View style={estilosInicio.viewLogo}>
          <Text>Dá Hora Filmes</Text>
        </View>
        <View style={estilosInicio.viewBotoes}>
          <Button title="Buscar Filmes" />
          <Button title="Favoritos" />
        </View>
        <View style={estilosInicio.viewRodape}>
          <Button title="privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </>
  );
}
