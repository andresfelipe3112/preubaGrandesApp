import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;

  background-color: #ececec;
`;

export const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const InfoCardContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 10px;
`;

export const PriceButtonsCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`;

export const ButtonsCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  margin: 0px 20px 0px 0px;
`;

export const Name = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  color: #000000;
`;

export const Address = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  margin: 10px 0px;
  width: 150px;
  color: #353636;
`;

export const Price = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;

  color: #000000;
`;

export const Line = styled.View`
  border-bottom-color: #c6c5c5;
  border-bottom-width: 1px;
  width: 100%;
  padding: 0px;
  margin: 20px 0px;
`;
