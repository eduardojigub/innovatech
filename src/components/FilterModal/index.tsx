import React from 'react';
import { Modal, Button, Text } from 'react-native';
import { ModalBackground, ModalContent, ModalTitle } from './styles';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onFilterOption: (option: string) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  visible,
  onClose,
  onFilterOption,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalBackground>
        <ModalContent>
          <ModalTitle>Selecione a opção de filtro:</ModalTitle>
          <Button
            title="Mostrar apenas masculino"
            onPress={() => {
              onFilterOption('male');
              onClose();
            }}
          />
          <Button
            title="Mostrar apenas feminino"
            onPress={() => {
              onFilterOption('female');
              onClose();
            }}
          />
          <Button
            title="Mostrar todos"
            onPress={() => {
              onFilterOption('all');
              onClose();
            }}
          />
          <Button title="Cancelar" onPress={onClose} />
        </ModalContent>
      </ModalBackground>
    </Modal>
  );
};

export default FilterModal;
