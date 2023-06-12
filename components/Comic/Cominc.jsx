import { View, Text, Image, ScrollView } from "react-native";

const Comic = ({ name, image }) => {
  return (
    <ScrollView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
          borderWidth: 1,
          borderRadius: 10,
        }}
      >
        <Text>{name}</Text>
        <View style={{ width: 150, height: 150 }}>
          <Image
            source={{ uri: image }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Comic;
