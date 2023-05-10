import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";

export default function CharacterCard({ image, name, id, description }) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{name}</Text>
      <Image
      /*   source={image}
        style={{ width: 100, height: 100 }} */
        /* resizeMode="container" */
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", {
            id: id,
            image: image,
            description: description,
          })
        }
      >
        <Text>{description}</Text>
      </TouchableOpacity>
    </View>
  );
}
