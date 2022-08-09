import React, {useEffect, useState} from 'react';
import {ImageSourcePropType, Pressable, ScrollView, View} from 'react-native';
import {ContainerTitle, Title, SeeAll} from './styles';
import Card from '../Card/Card';
import CardMosaico from '../CardMosaico';
import {LiveStream} from '../../Interfaces';
import {navigate} from '../../../RootNavigation';

interface Props {
  title: string;
  text: string;
  img: ImageSourcePropType;
  name: string;
  isLive?: boolean;
  listTitle?: string;
  option?: boolean;
  typeCard: string;
  dark?: boolean;
  data?: Array<LiveStream>;
  navigate?: (a: string, b: {}) => void;
}

export default function SliderSteams({
  img,
  name,
  listTitle,
  option,
  typeCard,
  dark,
  data,
}: Props) {
  const [renderData, setRenderData] = useState<LiveStream[]>([]);
  useEffect(() => {
    setRenderData(data ? data : []);
  }, [data]);

  return (
    <View
      style={{
        padding: 20,
      }}>
      <ContainerTitle>
        <Title dark={dark}>{listTitle}</Title>
        {option ? <SeeAll>See all</SeeAll> : null}
      </ContainerTitle>
      {typeCard === 'Slide' ? (
        <View style={{flex: 1}}>
          <ScrollView
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}>
            {renderData.map(key => {
              return (
                <Pressable
                  onPress={() => navigate('Streams', {state: {id: key._id}})}>
                  <Card
                    dark={dark}
                    key={key._id}
                    title={key.state}
                    text={key.description}
                    name={key.name}
                    isLive={key.state === 'playing' ? true : false}
                    img={img}
                  />
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      ) : (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingTop: 10,
          }}>
          {Array.from(Array(6).keys()).map((key, index) => {
            return (
              <CardMosaico name={name} isLive={index % 2 ? true : false} />
            );
          })}
        </View>
      )}
    </View>
  );
}
