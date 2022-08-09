import React, {useState} from 'react';

import TimePicker from 'react-native-wheel-time-picker';
import {useMemo} from 'react';

const MILLISECONDS_PER_MINUTE = 60 * 1000;
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;
const MILLISECONDS_PER_DAY = 24 * MILLISECONDS_PER_HOUR;

import {
  ContainerWheel,
  ContainerScrollView,
  Button,
  TittleButton,
} from './styles';
export default function WheelTime({navigation}: {navigation: any}) {
  const [timeValue, setTimeValue] = useState(Date.now() % MILLISECONDS_PER_DAY);
  const [hour, min] = useMemo(() => {
    return [
      Math.floor(timeValue / MILLISECONDS_PER_HOUR),
      Math.floor((timeValue % MILLISECONDS_PER_HOUR) / MILLISECONDS_PER_MINUTE),
      Math.floor((timeValue % MILLISECONDS_PER_MINUTE) / 1000),
    ];
  }, [timeValue]);
  return (
    <ContainerScrollView>
      <ContainerWheel>
        <TimePicker
          value={timeValue}
          containerStyle={{height: 600}}
          wheelProps={{
            wheelHeight: 480,
            itemHeight: 60,
            selectedColor: 'white',
            containerStyle: {
              height: 450,
              width: 90,
            },
            textStyle: {
              fontSize: 30,
            },
            displayCount: 11,
          }}
          onChange={newValue => setTimeValue(newValue)}
        />
        <Button onPress={() => navigation.navigate('ConfirmSchedule')}>
          <TittleButton>NEXT</TittleButton>
        </Button>
      </ContainerWheel>
    </ContainerScrollView>
  );
}
