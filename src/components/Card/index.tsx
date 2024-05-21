import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { User } from '@interfaces/user';
import UserModal from '@components/UserModal';
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
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <CardContainer>
          <UserImage source={{ uri: data.picture.large }} />
          <UserInfo>
            <UserName>{`${data.name.first} ${data.name.last}`}</UserName>
            <UserDetailsContainer>
              <UserDetails>{data.gender} </UserDetails>
              <UserDetails>
                {new Date(data.dob.date).toLocaleDateString()}
              </UserDetails>
            </UserDetailsContainer>
          </UserInfo>
        </CardContainer>
      </TouchableOpacity>
      <UserModal
        visible={modalVisible}
        user={data}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default Card;
