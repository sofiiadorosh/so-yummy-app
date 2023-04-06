import { useState } from 'react';

import { UserLogoModal } from 'components/UserLogoModal';

import {
  UserLogoWrapper,
  UserLogoButton,
  UserName,
  Modal,
} from './UserLogo.styled';

export const UserLogo = () => {
  const [modal, setModal] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <UserLogoWrapper>
        <UserLogoButton onClick={() => setModal(prevState => !prevState)}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeVKKhcw5BVb33-sIFbVwBxpGvFjAORNkHA&usqp=CAU"
            alt="User"
          />
        </UserLogoButton>
        <UserName>UserName</UserName>
      </UserLogoWrapper>
      <Modal status={modal}>
        <UserLogoModal />
      </Modal>
    </div>
  );
};
