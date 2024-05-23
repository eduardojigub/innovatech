import { Button, TextInput, Platform } from "react-native";
import styled from "styled-components/native";


export const HeaderContainer = styled.View`
 
`;

export const HeaderTitleContainer = styled.View`
   align-items: center;
`;

export const FiltersContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #f8f8f8;
`

export const HeaderTitle = styled.Text`
   font-size: 20px;
   font-weight: bold;
   margin-top: ${Platform.OS === 'android' ? '40px' : '16px'};
`

export const Input = styled(TextInput)`
  flex: 2;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-right: 10px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const HeaderButton = styled(Button)`
  margin-left: 10px;
`;