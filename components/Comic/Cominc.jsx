import { View, Text, Image, ScrollView } from "react-native";

const Comic = ({ name, image }) => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "gre",
          borderWidth: 1,
          borderRadius: 10,
          margin: 10,
        }}
      >
        <Text
          style={{
            marginTop: 5,
            textAlign: "center",
            color: "black",
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
        <View
          style={{
            width: 300,
            height: 300,
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
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
