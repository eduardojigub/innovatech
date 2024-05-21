import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { fetchUsers } from '../utils/api';
import { User } from '@interfaces/user';

interface IUserContext {
  users: User[];
  fetchUserData: (page: number) => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  const fetchUserData = async (page: number) => {
    try {
      const fetchedUsers = await fetchUsers(page);
      if (page === 1) {
        // If fetching the first page, replace existing users
        setUsers(fetchedUsers);
      } else {
        // If fetching subsequent pages, append new users to existing users
        setUsers((prevUsers) => [...prevUsers, ...fetchedUsers]);
      }
      setCurrentPage(page); // Update the current page
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUserData(currentPage); // Fetch data for the initial page
  }, []);

  return (
    <UserContext.Provider value={{ users, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
