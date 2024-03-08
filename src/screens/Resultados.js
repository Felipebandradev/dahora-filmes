import { FlatList, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { estilosResultado } from "../stylesheet/estilos";
import { api, apiKey } from "../services/api-moviedb";
import { useEffect, useState } from "react";
import CardFilme from "../components/CardFilme";

/* Prop Route
Prop Especial e definida pelo React Navigation.
Através dela que é possível acessar valores passados
por meio de navegação entre telas. */
export default function Resultados({ route }) {
  /* State para gerenciar os resultados da busca na API */
  const [resultados, setResultados] = useState([]);

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

        <View style={estilosResultado.viewFilmes}>
          <FlatList
            data={resultados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <CardFilme filme={item} />;
            }}
            ListEmptyComponent={() => (
              <Text>Não foi localizado nenhum filme!!😥</Text>
            )}
            ItemSeparatorComponent={() => <Text>**********</Text>}
          />
        </View>
      </View>
    </SafeContainer>
  );
}
