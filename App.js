import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

import logo from "./assets/images/logo.png";

import { estilosInicio } from "./src/stylesheet/estilos";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilosInicio.container}>
        <View style={estilosInicio.viewLogo}>
          <Image source={logo} style={estilosInicio.logo} />
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
