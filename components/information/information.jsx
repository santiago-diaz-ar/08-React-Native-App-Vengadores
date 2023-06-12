import { View, Image, Text } from "react-native";

export default function Information({ id, image, description }) {
  return (
    <View
      style={{

        margin: 5,
        alignItems: "center",
      }}
    >
      <Text style={{ marginBottom: 10 }}>id: {id}</Text>
      <View style={{ width: 330, height: 420 }}>
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            marginBottom: 10,
          }}
        />
      </View>
      <Text style={{ margin: 10 }}>{description}</Text>
    </View>
  );
}
