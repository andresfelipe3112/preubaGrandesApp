import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavBar from '../../../components/NavBar';
import Cart from '../../../screens/cart';
import WheelTime from '../../../screens/Schedule/WheelTime';
import TabNav from '../../../components/TabBar';
import OrderHistory from '../../../screens/orderHistory';
import MyStreams from '../../../screens/mystreams';
import UserProfile from '../../../screens/userProfile';
import Schedule from '../../../screens/Schedule';
import Confirm from '../../../screens/Schedule/Confirm';
import BrowseProducts from '../../../screens/browseProducts';
import MyAddresses from '../../../screens/addresses';
import EditProfile from '../../../screens/editProfile';
import {Dimensions} from 'react-native';
import Menu from '../../../components/Menu';
import SideMenu from 'react-native-side-menu-updated';
import MyProfileCreator from '../../../screens/profileCreator';
import HomeCreator from '../../../screens/homeCreator';
import Home from '../../../screens/home';
import JoinStream from '../../../screens/JoinStream/joinStream';
import CreateStream from '../../../screens/CreateStream/createStream';
import MyStatistics from '../../../screens/statistics';
import Login from '../../../screens/Login';
import Register from '../../../screens/register';
export default function StackCreator({RootNavigation}: {RootNavigation: any}) {
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
          name="Home"
          component={Home}
          options={() => ({
            header: () => (
              <TabNav
                navigation={RootNavigation}
                setOpen={setOpen}
                creator={true}
                open={open}
              />
            ),
          })}
        />
        <Stack.Screen
          name="CreatorDashboard"
          component={HomeCreator}
          options={() => ({
            header: () => (
              <TabNav
                navigation={RootNavigation}
                setOpen={setOpen}
                creator={true}
                open={open}
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
                creator={true}
                open={open}
              />
            ),
          })}
        />
        <Stack.Screen
          name="CreateStreams"
          component={CreateStream}
          options={() => ({
            header: () => (
              <TabNav
                navigation={RootNavigation}
                setOpen={setOpen}
                creator={true}
                open={open}
              />
            ),
          })}
        />
        <Stack.Screen
          name="MyProfileCreator"
          component={() => <MyStatistics navigation={RootNavigation} />}
          options={() => ({
            header: () => (
              <NavBar
                name="MY STATISTICS"
                dark={true}
                setOpen={setOpen}
                menu={true}
                open={open}
                color={'#ECECEC'}
                navigation={RootNavigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="MyProfileCreator2"
          component={() => <MyProfileCreator navigation={RootNavigation} />}
          options={() => ({
            header: () => (
              <NavBar
                name="MY PROFILE"
                dark={true}
                setOpen={setOpen}
                menu={true}
                open={open}
                color={'#ECECEC'}
                navigation={RootNavigation}
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
          name="MyStreams"
          component={MyStreams}
          options={() => ({
            header: () => (
              <NavBar
                name="MY STREAMS"
                dark={true}
                iconProfile={true}
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
        <Stack.Screen
          name="Schedule"
          component={() => <Schedule navigation={RootNavigation} />}
          options={() => ({
            header: () => (
              <NavBar
                name="SCHEDULE A STREAM"
                dark={true}
                navigation={RootNavigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="DatePicker"
          component={Cart}
          options={() => ({
            header: () => (
              <NavBar
                name="SCHEDULE A STREAM"
                dark={true}
                navigation={RootNavigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="WheelTime"
          component={WheelTime}
          options={() => ({
            header: () => (
              <NavBar
                name="SCHEDULE A STREAM"
                dark={true}
                navigation={RootNavigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="ConfirmSchedule"
          component={Confirm}
          options={() => ({
            header: () => (
              <NavBar
                name="SCHEDULE A STREAM"
                dark={true}
                navigation={RootNavigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="BrowseProducts"
          component={BrowseProducts}
          options={() => ({
            header: () => (
              <NavBar
                name="BROWSE PRODUCTS"
                dark={true}
                navigation={RootNavigation}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </SideMenu>
  );
}
