import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  padding: 10px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 4mm ridge rgba(211, 220, 50, 0.6);
`;
export const BoxContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 14px 0px;
`;

export const BoxCardContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 17px;
  background: #7844a1;
  border-radius: 8px;
  width: 100px;
  height: 100px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
  text-align: center;

  color: #ffffff;
`;

export const SubTitle = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  width: 327px;
  height: 41px;
  background: #eeeeee;
  border-radius: 10px;
  margin: 17px 0px 20px 0px;
`;

export const Button = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 35px;
  background: ${props => (props.selected ? '#7844A1' : '#eeeeee')};
  border-radius: 10px;
`;
export const TextButton = styled.Text`
  text-align: center;
  color: ${props => (props.selected ? 'white' : 'black')};
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

export const FiltersContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px 20px 0px;
  width: 100%;
  padding: 0px 20px;
`;

export const FilterButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 14px;
  border: ${props =>
    props.selected ? '1px solid #B18BE4' : '1px solid #d6d6d6'};

  background: ${props => (props.selected ? 'rgba(222, 149, 6, 0.1)' : 'black')};
  border-radius: 10px;
`;
export const FilterText = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;

  text-align: center;
  letter-spacing: -0.333333px;

  color: ${props => (props.selected ? '#B18BE4' : '#d6d6d6')};
`;
export const ContainerTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  padding: 0px 15px;
  width: 100%;
`;

export const TitlePerformance = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;

  letter-spacing: -0.333333px;

  color: #ffffff;
`;
export const DateText = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  color: #ffffff;
`;

export const ContainerData = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: 10px 0px;
  padding: 0px 25px;
  width: 100%;
`;

export const CardInfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 8px 0px;
`;

export const TextTitle = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: black;
`;

export const TextInfo = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 15px;

  color: black;
`;
