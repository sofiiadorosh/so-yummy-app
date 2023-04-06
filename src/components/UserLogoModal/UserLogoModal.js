import { useState } from 'react';
import { FiEdit2, FiArrowRight } from 'react-icons/fi';

import { UserModal } from 'components/Modal';
import { UserInfoModal } from 'components/UserInfoModal';
import { LogoutBtn } from 'components/LogoutBtn';

import { Modal, EditButton, LogoutButton } from './UserLogoModal.styled';

export const UserLogoModal = () => {
  const [userInfoModal, setUserInfoModal] = useState('closed');
  const [logoutModal, setlogoutModal] = useState('closed');

  return (
    <>
      <Modal>
        <EditButton type="button" onClick={() => setUserInfoModal('opened')}>
          <span>Edit profile</span>
          <FiEdit2 size={14} />
        </EditButton>
        <LogoutButton type="button" onClick={() => setlogoutModal('opened')}>
          <span>Log out</span>
          <FiArrowRight size={18} />
        </LogoutButton>
      </Modal>
      {userInfoModal === 'opened' && (
        <UserModal
          state={userInfoModal}
          stateFn={setUserInfoModal}
          children={<UserInfoModal />}
        />
      )}
      {logoutModal === 'opened' && (
        <UserModal
          state={logoutModal}
          stateFn={setlogoutModal}
          children={<LogoutBtn />}
        />
      )}
    </>
  );
};
