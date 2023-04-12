import styled from 'styled-components';


const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  width: 161px;

  padding: 18px;

  background-color: ${props => props.theme.colors.lightBackground};

  border: 1px solid #8baa36;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    gap: 32px;

    width: 177px;

    border: none;
  }
`;

const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: inherit;
  line-height: 1.6;

  color: ${props => props.theme.colors.primaryDarkText};

  background-color: transparent;

  border: none;
  outline: none;

  cursor: pointer;

  svg {
    stroke: ${props => props.theme.colors.primaryDarkText};
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 12px 24px;

  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 1.5;

  color: ${props => props.theme.colors.primaryLightText};

  background-color: ${props => props.theme.colors.greenAccent};

  border-radius: 24px 44px;
  border: none;
  outline: none;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    stroke: ${props => props.theme.colors.primaryLightText};
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.darkAccent};
  }
`;

export { Modal, EditButton, LogoutButton };
