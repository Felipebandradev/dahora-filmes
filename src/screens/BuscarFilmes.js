import { Alert, Button, Text, TextInput, Vibration, View } from "react-native";
import React, { useState } from "react";
import SafeContainer from "../components/SafeContainer";
import { estiloBuscarFilmes, estiloSobre } from "../stylesheet/estilos";
import { Ionicons } from "@expo/vector-icons";

export default function BuscarFilmes({ navigation }) {
  const [filme, setFilme] = useState("");

  const filmeDigitado = (valorDigitado) => {
    setFilme(valorDigitado);
  };
  const buscarFilmes = () => {
    /* Avaliando se o state filme não foi dafinido */
    if (!filme) {
      Vibration.vibrate(500);
      return Alert.alert("Ops!", "Você deve digitar um filme! 🎬");
    }

    /* Redirecionamento para tela de resultados passando o filme para ela  através do segundo parâmetro do método navigate*/
    navigation.navigate("Resultados", { filme });
  };

  return (
    <>
      <SafeContainer>
        <View style={estiloSobre.subContainer}>
          <Text>Star wars? Poderoso Chefão? Cruella? </Text>
          <Text>Localize um Filme que viu ou gostaria de ver.</Text>
          <View style={estiloBuscarFilmes.buscarInpContainer}>
            <Ionicons name="film" size={50} color="#a471f9" />
            <TextInput
              style={estiloBuscarFilmes.inputText}
              onChangeText={filmeDigitado}
              onSubmitEditing={buscarFilmes}
              enterKeyHint="search"
              placeholder="Digite um filme"
              maxLength={40}
              autoFocus
            />
          </View>
          <Button color="#a471f9" title="Procurar" onPress={buscarFilmes} />
        </View>
      </SafeContainer>
    </>
  );
}
