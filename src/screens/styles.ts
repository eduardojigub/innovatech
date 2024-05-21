import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
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