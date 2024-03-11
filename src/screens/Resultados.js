import { FlatList, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { estilosResultado } from "../stylesheet/estilos";
import { api, apiKey } from "../services/api-moviedb";
import { useEffect, useState } from "react";
import CardFilme from "../components/CardFilme";
import Separador from "../components/Separador";
import ListaVazia from "../components/ListaVazia";
import Loading from "../components/Loading";

/* Prop Route
Prop Especial e definida pelo React Navigation.
Através dela que é possível acessar valores passados
por meio de navegação entre telas. */
export default function Resultados({ route }) {
  /* State para gerenciar os resultados da busca na API */
  const [resultados, setResultados] = useState([]);

  const [loading, setLoading] = useState(true);

  /*  Capturando o parâmetro filme vindo de BuscarFilmes */
  const { filme } = route.params;

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get("/search/movie", {
          params: {
            include_adult: false,
            language: "pt-BR",
            query: filme,
            api_key: apiKey,
          },
        });
        /* Adicionando os resultados ao state */
        setResultados(resposta.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Deu Ruim: " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  return (
    <SafeContainer>
      <View style={estilosResultado.subContainer}>
        <Text style={estilosResultado.texto}>
          Você buscou por:
          <Text style={estilosResultado.textoNomeFilme}> {filme}</Text>
        </Text>

        {loading && <Loading />}
        {!loading && (
          <View style={estilosResultado.viewFilmes}>
            <FlatList
              data={resultados}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return <CardFilme filme={item} />;
              }}
              ListEmptyComponent={<ListaVazia pesquisado={filme} />}
              ItemSeparatorComponent={<Separador />}
            />
          </View>
        )}
      </View>
    </SafeContainer>
  );
}
