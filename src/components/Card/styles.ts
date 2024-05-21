import styled from "styled-components/native";

export const CardContainer = styled.View`
  background-color: #fff;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  flex-direction: row;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const UserDetailsContainer = styled.View`
  flex-direction: row;
  margin-top: 4px;
  justify-content: space-between;
`;

export const UserDetails = styled.Text`
  font-size: 14px;
  color: #555;
`;

export const UserImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;