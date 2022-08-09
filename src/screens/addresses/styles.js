import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  height: 100%;
  background-color: #ececec;
`;
export const Title = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 22px;
  margin: 15px 0px;
  color: #000000;
`;
export const CardContainer = styled.View`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoCardContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 300px;
`;

export const PriceButtonsCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`;

export const Address = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  width: 240px;
  margin: 10px 0px;
  color: #353636;
`;

export const Phone = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #353636;
`;

export const CheckBox = styled.Pressable`
  width: 23px;
  height: 23px;
  padding: 5px;
  border-radius: 20px;
  border-color: 'black';
  border-width: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Checked = styled.View`
  background-color: black;
  border-radius: 20px;
  width: 12px;
  height: 12px;
`;
