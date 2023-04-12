import { useState } from 'react';
import { useSelector } from 'react-redux';

import { UserLogoModal } from 'components/UserLogoModal/UserLogoModal';

import { selectUser} from 'redux/auth/selectors';

import {
  UserLogoWrapper,
  UserLogoButton,
  UserName,
  Modal,
} from './UserLogo.styled';

export const UserLogo = () => {
  const [modal, setModal] = useState(false);

  const { name, avatarURL } = useSelector(selectUser);

  return (
    <div style={{ position: 'relative' }}>
      <UserLogoWrapper>
        <UserLogoButton onClick={() => setModal(prevState => !prevState)}>
          {!avatarURL && 
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeVKKhcw5BVb33-sIFbVwBxpGvFjAORNkHA&usqp=CAU"
            alt="User"
            />}
          {avatarURL &&
            <img
            src={avatarURL}
            alt="User"
            /> }
        </UserLogoButton>
        <UserName>{name}</UserName>
      </UserLogoWrapper>
      <Modal status={modal}>
        <UserLogoModal
          avatar={avatarURL} user={name}
        />
      </Modal>
    </div>
  );
};



