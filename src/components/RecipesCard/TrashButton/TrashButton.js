import React from 'react';
import s from './TrashButton.module.css';
import { ReactComponent as TrashIconSvg } from '../../../images/Icon.svg';

export const TrashButton = ({ onDelete, bgColorClass }) => {
  return (
    <button
      type="button"
      className={`${s[bgColorClass]} ${s.trashButton}`}
      onClick={onDelete}
    >
      <TrashIconSvg className={`${s[bgColorClass]} ${s.trashIcon}`} />
    </button>
  );
};
