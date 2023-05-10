import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";

export default function CharacterCard({ image, name, id }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <Image source={image} />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}
