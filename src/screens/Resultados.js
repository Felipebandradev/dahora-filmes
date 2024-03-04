import { Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { estiloSobre, estilosResultado } from "../stylesheet/estilos";

/* Prop Route
Prop Especial e definida pelo React Navigation.
Através dela que é possível acessar valores passados
por meio de navegação entre telas. */
export default function Resultados({ route }) {
  // Capturando o parâmetro filme vindo de BuscarFilmes

  const { filme } = route.params;
  return (
    <SafeContainer>
      <View style={estiloSobre.subContainer}>
        <Text style={estilosResultado.texto}>
          Você buscou por:
          <Text style={estilosResultado.textoNomeFilme}> {filme}</Text>{" "}
        </Text>
      </View>
    </SafeContainer>
  );
}
