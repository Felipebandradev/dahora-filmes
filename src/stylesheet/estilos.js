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
  subContainer: {
    flex: 1,
    padding: 16,
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

const estiloCardFilme = StyleSheet.create({
  card: {
    marginVertical: 8,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#a361fd",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagem: {
    height: 165,
    width: 100,
    flex: 1,
  },
  corpo: { flex: 2 },
  titulo: {
    backgroundColor: "#a471f9",
    color: "#f7f7f7",
    textAlign: "center",
    paddingVertical: 8,
    fontSize: 16,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  botao: {
    borderColor: "#a361fd",
    borderWidth: 1,
    padding: 8,
    borderRadius: 15,
    padding: 8,
  },
  textoBotao: {
    color: "#a471f9",
    fontSize: 12,
    textTransform: "uppercase",
  },
  botaoIcon: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 8,
  },
});

const estiloSeparador = StyleSheet.create({
  viewSeparador: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

const estilosListaVazia = StyleSheet.create({
  imagem: {
    height: 350,
    width: 350,
    alignSelf: "center",
  },
  filmePesquisado: {
    color: "#ff81a4",
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: 1,
  },
});

const estilosLoading = StyleSheet.create({
  viewLoading: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

const estiloDetalhes = StyleSheet.create({
  subContainer: {
    flex: 1,
    width: "100%",
  },
  imagemFundo: {
    height: 235,
    justifyContent: "center",
    flex: 0.8,
    marginBottom: 8,
  },
  titulo: {
    backgroundColor: "#a471f9",
    color: "#f7f7f7",
    fontFamily: "NotoSans",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 12,
    marginVertical: 4,
    borderRadius: 15,
  },
  conteudo: {
    padding: 8,
    flex: 1,
    marginVertical: 8,
  },
  texto: {
    paddingVertical: 4,
    fontSize: 16,
    margin: 8,
  },
  infos: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  avalicao: {
    color: "red",
  },
  lancamento: {
    color: "darkblue",
  },
  descricao: {
    color: "gray",
  },
  imagem: {
    height: 365,
    width: 300,
    flex: 1,
    alignSelf: "center",
    marginTop: 8,
  },
});

const estilosAppBotao = StyleSheet.create({
  botao: {
    margin: 16,
    padding: 4,
  },
  textoPressable: {
    color: "#fafafa",
    fontWeight: "bold",
    fontSize: 16,
  },
});
const estilosFavoritos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
  texto: {
    marginVertical: 8,
  },
  botao: {},
  textoBotao: {},
  imagem: {
    height: 170,
    width: 110,
    flex: 1,
    alignSelf: "center",
  },
  cardFavorito: {},
  filmeFavorito: {},
  cardTitulo: {
    width: 300,
    margin: 8,
    textAlign: "center",
    alignSelf: "center",
  },
  excluir: {},
  dentroBotao: {},
  viewFavoritos: {
    flexDirection: "row",
  },
});

export {
  estilosInicio,
  estilosContainer,
  estiloSobre,
  estiloBuscarFilmes,
  estilosResultado,
  estiloCardFilme,
  estiloSeparador,
  estilosListaVazia,
  estilosLoading,
  estiloDetalhes,
  estilosAppBotao,
  estilosFavoritos,
};
