import styled from 'styled-components/native';

export const Container = styled.View``;
export const ContainerText = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleSection = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  margin-top: 20px;
  padding: 0px 10px 10px 10px;

  letter-spacing: 2px;

  color: #000000;
`;

export const Line = styled.View`
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  width: 110%;
  padding: 0px;
  left: -10px;
`;
