import React from 'react';
import { ReactComponent as TrashIconSvg } from '../../../images/Icon.svg';

export const TrashButton = ({ onDelete }) => {
  return (
    <button type="button" onClick={onDelete}>
      <TrashIconSvg />
    </button>
  );
};
