import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  padding: 10px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 4mm ridge rgba(211, 220, 50, 0.6);
`;
export const InputSubtitle = styled.TextInput`
  width: 100%;
  color: white;
  padding: 5px 10px;
  height: 84px;
  background: black;
  border-radius: 3px;
  margin-top: 10px;
  text-align-vertical: top;
  border: 1px solid gray;
`;

export const ContainerUploadImage = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContainerEditImage = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerTextArea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ContainerData = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0px;
  height: 25px;
`;
export const ContainerEdit = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  postition: relative;
  left: 70;
  top: 50;
`;

export const NameText = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;

export const EditText = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: -0.333333px;

  color: #b18be4;
`;

export const CreatorText = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  text-align: center;

  color: #c4c4c4;
`;
export const TitleText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* or 150% */

  color: #989898;
`;
export const DataText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  /* identical to box height, or 75% */

  color: #ffffff;
`;
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
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  letter-spacing: 2px;

  color: #ffffff;
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
