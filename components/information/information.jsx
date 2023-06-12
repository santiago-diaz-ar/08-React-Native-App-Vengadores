import { View, Image, Text, ScrollView } from "react-native";

export default function Information({ id, image, description }) {
  console.log(description.length);
  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <View style={{ width: "100%", height: 400 }}>
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
        {description.length == 0 ? (
          <Text>No description</Text>
        ) : (
          <Text style={{ margin: 10 }}>{description}</Text>
        )}
      </View>
    </ScrollView>
  );
}
