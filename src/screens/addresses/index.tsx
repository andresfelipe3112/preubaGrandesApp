import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
  Container,
  CardContainer,
  InfoCardContainer,
  Name,
  Address,
  Phone,
  Title,
  CheckBox,
  Checked,
} from './styles';

export default function OrderHistory() {
  const [isChecked, setIsChecked] = React.useState(false);

  let arr = [
    {
      name: 'Niko Sgro',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      phone: '(+1) 660-258-7822',
      isChecked: true,
    },

    {
      name: 'Niko Sgro',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      phone: '(+1) 660-258-7822',
      isChecked: false,
    },
    {
      name: 'Niko Sgro',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      phone: '(+1) 660-258-7822',
      isChecked: false,
    },
    {
      name: 'Niko Sgro',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      phone: '(+1) 660-258-7822',
      isChecked: false,
    },
    {
      name: 'Niko Sgro',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      phone: '(+1) 660-258-7822',
      isChecked: false,
    },
    {
      name: 'Niko Sgro',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      phone: '(+1) 660-258-7822',
      isChecked: false,
    },
    {
      name: 'Niko Sgro',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      phone: '(+1) 660-258-7822',
      isChecked: false,
    },

    {
      name: 'Niko Sgro',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      phone: '(+1) 660-258-7822',
      isChecked: false,
    },
  ];
  const [data, setData] = useState(arr);
  return (
    <ScrollView>
      <Container>
        <Title>Addresses</Title>
        {data.map(e => {
          return (
            <>
              <CardContainer>
                <InfoCardContainer>
                  <Name>{e.name}</Name>
                  <Address>{e.address}</Address>
                  <Phone>{e.phone}</Phone>
                </InfoCardContainer>
                <CheckBox
                  onPress={() => {
                    setIsChecked(!isChecked);
                  }}>
                  {e.isChecked ? <Checked /> : null}
                </CheckBox>
              </CardContainer>
            </>
          );
        })}
      </Container>
    </ScrollView>
  );
}
