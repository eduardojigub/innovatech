import React, { useState } from 'react';
import {
  ButtonContainer,
  FiltersContainer,
  HeaderContainer,
  HeaderTitle,
  HeaderTitleContainer,
  Input,
} from './styles';
import FilterModal from '@components/FilterModal';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface HeaderProps {
  onFilterName: (name: string) => void;
  onFilterGender: (gender: string) => void;
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onFilterName,
  onFilterGender,
  onReset,
}) => {
  const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleFilterOption = (option: string) => {
    if (option === 'all') {
      onReset();
    } else {
      onFilterGender(option);
    }
    setModalVisible(false);
  };

  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <HeaderTitle>InnovaTech</HeaderTitle>
      </HeaderTitleContainer>
      <FiltersContainer>
        <Input
          placeholder="Pesquise por nome ou sobrenome..."
          value={name}
          onChangeText={(text: string) => {
            setName(text);
            onFilterName(text);
          }}
        />
        <ButtonContainer>
          <MaterialCommunityIcons
            name="filter"
            size={28}
            color="black"
            onPress={() => setModalVisible(true)} // Open the modal on press
          />
        </ButtonContainer>
      </FiltersContainer>
      <FilterModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onFilterOption={handleFilterOption}
      />
    </HeaderContainer>
  );
};

export default Header;
