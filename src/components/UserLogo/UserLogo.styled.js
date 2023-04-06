import styled from 'styled-components';

const UserLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const UserLogoButton = styled.div`
  width: 34px;
  height: 34px;

  border-radius: 50%;

  overflow: hidden;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

const UserName = styled.p`
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.7;

  color: ${props => props.theme.colors.quaternaryDarkText};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }
`;

const Modal = styled.div`
  position: absolute;
  right: 0;
  bottom: -14px;

  z-index: 2;

  transform: translateY(100%);

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ status }) => {
    return status
      ? 'opacity: 1; pointer-events: auto; visibility: visible;'
      : 'opacity: 0; pointer-events: none; visibility: hidden;';
  }}
`;

export { UserLogoWrapper, UserLogoButton, UserName, Modal };
