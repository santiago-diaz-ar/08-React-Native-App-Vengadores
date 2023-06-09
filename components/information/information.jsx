import { View, Image, Text } from "react-native";

export default function Information({ id, image, description }) {
  console.log(description);
  return (
    <View
      style={{
        borderColor: "blue",
        borderRadius: 10,
        borderWidth: 2,
        margin: 5,
        alignItems: "center",
      }}
    >
      <Text style={{ marginBottom: 10 }}>id: {id}</Text>
      <View style={{ width: 150, height: 200 }}>
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
