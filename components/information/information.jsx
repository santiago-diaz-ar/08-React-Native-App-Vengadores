import { View, Image, Text } from "react-native";

export default function Information({ id, image, description }) {
  return (
    <View>
      <Text>{id}</Text>
      <Image source={image} />
      <Text>{description}</Text>
    </View>
  );
}
