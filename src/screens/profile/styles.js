import styled from 'styled-components/native';
export const ContainerCard = styled.View`
  width: 90%;
  background-color: white;
  border-radius: 9px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px;
  margin-bottom: 20px;
`;
export const ContainerVerifyEdit = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Name = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: black;
`;
export const EditButton = styled.Pressable`
  background-color: #7844a1;
  border-radius: 20px;
  padding: 8px;
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerVerify = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const ContainerCardImgData = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const ContainerCardData = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;
`;

export const Container = styled.View`
  height: 100%;
  padding: 10px;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AcordeonSection = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Line = styled.View`
  border-bottom-color: #c6c5c5;
  border-bottom-width: 1px;
  width: 90%;
  padding: 0px;
  margin: 10px 0px;
`;
