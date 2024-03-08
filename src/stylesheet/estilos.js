import { StyleSheet } from "react-native";

const estilosInicio = StyleSheet.create({
  viewLogo: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  logo: {
    width: 170,
    height: 170,
  },
  titulo: {
    fontFamily: "Monoton-Regular",
    fontSize: 30,
    color: "#a471f9",
    textAlign: "center",
  },
  viewBotoes: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  botao: {
    // borderStyle: "solid",
    // borderWidth: 2,
    padding: 16,
    backgroundColor: "#a471f9",
    borderRadius: 15,
  },
  textoBotao: {
    color: "#fff",
    fontFamily: "NotoSans",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "center",
  },

  viewRodape: {
    width: "100%",
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#a361fd",
  },
  botaoRodape: {
    padding: 16,
  },
});

const estilosContainer = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const estiloSobre = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },
  subtitulo: {
    fontFamily: "NotoSans",
    marginVertical: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  texto: {
    marginVertical: 8,
  },
  nomeApp: {
    fontWeight: "bold",
    color: "#a471f9",
  },
  logo: {
    width: 125,
  },
  formatLogo: {
    alignItems: "center",
    marginVertical: 8,
  },
});

const estiloBuscarFilmes = StyleSheet.create({
  inputText: {
    height: 40,
    width: "80%",
    borderStyle: "solid",
    borderWidth: 2,
    margin: 12,
    padding: 10,
    borderColor: "#a471f9",
  },
  botao: {
    color: "#a471f9",
  },
  buscarInpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const estilosResultado = StyleSheet.create({
  textoNomeFilme: {
    fontWeight: "bold",
    color: "#a361fd",
  },
  viewFilmes: {
    marginVertical: 8,
  },
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
});

export {
  estilosInicio,
  estilosContainer,
  estiloSobre,
  estiloBuscarFilmes,
  estilosResultado,
};
