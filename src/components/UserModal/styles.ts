import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ModalContent = styled.View`
  background-color: #f5f5f5;
  padding: 20px;
  height: 75%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ModalHeader = styled.View`
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-bottom: 10px;
`;

export const UserDetails = styled.Text`
  margin-bottom: 5px;
`;

export const CloseButtonContainer = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const CloseButton = styled.Text`
  color: white;
  font-weight: bold;
  background-color: #3498db;
  padding: 10px 20px;

`;