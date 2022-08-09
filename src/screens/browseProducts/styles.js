import styled from 'styled-components/native';
export const ContainerScrollView = styled.ScrollView`
  background-color: white;
  height: 100%;
  padding: 10px;
`;

export const ContainerCard = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`;

export const ContainerCardInfo = styled.Pressable`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 10px 10px;
  align-self: flex-start;
  height: 100px;
`;

export const Brand = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 11px;
  letter-spacing: 2px;
  color: #000000;
`;
export const Name = styled.Text`
  font-family: 'Arial';
  font-size: 15px;
  margin: 3px 0px;
  letter-spacing: 2px;
  color: #000000;
`;
export const Price = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #000000;
`;
export const Button = styled.Pressable`
  background: #6667ab;
  border-radius: 5px;
  padding: 8px 0;
  margin-top: 8px;
  width: 150px;
  align-self: center;
`;
export const TittleButton = styled.Text`
  color: white;
  text-align: center;
  font-family: 'Arial';
  font-size: 12px;
  line-height: 16px;
  align-self: center;
  letter-spacing: 2px;
`;
export const HeaderContainer = styled.View`
  display: flex;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px;
`;

export const HeaderContainerRight = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
