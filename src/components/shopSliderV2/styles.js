import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
`;
export const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const CardContainerInfo = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 20px;
  align-self: center;
`;
export const Name = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  /* identical to box height */

  letter-spacing: 2px;

  color: #000000;
`;
export const Description = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  /* or 18px */

  color: #000000;
`;

export const PriceContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
  width: 100px;
`;
export const TextPrice = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;

  color: #989898;
`;
export const Price = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;

  color: #000000;
`;

export const PressableBlack = styled.Pressable`
  width: 100px;
  background-color: black;
  padding: 3px 20px;
  border-radius: 20px;
  margin-right: 10px;
`;
export const PressablePurple = styled.Pressable`
  width: 100px;
  background-color: #7844a1;
  padding: 3px 20px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const PressableText = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  text-align: center;

  color: #ffffff;
`;

export const Line = styled.View`
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  width: 110%;
  padding: 0px;
  left: -10px;
  margin: 20px 0px;
`;
