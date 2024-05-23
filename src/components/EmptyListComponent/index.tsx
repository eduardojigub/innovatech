import React from 'react';
import { EmptyContainer, EmptyImage, EmptyText, EmptyTextBold } from './styles';
import SearchIcon from 'assets/Search';

const ListEmptyComponent = () => {
  return (
    <EmptyContainer>
      <EmptyImage>
        <SearchIcon />
      </EmptyImage>
      <EmptyTextBold>Nenhum resultado encontrado</EmptyTextBold>
      <EmptyText>Tente ajustar a sua busca</EmptyText>
      <EmptyText>para encontrar o que você está buscando</EmptyText>
    </EmptyContainer>
  );
};

export default ListEmptyComponent;
