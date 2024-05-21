import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { User } from '@interfaces/user';
import {
  CloseButton,
  CloseButtonContainer,
  ModalContainer,
  ModalContent,
  ModalHeader,
  UserDetails,
  UserImage,
} from './styles';

interface UserModalProps {
  visible: boolean;
  user: User | null;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ visible, user, onClose }) => {
  if (!user) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalContainer>
        <ModalContent>
          <ModalHeader>
            <UserImage source={{ uri: user.picture.large }} />
          </ModalHeader>
          <UserDetails>
            Nome completo: {`${user.name.first} ${user.name.last}`}
          </UserDetails>
          <UserDetails>Email: {user.email}</UserDetails>
          <UserDetails>Gênero: {user.gender}</UserDetails>
          <UserDetails>
            Data de nascimento: {new Date(user.dob.date).toLocaleDateString()}
          </UserDetails>
          <UserDetails>Telefone: {user.phone}</UserDetails>
          <UserDetails>Nacionalidade: {user.nat}</UserDetails>
          <UserDetails>
            Endereço:{' '}
            {`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`}
          </UserDetails>
          <UserDetails>ID: {user.id.value}</UserDetails>
          <CloseButtonContainer>
            <TouchableOpacity onPress={onClose}>
              <CloseButton>Fechar</CloseButton>
            </TouchableOpacity>
          </CloseButtonContainer>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default UserModal;
