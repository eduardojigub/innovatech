import { User } from '@interfaces/user';
import {
  CardContainer,
  UserDetails,
  UserDetailsContainer,
  UserImage,
  UserInfo,
  UserName,
} from './styles';

interface CardProps {
  data: User;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <CardContainer>
      <UserImage source={{ uri: data.picture.large }} />
      <UserInfo>
        <UserName>{`${data.name.title} ${data.name.first} ${data.name.last}`}</UserName>
        <UserDetailsContainer>
          <UserDetails>{data.gender} </UserDetails>
          <UserDetails>
            {new Date(data.dob.date).toLocaleDateString()}
          </UserDetails>
        </UserDetailsContainer>
      </UserInfo>
    </CardContainer>
  );
};

export default Card;
