import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";

export default function CharacterCard({ image, name, id, description }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
      }}
    >
      <Text
        style={{
          color: "black",
          width: "100%",
          textAlign: "center",
          borderRadius: 10,
          marginBottom: 10,
          fontWeight: "bold",
        }}
      >
        {name}
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", {
            id: id,
            image: image,
            description: description,
          })
        }
      >
        <View style={{ width: 320, height: 200 }}>
          <Image
            source={{ uri: image }}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "red",
              borderRadius: 10,
            }}
            resizeMode="stretch"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
