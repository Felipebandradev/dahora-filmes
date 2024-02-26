import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  Vibration,
  View,
} from "react-native";
import React, { useState } from "react";
import SafeContainer from "../components/SafeContainer";
import { estiloBuscarFilmes, estiloSobre } from "../stylesheet/estilos";
import { Ionicons } from "@expo/vector-icons";

export default function BuscarFilmes() {
  const [text, setText] = useState("");

  const pesquisar = () => {
    if (text === "") {
      Alert.alert("Você não digitou nada");
      Vibration.vibrate(500);
    } else {
      Alert.alert("Parabéns você sabe digitar!🤩");
    }
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
              onChangeText={(newText) => setText(newText)}
              defaultValue={text}
              onSubmitEditing={pesquisar}
              enterKeyHint="search"
              placeholder="Digite um filme"
            />
          </View>
          <Button color="#a471f9" title="Procurar" onPress={pesquisar} />
        </View>
      </SafeContainer>
    </>
  );
}

const styles = StyleSheet.create({});