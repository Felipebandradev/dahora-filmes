import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { estilosListaVazia } from "../stylesheet/estilos";
import naoAchei from "../../assets/images/pipoca-nao-encontrada.png";

export default function ListaVazia({ pesquisado }) {
  return (
    <View style={estilosListaVazia.viewNada}>
      <Text>
        Filme
        <Text style={estilosListaVazia.filmePesquisado}> {pesquisado}</Text> não
        foi encontrado te espero no lançamento!!
      </Text>
      <Image
        resizeMode="contain"
        style={estilosListaVazia.imagem}
        source={naoAchei}
      />
    </View>
  );
}
