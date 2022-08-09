import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  padding: 10px;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerUploadImage = styled.View``;
export const ContainerInputs = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const UploadContainer = styled.View`
  position: relative;
  top: -40px;
  left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7844a2;
  border: 4px solid white;
  padding: 5px;
  border-radius: 20px;
  width: 40px;
  height: 40px;
`;

export const Title = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 22px;
  color: #000000;
`;

export const AddAdress = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 11px;
  line-height: 13px;

  text-align: right;
  text-transform: uppercase;

  color: #7844a1;
`;

export const ContainerTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AddressContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Name = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  color: #000000;
`;

export const AddressText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  margin-top: 10px;
  font-size: 11px;
  line-height: 13px;

  color: #353636;
`;
export const Line = styled.View`
  border-bottom-color: #c6c5c5;
  border-bottom-width: 1px;
  width: 100%;
  padding: 0px;
  margin: 20px 0px;
`;

export const CheckBox = styled.Pressable`
  width: 30px;
  height: 30px;
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
  width: 15px;
  height: 15px;
`;
