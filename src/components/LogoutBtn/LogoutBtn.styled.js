import styled from 'styled-components';

const LogoutForm = styled.div`
  width: 330px;
  height: 179px;
  padding: 44px 24px;

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 215px;
    padding: 50px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    padding: 50px 50px;
  }

  p {
    margin-bottom: 24px;

    font-weight: ${props => props.theme.fontWeights.regular};
    line-height: 1.29;
    text-align: center;
    letter-spacing: -0.02em;

    color: ${props => props.theme.colors.primaryDarkText};

    @media screen and (min-width: 768px) {
      margin-bottom: 32px;

      font-size: ${props => props.theme.fontSizes[5]}px;
      line-height: 1.33;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

const LogoutButton = styled.button`
  width: 137px;
  height: 49px;
  padding: 14px 18px;

  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 1.29;

  color: ${props => props.theme.colors.primaryLightText};

  background-color: ${props => props.theme.colors.greenAccent};
  border: none;
  outline: none;
  border-radius: 6px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.darkAccent};
  }

  @media screen and (min-width: 768px) {
    width: 192px;
    height: 59px;
    padding: 18px 39px;

    font-size: ${props => props.theme.fontSizes[4]}px;
    line-height: 1.12;
  }
`;

const CancelButton = styled.button`
  width: 137px;
  height: 49px;
  padding: 14px 18px;

  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 1.29;

  color: #23262a;

  background-color: ${props => props.theme.colors.normalGrey};
  border: 1px solid #d9d9d9;
  outline: none;
  border-radius: 6px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #fafafa;
    border-color: ${props => props.theme.colors.primaryDarkText};
  }

  @media screen and (min-width: 768px) {
    width: 192px;
    height: 59px;
    padding: 18px 39px;

    font-size: ${props => props.theme.fontSizes[4]}px;
    line-height: 1.12;
  }
`;

export { LogoutForm, ButtonWrapper, LogoutButton, CancelButton };
