import styled from 'styled-components/native';
export const ContainerCard = styled.View`
  width: 140px;
  margin-top: 10px;
  margin-right: 14px;
`;
export const ContainerText = styled.View`
  top: ${props => (props.isLive ? '-12px' : '0px')};
`;

export const NameText = styled.Text`
  color: #6667ab;
  font-size: 10px;
  font-family: 'Montserrat-Regular';
`;
export const TitleText = styled.Text`
  color: ${props => (props.dark ? 'black' : 'white')};
  font-size: 16px;
  font-family: 'Roboto';
`;
export const Text = styled.Text`
  color: ${props => (props.dark ? '#4D4D4D' : '#bbbbbb')};
  font-size: 12px;
  font-family: 'Roboto';
`;
export const NotifyText = styled.Text`
  position: relative;
  left: 10px;
  top: -205px;
  color: white;
  background-color: #ffffff;
  border-radius: 30px;
  color: black;
  font-size: 9px;
  width: 60px;
  text-align: center;
  padding: 2px;
`;
export const ImageLive = styled.Image`
  position: relative;
  left: 60%;
  top: -220px;
`;
