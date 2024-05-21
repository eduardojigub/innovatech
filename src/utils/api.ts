import { User } from "@interfaces/user";

  
  export const fetchUsers = async (page: number): Promise<User[]> => {
    try {
      const response = await fetch(`https://randomuser.me/api/?page=${page}&results=20&seed=eduardobrunov1`);
      if (!response.ok) //boolean que indica se a resposta foi bem sucedida (status 200-299) ou não. 
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
  