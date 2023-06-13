import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";

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
        borderRadius: 400,
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
          marginTop: 5,
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
        <View style={{ width: 300, height: 300, marginBottom: 10 }}>
          <Image
            source={{ uri: image }}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              borderRadius: 300,
              borderColor: "grey",
              borderWidth: 1,
            }}
            resizeMode="stretch"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
