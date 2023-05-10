import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import Information from "../information/information";
import Comics from "../commics/Commics.jsx";

const Tab = createBottomTabNavigator();

const Detail = ({route}) => {
  return (
    <Tab.Navigator
      initialRouteName="Information"
      tabBarOptions={{
        activeTintColor: "darkred",
      }}
    >
      <Tab.Screen
        name="Information"
        component={Information}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Comics"
        component={Comics}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Detail;
