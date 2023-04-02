import styled from 'styled-components';

const SquareOne = styled.div`
  position: absolute;
  top: -26.83px;
  left: 120px;

  width: 8px;
  height: 8px;

  background-color: ${props => props.theme.colors.greenAccent};

  border-radius: 3px;
  transform: rotate(-25deg);

  @media screen and (min-width: 768px) {
    top: -32.4px;
    left: 219px;

    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 1440px) {
    top: -29.31px;
    left: 328px;
  }
`;

const SquareTwo = styled.div`
  position: absolute;
  top: 22px;
  left: 247px;

  width: 6px;
  height: 6px;

  background-color: ${props => props.theme.colors.darkAccent};

  border-radius: 3px;
  transform: rotate(-25deg);

  @media screen and (min-width: 768px) {
    top: 20px;
    left: 437px;

    width: 12px;
    height: 12px;
  }

  @media screen and (min-width: 1440px) {
    top: 44px;
    left: 807px;
  }
`;

const SquareThree = styled.div`
  position: absolute;
  top: 0;
  left: 349px;

  transform: translateY(-50%);

  width: 8px;
  height: 8px;

  background-color: ${props => props.theme.colors.greenAccent};

  border-radius: 3px;
  transform: rotate(-25deg);

  @media screen and (min-width: 768px) {
    top: -19.4px;
    left: 726px;

    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 1440px) {
    top: -16.31px;
    left: 1250px;
  }
`;

export { SquareOne, SquareTwo, SquareThree };
