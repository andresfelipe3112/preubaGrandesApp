import React, {useState} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import FilterSlide from '../../assets/FilterSlide.png';
import ImgFilter from '../../assets/HomeSlider.png';
import {
  ContainerPagination,
  Title,
  SubTitle,
  Button,
  ButtonText,
  ContainerText,
  Image,
  Pagination,
} from './styles';

export default function HomeScreen() {
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const {width, height} = Dimensions.get('window');

  const setSliderPage = (event: any) => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const {currentPage: pageIndex} = sliderState;
  return (
    <View style={{flex: 1}}>
      <ScrollView
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event: any) => {
          setSliderPage(event);
        }}>
        {Array.from(Array(5).keys()).map(key => {
          return (
            <View
              key={key}
              style={{
                width,
                height,
              }}>
              <Image source={ImgFilter} />
              <Image source={FilterSlide} />
              <ContainerText>
                <Title>Ashley Benson talks Skincare</Title>
                <SubTitle>
                  10 products she uses in her daily routine and why.
                </SubTitle>
                <Button>
                  <ButtonText>JOIN STREAM</ButtonText>
                </Button>
              </ContainerText>
            </View>
          );
        })}
      </ScrollView>
      <ContainerPagination>
        {Array.from(Array(5).keys()).map((key, index) => {
          return <Pagination pageIndex={pageIndex} index={index} key={index} />;
        })}
      </ContainerPagination>
    </View>
  );
}
