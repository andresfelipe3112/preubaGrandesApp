import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import SideMenu from 'react-native-side-menu-updated';
import Menu from '../components/Menu';
import TabNav from '../components/TabBar';
import {Login} from '../screens/Login';
import {Register} from '../screens/register';

const Stack = createNativeStackNavigator();

interface WelcomeProps {
  RootNavigation: any;
}

const Welcome: React.FC<WelcomeProps> = ({RootNavigation}) => {
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
      </Stack.Navigator>
    </SideMenu>
  );
};

export default Welcome;
