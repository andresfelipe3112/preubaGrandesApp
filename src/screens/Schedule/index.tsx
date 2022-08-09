import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

import {Container, ContainerScrollView, Button, TittleButton} from './styles';
export default function MyStreams({navigation}: {navigation: any}) {
  let actualDate = new Date().toISOString().split('T')[0];
  const [actualyDate, setActualyDate] = useState(actualDate);

  let nextMonth = (((new Date().getMonth() + 1) % 12) + 1).toString();
  nextMonth = nextMonth.length === 1 ? `0${nextMonth}` : nextMonth;

  const changeDate = () => {
    let month: any = Number(actualyDate[5] + actualyDate[6]);
    month = month + 1 <= 10 ? `0${month + 1}` : `${month + 1}`;
    let newdate =
      actualyDate.substring(0, 5) +
      month +
      actualyDate.substring(7, actualyDate.length);
    setActualyDate(newdate);
  };

  useEffect(() => {}, [actualyDate]);

  return (
    <ContainerScrollView>
      <Container>
        <Calendar
          current={actualyDate}
          hideArrows={true}
          markedDates={{
            '2022-06-20': {
              selected: true,
              marked: true,
              textColor: 'white',
              selectedColor: '#6667AB',
            },
          }}
          style={{
            borderWidth: 1,
            height: 350,
          }}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: 'black',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: 'red',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#343233',
            todayTextColor: '#6667AB',
            dayTextColor: 'white',
            textDisabledColor: '#343233',
            arrowColor: 'white',
            monthTextColor: 'white',
            indicatorColor: '#343233',
            textDayFontFamily: 'Roboto-Regular',
            textMonthFontFamily: 'Roboto-Regular',
            textDayHeaderFontFamily: 'Roboto-Regular',
            textDayFontWeight: 'bold',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
        <Calendar
          onMonthChange={() => changeDate()}
          current={`2022-${nextMonth}-01`}
          renderArrow={direction => {
            if (direction === 'left') {
              return (
                <View
                  style={{
                    position: 'relative',
                    left: -40,
                    top: -40,
                  }}>
                  <Text style={{color: 'white', fontSize: 40}}>‹</Text>
                </View>
              );
            } else {
              return (
                <View
                  style={{
                    position: 'relative',
                    right: -40,
                    top: -40,
                  }}>
                  <Text style={{color: 'white', fontSize: 40}}>›</Text>
                </View>
              );
            }
          }}
          style={{
            backgroundColor: 'black',
            height: 390,
          }}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: 'black',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: 'red',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#343233',
            todayTextColor: '#6667AB',
            dayTextColor: 'white',
            textDisabledColor: '#343233',
            arrowColor: 'white',
            monthTextColor: 'white',
            indicatorColor: '#343233',
            textDayFontFamily: 'Roboto-Regular',
            textMonthFontFamily: 'Roboto-Regular',
            textDayHeaderFontFamily: 'Roboto-Regular',
            textDayFontWeight: 'bold',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 10,
          }}
        />
        <Button onPress={() => navigation.navigate('WheelTime')}>
          <TittleButton>NEXT</TittleButton>
        </Button>
      </Container>
    </ContainerScrollView>
  );
}
