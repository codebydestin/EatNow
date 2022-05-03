import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { red, white } from "./src/styles/colors";

import ListingDetail from "./src/screens/ListingDetail/index";
import LocationSearch from "./src/screens/LocationSearch/index";
import SearchScreen from "./src/screens/SearchScreen/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: white,
          headerStyle: { backgroundColor: red },
        }}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: "EatNow",
          }}
        />
        <Stack.Screen name="ListingDetail" component={ListingDetail} />
        <Stack.Screen name="LocationSearch" component={LocationSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
