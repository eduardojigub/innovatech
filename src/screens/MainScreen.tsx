import { useUserContext } from '@context/userContext';
import { Container, UserList } from './styles';
import Card from '@components/Card';
import { User } from '@interfaces/user';

export default function MainScreen() {
  const { users } = useUserContext();
  return (
    <Container>
      <UserList
        data={users}
        keyExtractor={(item: any) => item.login.uuid}
        renderItem={({ item }: { item: User }) => <Card data={item} />}
      />
    </Container>
  );
}
