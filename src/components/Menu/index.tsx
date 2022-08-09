import React from 'react';
import {
  Container,
  Title,
  Line,
  ContainerSection,
  ImgContainer,
  ImgTitle,
  SectionText,
  ContainerSection2,
  CloseMenu,
} from './styles';
import MenuIcon1 from '../../assets/MenuIcon1.png';
import MenuIcon2 from '../../assets/MenuIcon2.png';
import MenuIcon3 from '../../assets/MenuIcon3.png';
import CloseIcon from '../../assets/CloseIcon.png';
import * as RootNavigation from '../../../RootNavigation.js';
import {Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
import {LogOut} from '../../Redux/Slices/authSlice';

export const Menu = ({
  setOpen,
  open,
}: {
  open: boolean;
  setOpen: (e: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const rolePut = () => {
    if (user) {
      if (user.potentialAction.includes('creator')) {
        return 'MyProfileCreator';
      }
    }
    return 'MyProfile';
  };
  return (
    <ScrollView>
      <Container>
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <CloseMenu source={CloseIcon} />
        </TouchableOpacity>
        <Title>MENU</Title>
        <Line />
        <ContainerSection>
          <Pressable
            onPress={() => {
              RootNavigation.navigate('Cart');
              setOpen(false);
            }}>
            <ImgContainer>
              <Image source={MenuIcon1} />
              <ImgTitle>Your Cart</ImgTitle>
            </ImgContainer>
          </Pressable>
          {user && !user?.potentialAction.includes('guest') && (
            <Pressable
              onPress={() => {
                RootNavigation.navigate(rolePut());
                setOpen(false);
              }}>
              <ImgContainer>
                <Image source={MenuIcon1} />
                <ImgTitle>Profile</ImgTitle>
              </ImgContainer>
            </Pressable>
          )}
          <Pressable
            onPress={() => {
              RootNavigation.navigate('Home');
              setOpen(false);
            }}>
            <ImgContainer>
              <Image source={MenuIcon2} />
              <ImgTitle>Home</ImgTitle>
            </ImgContainer>
          </Pressable>
          {user && user.potentialAction.includes('creator') && (
            <Pressable
              onPress={() => {
                RootNavigation.navigate('CreatorDashboard');
                setOpen(false);
              }}>
              <ImgContainer>
                <Image source={MenuIcon2} />
                <ImgTitle>Dashboard</ImgTitle>
              </ImgContainer>
            </Pressable>
          )}
          {user &&
            !user.potentialAction.includes('creator') &&
            !user.potentialAction.includes('guest') && (
              <Pressable
                onPress={() => {
                  RootNavigation.navigate('MyFavorites');
                  setOpen(false);
                }}>
                <ImgContainer>
                  <Image source={MenuIcon3} />
                  <ImgTitle>Favorites</ImgTitle>
                </ImgContainer>
              </Pressable>
            )}

          {user && !user?.potentialAction.includes('guest') ? (
            <Pressable
              onPress={() => {
                RootNavigation.navigate('Login');
                dispatch(LogOut());

                setOpen(false);
              }}>
              <ImgContainer>
                <Image source={MenuIcon3} />
                <ImgTitle>Log out</ImgTitle>
              </ImgContainer>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                RootNavigation.navigate('Login');
                setOpen(false);
              }}>
              <ImgContainer>
                <Image source={MenuIcon3} />
                <ImgTitle>Login</ImgTitle>
              </ImgContainer>
            </Pressable>
          )}
        </ContainerSection>
        <Title>RESOURCES</Title>
        <Line />
        <ContainerSection2>
          <SectionText style={{marginBottom: 40}}>TRACK YOUR ORDER</SectionText>
          <SectionText style={{fontWeight: 'bold'}}>INFORMATION</SectionText>
          <SectionText>BECOME A CREATOR</SectionText>
          <SectionText style={{marginBottom: 40}}>
            HOW TO SHOP GRANDEST
          </SectionText>
          <SectionText style={{fontWeight: 'bold'}}>CUSTOMER CARE</SectionText>
          <SectionText>FAQ | KNOWLEDGE CENTER</SectionText>
          <SectionText>CONTACT SUPPORT</SectionText>
          <SectionText>1 (888) 555-1212</SectionText>
          <SectionText>REPORT CONTENT</SectionText>
        </ContainerSection2>
        <Title>LEGAL</Title>
        <Line />
        <ContainerSection2>
          <SectionText>TERMS OF USE</SectionText>
          <SectionText>PRIVACY POLICY</SectionText>
          <SectionText style={{marginBottom: 50}}>
            PRIVACY FOR CALIFORNIA CONSUMERS
          </SectionText>
          <SectionText style={{fontSize: 11}}>
            © 2022 Grandest, Inc. All Rights Reserved.
          </SectionText>
        </ContainerSection2>
      </Container>
    </ScrollView>
  );
};

export default Menu;
