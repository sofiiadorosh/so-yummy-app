import styled from 'styled-components';

const ButtonSearchStyle = styled.button`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
position: absolute;
top: 0;
right: 0;
width: 113px;
height: 52px;
background-color: ${props => props.theme.colors.quaternaryDarkText};
border-radius: 24px 44px;
border: none;
color: ${props => props.theme.colors.primaryLightText};
font-family: inherit;
font-weight: ${props => props.theme.fontWeights.regular};
font-size: ${props => props.theme.fontSizes[3]}px;
line-height: 1.5;
transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)';
&:hover,
&:focus {
  background-color: ${props => props.theme.colors.greenAccent};
}
@media screen and (min-width: 768px) {
  width: 161px;
  height: 59px;
  left: 201px;
}
@media screen and (min-width: 1440px) {
  font-size: ${props => props.theme.fontSizes[4]}px;
  height: 70px;
  left: 350px;
}
`;
export { ButtonSearchStyle };