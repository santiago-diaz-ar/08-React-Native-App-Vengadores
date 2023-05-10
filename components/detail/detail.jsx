import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import Information from "../information/information";
import Comics from "../comics/Commics.jsx";
import axios from "axios";
import apiParams from "../../config";
import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";

const Tab = createBottomTabNavigator();

const Detail = ({ route }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  useEffect(() => {
    axios
      .get(`${baseURL}/v1/public/characters/${route.params.id}`, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
      .then((response) => setData(response.data.data.results[0]))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Information"
      /* tabBarOptions={{
        activeTintColor: "darkred",
      }} */
    >
      <Tab.Screen
        name="Information"
        /*     component={Information} */
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-circle"
              color={color}
              size={size}
            />
          ),
        }}
      >
        {() => (
          <Information
            id={route.params.id}
            image={route.params.image}
            description={route.params.description}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Comics"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      >
        {() =>
          isLoading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            <Comics listComics={data?.comics?.items} />
          )
        }
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Detail;
