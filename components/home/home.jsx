import * as React from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import CharacterCard from "../characterCard/CharacterCard";
import { useState, useEffect } from "react";
import apiParams from "../../config";
import axios from "axios";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  //todo: Estado para el input
  const [search, setSearch] = useState("");

  function searchCharacter() {
    if (search.length > 0) {
      setLoading(true);
      axios
        .get(`${baseURL}/v1/public/characters`, {
          params: {
            ts,
            apikey,
            hash,
            nameStartsWith: search,
          },
        })
        .then((response) => setData(response.data.data.results))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } else {
      axios
        .get(`${baseURL}/v1/public/characters`, {
          params: {
            ts,
            apikey,
            hash,
          },
        })
        .then((response) => setData(response?.data?.data?.results))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  }

  //todo:useEffect para el llamado del los Personajes
  useEffect(() => {
    axios
      .get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
      .then((response) => setData(response?.data?.data?.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("About");
            }}
          >
            <Text style={{ textAlign: "center", marginTop: 10 }}>About</Text>
          </TouchableOpacity>
          <Searchbar
            placeholder="Search for character..."
            onChangeText={(value) => setSearch(value)}
            value={search}
            onIconPress={searchCharacter}
            onSubmitEditing={searchCharacter}
            style={{ margin: 10 }}
          />

          <FlatList
            data={data}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <CharacterCard
                id={item?.id}
                name={item?.name}
                image={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                description={item?.description}
              />
            )}
          />
        </View>
      )}
    </View>
  );
}
