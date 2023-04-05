import { UserLogoWrapper, UserLogoButton, UserName } from './UserLogo.styled';

export const UserLogo = () => {
  return (
    <UserLogoWrapper>
      <UserLogoButton>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeVKKhcw5BVb33-sIFbVwBxpGvFjAORNkHA&usqp=CAU"
          alt="User"
        />
      </UserLogoButton>
      <UserName>UserName</UserName>
    </UserLogoWrapper>
  );
};
