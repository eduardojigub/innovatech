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
import ListEmptyComponent from '@components/EmptyListComponent';

export default function MainScreen() {
  const { users, currentPage, setCurrentPage, setUsers } = useUserContext();
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [nameFilter, setNameFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);
  const [isInputFilterActive, setIsInputFilterActive] = useState(false);
  const [isEndReachedLoading, setIsEndReachedLoading] = useState(false); // New state

  useEffect(() => {
    filterUsers();
  }, [users, nameFilter, genderFilter]);

  useEffect(() => {
    if (nameFilter.length > 0 || genderFilter.length > 0) {
      setIsInputFilterActive(true);
    } else {
      setIsInputFilterActive(false);
    }
  }, [nameFilter, genderFilter]);

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
    if (isLoadingMore || isEndReachedLoading) return;
    try {
      setIsEndReachedLoading(true);
      setIsLoadingMore(true);
      setTimeout(async () => {
        const nextPageUsers = await fetchUsers(currentPage + 1);
        setCurrentPage(currentPage + 1);
        setUsers((prevUsers) => [...prevUsers, ...nextPageUsers]);
        setIsEndReachedLoading(false);
        setIsLoadingMore(false);
      }, 3000); // 3 seconds delay to meet requirements,
    } catch (error) {
      console.error('Error fetching more users:', error);
      setIsEndReachedLoading(false);
      setIsLoadingMore(false);
    }
  };

  //link for the solution https://stackoverflow.com/questions/47910127/flatlist-calls-onendreached-when-its-rendered
  const onEndReached = () => {
    if (!onEndReachedCalledDuringMomentum) {
      !isInputFilterActive && loadMoreUsers();
      !isInputFilterActive && setOnEndReachedCalledDuringMomentum(true);
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
        data={isInputFilterActive ? filteredUsers : users}
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
        ListEmptyComponent={<ListEmptyComponent />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        onMomentumScrollBegin={() => setOnEndReachedCalledDuringMomentum(false)}
      />
    </Container>
  );
}
