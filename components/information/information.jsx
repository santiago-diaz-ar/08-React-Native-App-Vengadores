import { View, Image, Text, ScrollView } from "react-native";

export default function Information({ id, image, description }) {
  return (
    <ScrollView>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <View style={{ width: 330, height: 400 }}>
          <Image
            source={{ uri: image }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              marginBottom: 10,
            }}
            resizeMode="stretch"
          />
        </View>
        {description.length == 0 ? (
          <Text style={{ marginTop: 7 }}>No description</Text>
        ) : (
          <Text style={{ margin: 10, textAlign: "center" }}>{description}</Text>
        )}
      </View>
    </ScrollView>
  );
}
