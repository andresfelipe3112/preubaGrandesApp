import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavBar from '../../../components/NavBar';
import Cart from '../../../screens/cart';
import Home from '../../../screens/home';
import TabNav from '../../../components/TabBar';
import MyProfile from '../../../screens/profile';
import OrderHistory from '../../../screens/orderHistory';
import UserProfile from '../../../screens/userProfile';
import MyFavorites from '../../../screens/favorites';
import MyAddresses from '../../../screens/addresses';
import EditProfile from '../../../screens/editProfile';
import SideMenu from 'react-native-side-menu-updated';
import Menu from '../../../components/Menu';
import {Dimensions} from 'react-native';
import JoinStream from '../../../screens/JoinStream/joinStream';
import Login from '../../../screens/Login';
import Register from '../../../screens/register';
export default function StackConsumer({RootNavigation}: {RootNavigation: any}) {
  const Stack = createNativeStackNavigator();
  const [open, setOpen] = useState(false);
  const {width} = Dimensions.get('window');
  const menu = <Menu setOpen={setOpen} open={open} />;
  return (
    <SideMenu
      menu={menu}
      isOpen={open}
      menuPosition={'right'}
      openMenuOffset={width - 30}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={() => ({
            header: () => (
              <TabNav
                navigation={RootNavigation}
                setOpen={setOpen}
                open={open}
                creator={false}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={() => ({
            header: () => (
              <TabNav
                navigation={RootNavigation}
                setOpen={setOpen}
                open={open}
                creator={false}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={() => ({
            header: () => (
              <TabNav
                navigation={RootNavigation}
                setOpen={setOpen}
                open={open}
                creator={false}
              />
            ),
          })}
        />
        <Stack.Screen
          name="MyProfile"
          component={() => <MyProfile navigation={RootNavigation} />}
          options={() => ({
            header: () => (
              <NavBar
                name="Your Profile"
                color={'#ECECEC'}
                navigation={RootNavigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Streams"
          component={JoinStream}
          options={() => ({
            header: () => (
              <TabNav
                navigation={RootNavigation}
                setOpen={setOpen}
                creator={false}
                open={open}
              />
            ),
          })}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={() => ({
            header: () => (
              <NavBar
                name="Edit Profiles"
                color={'#ECECEC'}
                navigation={RootNavigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="OrderHistory"
          component={OrderHistory}
          options={() => ({
            header: () => (
              <NavBar
                name="My Order History"
                color={'#ECECEC'}
                navigation={RootNavigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="MyAddresses"
          component={MyAddresses}
          options={() => ({
            header: () => (
              <NavBar
                name="My Addresses"
                color={'#ECECEC'}
                navigation={RootNavigation}
              />
            ),
          })}
        />

        <Stack.Screen
          name="UserProfile"
          component={() => <UserProfile navigation={RootNavigation} />}
          options={() => ({
            header: () => null,
          })}
        />
        <Stack.Screen
          name="MyFavorites"
          component={MyFavorites}
          options={() => ({
            header: () => (
              <NavBar
                name="MY FAVORITES"
                dark={true}
                navigation={RootNavigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={() => ({
            header: () => (
              <NavBar
                color={'white'}
                name="Your Cart"
                navigation={RootNavigation}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </SideMenu>
  );
}
