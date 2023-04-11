import React from 'react';
import { ReactComponent as TrashIconSvg } from '../../../images/Icon.svg';
import { TrashButtonStyled } from './TrashButton.styled';

export const TrashButton = ({ onDelete }) => {
  return (
    <TrashButtonStyled type="button" onClick={onDelete}>
      <TrashIconSvg />
    </TrashButtonStyled>
  );
};
