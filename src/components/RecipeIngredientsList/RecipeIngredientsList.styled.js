import styled from "styled-components";
import { BsCheck } from "react-icons/bs";


const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
 
  @media (min-width: 768px) {
    padding: 0 32px;
    width: 768px;
  }
  @media (min-width: 1440px) {
    padding: 0 100px;
    width: 1440px;
  }
`;

const SectionIngredients = styled.section`
  padding-top: 32px;
  @media (min-width: 768px) {
    padding-top: 50px;
  }
`;

const TitleWrap = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.greenAccent};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 12px 14px;
  @media (min-width: 768px) {
    margin-bottom: 32px;
    padding: 21px 32px;
  }
  @media (min-width: 1440px) {
    padding: 21px 40px;
    margin-bottom: 50px;
  }
`;

const Title = styled.h2`
  font-family: "Poppins";
  color: ${props => props.theme.colors.lightBackground};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }
`;

const TitleText = styled.p`
  font-family: "Poppins";
  color: ${props => props.theme.colors.lightBackground};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }
`;

const TitleTextWrap = styled.div`
  display: flex;
  gap: 18px;
  @media (min-width: 768px) {
    gap: 38px;
  }
  @media (min-width: 1440px) {
    gap: 109px;
  }
`;
const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

const IngredientsItem = styled.li`
  display: flex;
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundAccent};
  padding: 14px 29px 14px 14px;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding: 33px 58px 33px 40px;
  }
  @media (min-width: 768px) {
    padding: 27px 70px 27px 58px;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const IngredientImg = styled.img`
  width: 57px;
  height: 57px;
  margin-right: 12px;
  @media (min-width: 768px) {
    width: 112px;
    height: 112px;
    margin-right: 40px;
  }
  @media (min-width: 1440px) {
    width: 128px;
    height: 128px;
    margin-right: 66px;
  }
`;

const IngredientsTitle = styled.p`
  font-family: "Poppins";
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.16;
  max-width: 200px;
  color: ${props => props.theme.colors.textSubTitle};
  @media (min-width: 768px) {
    max-width: 220px;
    font-size: ${props => props.theme.fontSizes[7]}px;
    line-height: 1;
  }
  @media (min-width: 1440px) {
    max-width: 420px;
  }
`;

const IngredientsMeasure = styled.span`
  margin-right: 28px;
  border-radius: 4px;
  padding: 4px;
  background-color: ${props => props.theme.colors.greenAccent};
  font-family: "Poppins";
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: 1.5;
  color: ${props => props.theme.colors.textSubTitle};
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
    line-height: 1.5;
    padding: 4px 8px;
    margin-right: 78px;
  }
  @media (min-width: 1440px) {
    margin-right: 151px;
  }
`;

const Span= styled.span`
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: transparent;
  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const IngredientsCheck = styled.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

const Label = styled.label`
  display: flex;
  ${IngredientsCheck}:checked + ${Span} {
    color: ${props => props.theme.colors.greenAccent};
  }
`;

const Icon = styled(BsCheck)`
  width: 18px;
  height: 18px;
  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export { Container, SectionIngredients, TitleWrap, Title, TitleText, TitleTextWrap, IngredientsTitle, IngredientsMeasure, Wrap, IngredientImg, IngredientsList, IngredientsItem, Span, IngredientsCheck, Label, Icon };