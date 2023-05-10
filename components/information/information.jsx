import { View, Image, Text } from "react-native";

export default function Information({ image, name, description }) {
  return (
    <View>
      <Text>Information en Desarrollo</Text>
      <Image source={{ uri: image }} />
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
  );
}
