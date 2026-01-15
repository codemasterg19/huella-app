import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Text, View } from "react-native";
import ProfileScreen from "../users/ProfileScreen";
import FeedScreen from "../feed/FeedScreen";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
