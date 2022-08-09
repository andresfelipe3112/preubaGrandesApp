import styled from 'styled-components/native';
export const ContainerScrollView = styled.ScrollView`
  background-color: black;
  height: 100%;
`;

export const Container = styled.View`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 60px;
`;

export const ContainerWheel = styled.View`
  padding: 0 20px;
  flex: 1;
  align-items: flex-start;
  height: 700px;
`;

export const ContainerConfirm = styled.View`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:40px
  height: 100%;
`;
export const ContainerInfo = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
export const ContainerData = styled.View`
  width: 140px;
`;
export const Name = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
  letter-spacing: 2px;
  color: #6667ab;
`;
export const Title = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  opacity: 0.3;
`;
export const Text = styled.Text`
  font-family: 'Times New Roman';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #aaaaaa;
  opacity: 0.3;
`;
export const UploadPhoto = styled.Pressable`
  width: 140px;
  height: 210px;
  background: #6667ab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;

export const UploadPhotoText = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 2px;
  color: #ffffff;
`;

export const ContainerInfo2 = styled.View`
  position: relative;
  bottom: ${props => (props.isInfo ? '-20px' : '-110px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
export const ButtonConfirm = styled.Pressable`
  background: #6667ab;
  border-radius: 20px;
  padding: 10px 40px;
  margin: 15px 0px;
  width: 145px;
`;

export const Button = styled.Pressable`
  background: #6667ab;
  border-radius: 20px;
  padding: 10px 40px;
  margin-top: 30px;
  width: 315px;
  align-self: center;
`;
export const TittleButton = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
  font-family: 'Arial';
  font-size: 14px;
  line-height: 16px;
  align-self: center;
  letter-spacing: 2px;
`;

export const TitleInput = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 4px;
  color: #ffffff;
`;

export const ContainerInput = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 40px;
`;

export const InputTitle = styled.TextInput`
  width: 325px;
  color: white;
  padding: 0px 10px;
  height: 42px;
  background: #101010;
  border-radius: 3px;
  margin-top: 10px;
`;
export const InputSubtitle = styled.TextInput`
  width: 325px;
  color: white;
  padding: 0px 10px;
  height: 84px;
  background: #101010;
  border-radius: 3px;
  margin-top: 10px;
  text-align-vertical: top;
`;
