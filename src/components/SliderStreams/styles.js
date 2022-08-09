import styled from 'styled-components/native';
export const ContainerTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text`
  text-transform: uppercase;
  font-size: 13px;
  color: ${props => (props.dark ? 'black' : 'white')};

  font-weight: bold;
  font-family: 'Montserrat-Regular';
`;
export const SeeAll = styled.Text`
  font-size: 13px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #b18be4;
`;
