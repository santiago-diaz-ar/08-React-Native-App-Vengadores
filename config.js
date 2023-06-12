import md5 from "md5";

import Constants from "expo-constants";

const publicKey = Constants.manifest.extra.publicKey;
const privateKey = Constants.manifest.extra.privateKey;

const ts = Date.now();
// Generamos el hash que nos pide la API pasandole como parámetro
// a la función md5 un string que concatene el ts + privateKey + publicKey
const hash = md5(`${ts}${privateKey}${publicKey}`);

// Exportamos un objeto con los datos necesarios para usar la API
// para que luego podamos importarlo desde cualquier componente
const apiParams = {
  ts,
  apikey: publicKey,
  hash,
  baseURL: "https://gateway.marvel.com",
};
export default apiParams;
