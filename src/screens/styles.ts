import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f0f0;
  padding: 10px;
`;

export const UserList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingBottom: 10,
  },
})`
  flex: 1;
`;

export const LoadMoreContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const LoadMoreText = styled.Text`
  font-size: 16px;
  color: black;
  margin-top: 10px;
`;

export const LoadMoreActivityIndicator = styled.ActivityIndicator`
  margin-top: 10px;
  color: #00008b;
`;