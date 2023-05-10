import { View, Image, Text } from "react-native";

export default function Information({ id, image, description }) {
  return (
    <View>
      <Text>{id}</Text>
      <Image
      /*   source={image}
        style={{ width: 100, height: 100 }}
         */
      />
      <Text>{description}</Text>
    </View>
  );
}
