import { useState } from 'react';
import { useSelector } from 'react-redux';

import { UserLogoModal } from 'components/UserLogoModal/UserLogoModal';

import { selectUserName, selectUserAvatar, selectUser } from 'redux/auth/selectors';

import {
  UserLogoWrapper,
  UserLogoButton,
  UserName,
  Modal,
} from './UserLogo.styled';

export const UserLogo = () => {
  const [modal, setModal] = useState(false);

  // const userName = useSelector(selectUserName);
  // const avatarURL = useSelector(selectUserAvatar);

  const user = useSelector(selectUser); 

  return (
    <div style={{ position: 'relative' }}>
      <UserLogoWrapper>
        <UserLogoButton onClick={() => setModal(prevState => !prevState)}>
          {!user.avatarURL && 
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeVKKhcw5BVb33-sIFbVwBxpGvFjAORNkHA&usqp=CAU"
            alt="User"
            />}
          {user.avatarURL &&
            <img
            src={user.avatarURL}
            alt="User"
            /> }
        </UserLogoButton>
        <UserName>{user.name}</UserName>
      </UserLogoWrapper>
      <Modal status={modal}>
        <UserLogoModal
          avatar={user.avatarURL} name={user.name}
        />
      </Modal>
    </div>
  );
};
