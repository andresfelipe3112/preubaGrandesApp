import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {
  BoxCardContainer,
  BoxContainer,
  Button,
  ButtonsContainer,
  CardInfoContainer,
  Container,
  ContainerData,
  ContainerTitle,
  DateText,
  FilterButton,
  FiltersContainer,
  FilterText,
  SubTitle,
  TextButton,
  TextInfo,
  TextTitle,
  Title,
  TitlePerformance,
} from './styles.js';
export default function MyStatistics({navigation}: {navigation: any}) {
  const box = [
    {title: '25', subTitle: 'Streams'},
    {title: '124K', subTitle: 'Followers'},
    {title: '$121,300', subTitle: 'Revenue (USD)'},
  ];
  const screenWidth = Dimensions.get('window').width;
  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    useShadowColorFromDataset: true,
    fillShadowGradientToOffset: 1,
    propsForVerticalLabels: {fill: 'white'},
    propsForHorizontalLabels: {fill: 'white'},
    propsForBackgroundLines: {
      stroke: 'white',
      strokeWidth: 0.5,
      strokeDasharray: 1000,
    },
  };
  const data = {
    labels: ['28 June', '29 June', '30 June', '1 July', '2 July'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: () => `rgba(120, 68, 161, 0.7)`,
        strokeWidth: 2,
      },
    ],
  };
  const filterData = ['1 Week', '1 Month', '3 Month', '1 Year'];
  const dataInfo = [
    {title: 'Revenue', info: '$5,932.77'},
    {title: 'Products Sold', info: '18'},
    {title: 'Total Viewers', info: '347'},
    {title: 'Avg. Watch Time', info: '37.43 min'},
  ];
  return (
    <Container style={{borderTopColor: 'gray', borderTopWidth: 1}}>
      <BoxContainer>
        {box.map(ele => {
          return (
            <BoxCardContainer>
              <Title>{ele.title}</Title>
              <SubTitle>{ele.subTitle}</SubTitle>
            </BoxCardContainer>
          );
        })}
      </BoxContainer>
      <ButtonsContainer>
        <Button selected={true}>
          <TextButton selected={true}>Revenue</TextButton>
        </Button>
        <Button>
          <TextButton>Stream Views</TextButton>
        </Button>
      </ButtonsContainer>
      <FiltersContainer>
        {filterData.map((ele, index) => {
          return (
            <FilterButton selected={index === 0 ? true : false}>
              <FilterText selected={index === 0 ? true : false}>
                {ele}
              </FilterText>
            </FilterButton>
          );
        })}
      </FiltersContainer>
      <LineChart
        data={data}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        withDots={false}
        segments={2}
        withVerticalLines={false}
      />
      <ContainerTitle>
        <TitlePerformance>PERFORMANCE DETAILS</TitlePerformance>
        <DateText>30 June 2022</DateText>
      </ContainerTitle>
      <ContainerData>
        {dataInfo.map(ele => {
          return (
            <CardInfoContainer>
              <TextTitle>{ele.title}</TextTitle>
              <TextInfo>{ele.info}</TextInfo>
            </CardInfoContainer>
          );
        })}
      </ContainerData>
    </Container>
  );
}
