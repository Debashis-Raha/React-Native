import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../HomePage/Home"; 
import Profile from "../Profile/Profile"; 
import Notification from "../Notification/Notification";
import AddItems from "../AddItems/AddItems";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === 'AddItems') {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        
        },
        headerShown:false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddItems" component={AddItems} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="HomeDrawer" component={TabNavigator} />
//       <Drawer.Screen name="Notifications" component={Notification} />
//     </Drawer.Navigator>
//   );
// };

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AddItems" component={AddItems} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default TabNavigation;
