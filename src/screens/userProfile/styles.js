import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const Image = styled.Image`
  width: 100%;
`;

export const ContainerSlidShop = styled.View`
  top: -50px;
`;

export const ImageGoBack = styled.Image`
  position: relative;
  width: 20px;
  top: -400px;
  left: 10px;
`;
export const Title = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  letter-spacing: 1px;
  padding: 0px 20px;
  color: #000000;
`;
export const ContainerInfo = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: -100px;
`;
export const Name = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  text-align: center;
  letter-spacing: 7px;

  color: #ffffff;
`;
export const Followers = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 5px;

  color: #ffffff;
`;

export const Button = styled.Pressable`
  background: #6667ab;
  border-radius: 20px;
  padding: 10px 40px;
  width: 200px;
  position: relative;
  top: -80px;
  align-self: center;
`;

export const TextButton = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 2px;

  color: #ffffff;
`;
