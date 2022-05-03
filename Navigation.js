import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { HomeIcon, ProfileIcon } from "./assets/images";
import {
  lightColor,
  red,
  tabColor,
  textColor,
  white,
} from "./src/styles/colors";

import { Image } from "react-native";
import ListingDetail from "./src/screens/ListingDetail/index";
import LocationSearch from "./src/screens/LocationSearch/index";
import ProfileScreen from "./src/screens/ProfileScreen";
import SearchScreen from "./src/screens/SearchScreen/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import template from "./src/styles/template";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const SearchStack = () => (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerMode: "screen",
        headerTintColor: white,
        headerStyle: { backgroundColor: red },
        title: "EatNow",
      }}
    >
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="ListingDetail" component={ListingDetail} />
      <Stack.Screen name="LocationSearch" component={LocationSearch} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: red,
          tabBarInactiveTintColor: tabColor,
        }}
      >
        <Tab.Screen
          name="Home"
          component={SearchStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Image source={HomeIcon} style={template.tabBarImage(color)} />
            ),
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image source={ProfileIcon} style={template.tabBarImage(color)} />
            ),
            tabBarLabel: "Profile",
            title: "Settings",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
