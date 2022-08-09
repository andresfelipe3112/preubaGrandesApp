import styled from 'styled-components/native';
export const Container = styled.View`
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: none;
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  color: #ffffff;
`;

export const ImgTitle = styled.Text`
  font-family: 'Montserrat-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  margin-left: 10px;
`;
export const Line = styled.View`
  border-bottom-color: rgba(255, 255, 255, 0.5);
  border-bottom-width: 1px;
  width: 100%;
  padding: 0px;
  margin: 10px 0px;
`;

export const ContainerSection = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 150px;
  margin-bottom: 20px;
`;
export const ImgContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const SectionText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  margin: 2px 0px;

  color: #ffffff;
`;
export const ContainerSection2 = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const CloseMenu = styled.Image`
  position: relative;
  left: 300px;
  top: -10px;
`;
