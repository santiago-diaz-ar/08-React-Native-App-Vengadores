import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CharacterCard = ({ name, image }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Detail");
      }}
    >
      <Text>Character en desarrollo</Text>
      <Text>{name}</Text>
      <Image source={image} />
    </TouchableOpacity>
  );
};
export default CharacterCard;
