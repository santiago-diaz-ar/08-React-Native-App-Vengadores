import * as React from "react";
import { Text, View } from "react-native";
import CharacterCard from "../characterCard/CharacterCard";
import apiParams from "../../config";
import axios from "axios";

const Home = () => {
  return (
    <View>
      <CharacterCard name="Hulk" image={require("../img/Hulk.png")} />
      <CharacterCard name="IronMan" image={require("../img/IronMan.png")} />
    </View>
  );
};

export default Home;
