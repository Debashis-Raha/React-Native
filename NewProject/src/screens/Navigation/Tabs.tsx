import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../HomePage/Home';
import Profile from '../Profile/Profile';
import Notification from '../Notification/Notification';
import AddItems from '../AddItems/AddItems';
import AddToCart from '../addToCart/addToCart';
import {addToCart} from '../Store/CartSlice';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  const screenIcons = {
    Home: 'home',
    AddItems: 'add-circle',
    Profile: 'person',
    AddToCart: 'cart',
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const iconName = screenIcons[route.name];
          return (
            <Ionicons
              name={focused ? iconName : `${iconName}-outline`}
              size={size}
              color={color}
            />
          );
        },
        // headerShown: false,
        tabBarActiveTintColor: '#FF2E63',
        tabBarInactiveTintColor: '#252A34',
      })}>
      <Tab.Screen name="Home" component={Home} options={
        {
          headerShown:false
        }
      } />
      <Tab.Screen name="AddItems" component={AddItems} options={{
     headerShown:false
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          headerShown:false
      }}/>
      <Tab.Screen name="AddToCart" component={AddToCart} options={{
        headerShown:false
      }} />
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
        options={{headerShown: false}}
      />
      <Stack.Screen name="Cart" component={addToCart} />
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
