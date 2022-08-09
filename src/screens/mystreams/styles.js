import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
export const Container = styled.View``;

export const ContainerCard = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const ContainerInfoCard = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;
`;
export const ContainerBrowseSchedule = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;

export const Title = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  width: 100px;
  color: #000000;
`;

export const ContainerImage = styled.View`
  background: #ffffff;
  elevation: 15;
  shadow-color: black;
  shadow-opacity: 1;
  shadow-radius: 3;
  padding: 10px;
  margin-right: 10px;
  border-radius: 20px;
`;

export const LiveSoon = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #6667ab;
`;

export const Name = styled.Text`
  font-family: 'Arial';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;

  color: #000000;
`;
export const SubTitle = styled.Text`
  font-family: 'Times New Roman';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  width: 210px;
  color: #4d4d4d;
`;

export const Button = styled.Pressable`
  background: #6667ab;
  border-radius: 20px;
  padding: 10px 40px;
  margin-top: 30px;
`;

export const Line = styled.View`
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  width: 90%;
  padding: 0px;
  margin: 10px 0px;
  align-self: center;
`;

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
