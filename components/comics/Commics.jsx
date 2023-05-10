import { View, Text, ActivityIndicator } from "react-native";
import Comic from "../Comic/Cominc";
import apiParams from "../../config";
import axios from "axios";
import { useState, useEffect } from "react";

const Commics = ({ listComics }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;
  console.log(listComics);

  useEffect(() => {
    const promisesArray = listComics.map((c) =>
      axios.get(c.resourceURI, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
    );

    Promise.all(promisesArray)
      .then((responses) =>
        setData(responses.map((r) => r?.data?.data?.results[0]))
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        data.map((c) => (
          <Comic
            key={c.id}
            name={c.title}
            image={`${c?.thumbnail?.path}.${c.thumbnail.extension}`}
          />
        ))
      )}
    </View>
  );
};
export default Commics;
