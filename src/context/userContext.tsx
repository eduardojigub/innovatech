import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { fetchUsers } from '../utils/api';
import { User } from '@interfaces/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IUserContext {
  users: User[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  fetchUserData: (page: number) => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  const fetchUserData = async (page: number) => {
    try {
      const fetchedUsers = await fetchUsers(page);
      setUsers((prevUsers) => [...prevUsers, ...fetchedUsers]);
      setCurrentPage(page);
      if (page === 1) {
        // Store data in localStorage if page is 1 as requirement
        AsyncStorage.setItem('cachedUserData', JSON.stringify(fetchedUsers));
        console.log('Data stored in AsyncStorage:', fetchedUsers);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Initial fetch on mount
  useEffect(() => {
    const fetchCachedUserData = async () => {
      try {
        const cachedUserData = await AsyncStorage.getItem('cachedUserData');
        if (cachedUserData !== null && currentPage === 1) {
          // If cached data exists and page is 1, use cached data
          setUsers(JSON.parse(cachedUserData));
        } else {
          // Otherwise, fetch data from the API
          fetchUserData(currentPage);
        }
      } catch (error) {
        console.error('Error fetching cached user data:', error);
      }
    };

    fetchCachedUserData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        fetchUserData,
        currentPage,
        setCurrentPage,
        setUsers,
      }}
    >
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
