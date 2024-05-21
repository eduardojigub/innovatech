import React, { useState, useEffect } from 'react';
import { useUserContext } from '@context/userContext';
import Card from '../components/Card';
import Header from '../components/Header';
import { Container, UserList } from './styles';
import { User } from '@interfaces/user';

export default function MainScreen() {
  const { users } = useUserContext();
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [nameFilter, setNameFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

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
      />
    </Container>
  );
}
