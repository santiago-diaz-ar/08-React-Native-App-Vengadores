import * as React from "react";
import { Text, View } from "react-native";
import CharacterCard from "../characterCard/CharacterCard";

const Home = () => {
  return (
    <View>
      <Text>Home componente</Text>
      <CharacterCard name="Hulk" image={require("../img/Hulk.png")} />
      <CharacterCard name="IronMan" image={require("../img/IronMan.png")} />
    </View>
  );
};

export default Home;
