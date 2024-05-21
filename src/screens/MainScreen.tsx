import React, { useState, useEffect } from 'react';
import { useUserContext } from '@context/userContext';
import Card from '../components/Card';
import Header from '../components/Header';
import {
  Container,
  LoadMoreActivityIndicator,
  LoadMoreContainer,
  LoadMoreText,
  UserList,
} from './styles';
import { User } from '@interfaces/user';
import { fetchUsers } from '@utils/api';

export default function MainScreen() {
  const { users } = useUserContext();
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [nameFilter, setNameFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);

  useEffect(() => {
    filterUsers();
  }, [users, nameFilter, genderFilter]);

  const handleFilterName = (name: string) => {
    setNameFilter(name);
  };

  const handleFilterGender = (gender: string) => {
    setGenderFilter(gender);
  };

  const handleReset = () => {
    setNameFilter('');
    setGenderFilter('');
  };

  const filterUsers = () => {
    let filtered = users;

    if (nameFilter) {
      filtered = filtered.filter((user) =>
        `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`.includes(
          nameFilter.toLowerCase()
        )
      );
    }

    if (genderFilter) {
      filtered = filtered.filter(
        (user) => user.gender.toLowerCase() === genderFilter.toLowerCase()
      );
    }

    setFilteredUsers(filtered);
  };

  const loadMoreUsers = async () => {
    try {
      setIsLoadingMore(true);
      setTimeout(async () => {
        const nextPageUsers = await fetchUsers(page + 1);
        setPage(page + 1);
        setFilteredUsers((prevUsers) => [...prevUsers, ...nextPageUsers]);
        setIsLoadingMore(false);
      }, 2000); // 2 seconds delay to simulate loading and achieve one of the requirements
    } catch (error) {
      console.error('Error fetching more users:', error);
      setIsLoadingMore(false);
    }
  };

  //solução retirada de https://stackoverflow.com/questions/47910127/flatlist-calls-onendreached-when-its-rendered
  const onEndReached = ({ distanceFromEnd }: any) => {
    if (!onEndReachedCalledDuringMomentum) {
      loadMoreUsers();
      setOnEndReachedCalledDuringMomentum(true);
    }
  };

  return (
    <Container>
      <Header
        onFilterName={handleFilterName}
        onFilterGender={handleFilterGender}
        onReset={handleReset}
      />
      <UserList
        data={filteredUsers}
        keyExtractor={(item: User) => item.login.uuid}
        renderItem={({ item }: { item: User }) => <Card data={item} />}
        ListFooterComponent={
          isLoadingMore ? (
            <LoadMoreContainer>
              <LoadMoreActivityIndicator size="large" color="blue" />
              <LoadMoreText>Carregando Mais...</LoadMoreText>
            </LoadMoreContainer>
          ) : null
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => setOnEndReachedCalledDuringMomentum(false)}
      />
    </Container>
  );
}
