import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  height: 100%;
  padding: 30px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
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
  width: 150%;
  padding: 0px;
  margin: 20px 0px;
  left: -10px;
`;
export const Price = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  text-align: right;

  color: #000000;
`;

export const Title = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  color: #1a1a1a;
`;

export const Descripition = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height, or 117% */

  color: #636367;
`;

export const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15;
`;
export const InfoCardContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
`;
export const InfoTopCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 230px;
`;
export const InfoTopNameDescriptionCardContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const InfoBottomCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 230px;

  margin-top: 10px;
`;
export const ButtonCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70px;
`;
export const PressableCard = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: ${props => (props.disabledColor ? '#E5E5E5' : '#7844A1')};
`;
export const PressableCardText = styled.Text`
  color: white;
  font-size: 14;
  text-align: center;

  font-weight: bold;
`;
export const UseCode = styled.Pressable`
  background-color: #7844a1;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
export const ContainerFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.TextInput`
  background-color: #fafafa;
  width: 250px;
  padding: 10px;
  height: 50px;
`;

export const SectionContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  margin-top: 20px;
`;

export const ContainerFooter2 = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContinueCheckout = styled.Pressable`
  background-color: #7844a1;
  height: 50;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-radius: 25px;
  width: 280px;
  margin-top: 20px;
`;
