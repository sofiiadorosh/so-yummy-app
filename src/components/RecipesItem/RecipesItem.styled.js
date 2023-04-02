import styled from 'styled-components';

const Recipe = styled.li`
  border-radius: 8px;

  overflow: hidden;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 3 * 14px) / 4);
  }
`;

const RecipeWrapper = styled.div`
  position: relative;
`;

const RecipeDescr = styled.div`
  position: absolute;
  left: 18px;
  bottom: 26px;

  padding: 16px;

  min-width: 307px;

  background-color: ${props => props.theme.colors.whiteBackground};
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    min-width: 300px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 268px;
  }

  p {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes[4]};
    line-height: 1.25;
    letter-spacing: -0.24px;
    text-align: left;

    color: ${props => props.theme.colors.secondaryDarkText};
  }
`;

export { Recipe, RecipeWrapper, RecipeDescr };
