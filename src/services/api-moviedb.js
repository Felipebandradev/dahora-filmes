import axios from "axios";

/* Usamos o Axios para criar uma referência ao endpoint da
API/Services (chamda de baseURL) e configuramos também o uso da API Key */

/* Como nossa variavel de ambiente com a chave de api
foi definida no arquivo .env, para acessa-lo utilizamos
process.env.NOME_DA_VARIAVEL_DE_AMBIENTE */
const apiKey = process.env.EXPO_PUBLIC_API_KEY;
