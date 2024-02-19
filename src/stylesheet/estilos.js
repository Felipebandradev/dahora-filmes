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
    color: "#5a51a6",
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
    backgroundColor: "#4d4491",
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
    backgroundColor: "#5a51a6",
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
    color: "#5a51a6",
  },
  logo: {
    width: 125,
  },
  formatLogo: {
    alignItems: "center",
    marginVertical: 8,
  },
});

export { estilosInicio, estilosContainer, estiloSobre };
