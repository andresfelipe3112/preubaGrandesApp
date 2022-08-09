import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerPending = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 20px 20px 20px;
  background: #7844a1;
  border-radius: 10px;
  width: 90%;
  margin-top: 10px;
`;

export const TitlePending = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 3px;
  color: #ffffff;
`;

export const Description = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  /* or 147% */
  margin-top: 10px;
  letter-spacing: 3px;

  color: #ffffff;
`;
export const Porcentaje = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  /* or 147% */
  margin-top: 10px;
  padding-bottom: 12px;
  letter-spacing: 3px;
  color: #ffffff;
`;
export const ContainerProgressBar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ContainerButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

export const ContainerFlexRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  align-self: flex-start;
`;
export const ContainerFlexRowNext = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 6px;
`;
export const ContainerFlexRowInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-top: 14px;
  padding: 20px;
  width: 90%;
`;
export const ContainerData = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Data1 = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  /* identical to box height */

  letter-spacing: -0.333333px;

  color: #000000;
`;
export const Data2 = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.333333px;

  color: #7844a1;
`;
export const Data3 = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: -0.333333px;

  color: #9b9b9b;
`;
export const ContainerInfo = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 15px;
`;

export const TimeContainer = styled.View`
  background: #6667ab;
  border-radius: 9px;
  padding: 0px 10px;
  margin-left: 10px;
`;
export const Time = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 20px;
  /* or 182% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 2px;

  color: #ffffff;
`;
export const ButtonNext = styled.Pressable`
  background: rgba(222, 149, 6, 0.1);
  border: 1px solid #b18be4;
  border-radius: 10px;
  padding: 2px 10px;
`;

export const TextNext = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.333333px;

  color: #b18be4;
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
  color: #989898;
`;
export const DataText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
`;

export const ButtonPending = styled.Pressable`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

export const ContainerImg = styled.View`
  background: white;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2px 10px;
`;
export const ContainerText = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
export const TitleButton = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: -0.333333px;

  color: #ffffff;
`;
export const DescriptionButton = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: -0.333333px;

  color: #ffffff;
`;
export const PendingStreamsTitle = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  letter-spacing: 2px;

  color: #ffffff;
`;
export const ContainerTitle = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0px 7px 0px;
`;
export const CounterStreams = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  text-align: right;
  letter-spacing: -0.333333px;

  color: #ffffff;
`;
