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
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;

  color: #000000;
`;
export const Description = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-size: 12px;
  line-height: 20px;

  color: #000000;
`;
export const Price = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;

  color: #000000;
`;

export const Line = styled.View`
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  width: 110%;
  padding: 0px;
  left: -10px;
  margin: 20px 0px;
`;
