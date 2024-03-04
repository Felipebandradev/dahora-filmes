import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Privacidade from "./src/screens/Privacidade";
import Sobre from "./src/screens/Sobre";
import BuscarFilmes from "./src/screens/BuscarFilmes";
import Resultados from "./src/screens/Resultados";

// Criação e inicialização do mecanismo Stack

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#a361fd" },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{ title: "Conheça Nosso App" }}
          />
          <Stack.Screen name="Privacidade" component={Privacidade} />
          <Stack.Screen
            name="BuscarFilmes"
            component={BuscarFilmes}
            options={{ title: "Qual filme quer pesquisar?" }}
          />

          <Stack.Screen name="Resultados" component={Resultados} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
