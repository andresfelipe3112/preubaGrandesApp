
import styled from 'styled-components/native';
export const ContainerPagination = styled.View`
  position: absolute;
  bottom: 150px;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SubTitle = styled.Text`
  font-family: Roboto;
  font-weight: 300;
  width: 70%;
  font-size: 20px;
  line-height: 23px;
  color: white;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
 
`;
export const Title = styled.Text`
  font-family: Montserrat;
  font-weight: 500;
  paddingTop: 5;
  font-size: 25;
  line-height: 23;
  color: white;
  
`;
export const Button = styled.Pressable`
  background-color: #6667ab;
  border-radius: 20px;
  width: 165px;
  height: 36px;
`;
export const ButtonText = styled.Text`
  text-align: center;
  color: white;
  padding: 10px;
  font-family: Arial;
  font-weight: 100;
  text-transform: uppercase;
`;

export const ContainerText = styled.View`
  position: absolute;
  bottom: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  
`;

export const Image = styled.Image`
  height: 90%;
  width: 100%;
  position: absolute;
`;
export const Pagination = styled.View`
  opacity: ${props => (props.pageIndex === props.index ? 1 : 0.2)};
  height: 5px;
  width: 69px;
  border-radius: 2px;
  background-color: ${props =>
    props.pageIndex === props.index ? '#ED2BDA' : 'gray'};
  margin: 2px;
`;
