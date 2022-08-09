import React from 'react';
import {TouchableOpacity} from 'react-native';


import MenuIcon from '../../assets/svgs/MenuIcon';
import StreamIcon from '../../assets/svgs/StreamIcon';
import ProfileIcon from '../../assets/svgs/ProfileIcon';
import {ContainerTabNav, ContainerNav} from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
import GrandestLogo from '../../assets/svgs/GrandestLogo';
import BagIcon from '../../assets/svgs/BagIcon';
import FavouriteIcon from '../../assets/svgs/FavouriteIcon';

export default function TabNav({
  setOpen,
  open,
  navigation,
  creator,
}: {
  open: boolean;
  setOpen: (e: boolean) => void;
  navigation: any;
  creator: boolean;
}) {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log('useeerxx :' + user);
  

  return (
    <ContainerNav>
     <GrandestLogo/>
      <ContainerTabNav>
        {user && user.potentialAction.includes('creator') && (
          <>
            <TouchableOpacity
              style={{marginRight: 7}}
              onPress={() => navigation.navigate('MyProfileCreator')}>
              <ProfileIcon/>
            </TouchableOpacity>
            <TouchableOpacity
            style={{marginRight: 10}}
              onPress={() => navigation.navigate('MyStreams' as never)}>
              <StreamIcon/>
            </TouchableOpacity>
          </>
        )}
        {!creator && user && (
          < >
            {user && !user?.potentialAction.includes('guest') && (
              <TouchableOpacity
                style={{marginRight: 10}}
                onPress={() => navigation.navigate('MyFavorites')}>
                <FavouriteIcon/>
              </TouchableOpacity>
            )}

            <TouchableOpacity 
            onPress={() => navigation.navigate('Cart')}
             style={{marginRight: 10}}
            >
             <BagIcon/>
            </TouchableOpacity>
          </>
        )}
        <TouchableOpacity onPress={() => setOpen(!open)}>
         <MenuIcon/>
        </TouchableOpacity>
      </ContainerTabNav>
    </ContainerNav>
  );
}
