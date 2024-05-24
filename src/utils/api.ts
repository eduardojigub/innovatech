import { User } from "@interfaces/user";

  
  export const fetchUsers = async (page: number): Promise<User[]> => {
    try {
      const response = await fetch(`https://randomuser.me/api/?page=${page}&results=20&seed=eduardobrunov1`);
      if (!response.ok) //boolean which indicantes if the response was successfull or no. 
        {
        throw new Error('Erro ao buscar usuários');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Erro ao buscar usuários', error);
      return [];
    }
  };
  