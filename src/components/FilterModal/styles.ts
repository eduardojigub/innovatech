import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #f8f8f8;
`;

export const HeaderTitleContainer = styled.View`
  flex: 1;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const FiltersContainer = styled.View`
  flex: 2;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-right: 10px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;

export const HeaderButton = styled.Button`
  margin-left: 10px;
`;

// Modal styles
export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

export const ModalTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    `;

export const ViewAndroidButtonSeparator = styled.View`
  ${Platform.OS === 'android' && 'margin-top: 4px;'}
`;