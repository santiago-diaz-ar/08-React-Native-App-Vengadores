import { View, Text, Image, ScrollView } from "react-native";

const Comic = ({ name, image }) => {
  return (
    <ScrollView>
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
        <Text>{name}</Text>
        <View style={{ width: 250, height: 200, borderRadius: 10 }}>
          <Image
            source={{ uri: image }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
            resizeMode="stretch"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Comic;
