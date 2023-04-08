import styled from 'styled-components';


const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 32px;
  padding: 10px 10px;

  background-color:${props => props.theme.colors.greenAccent};
  border-radius:8px;


  @media screen and (min-width: 768px) {
    padding: 20px 20px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 40px;
  }
`;

const Title = styled.h2`

  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.03em;

  color: ${props => props.theme.colors.primaryLightText};

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
const TitleRemoveWrap = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 78px;
  }

  @media screen and (min-width: 1440px) {
    gap: 142px;
  }
`;

const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px 8px;
  gap: 24px;

  @media screen and (min-width: 768px) {
    padding: 0px 0px;
    gap: 44px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 40px;
  }

`
const IngredientsItem = styled.li`
  display: flex;
  justify-content: space-between;
  /* gap: 650px; */

  width: 100%;
  padding: 0px 19px 24px 0px;

  border-bottom: 1px solid #E0E0E0;

  @media screen and (min-width: 768px) {
    padding: 0px 45px 43px 0px;;
  }
  @media screen and (min-width: 1440px) {
    padding: 0px 43px 28px 0px;;
  }
`
const ItemTitleWrapper = styled.div`
  display: flex;
  gap: 10px;

@media screen and (min-width: 768px) {
  gap: 16px;
}

  &>div{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;

    border-radius:8px;
    background-color: ${props => props.theme.colors.primaryGreenBackground};
    
    @media screen and (min-width: 768px) {
      width: 93px;
      height: 93px;
    }
  }

`

const IngredientsTitle = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 10px;
  line-height: 1.17;
  letter-spacing: -0.24px;

  color: ${props => props.theme.colors.secondaryDarkText};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1;
  }
`

const MeasureWrapper = styled.div`
  display: flex;
  gap: 46px;

  @media screen and (min-width: 768px) {
    gap: 100px;
  }
  @media screen and (min-width: 1440px) {
    gap: 170px;
  }

  p{
    display: flex;
    justify-content: center;
	  align-items: center;

    min-width: 37px;
    height: 23px;

    padding: 4px;

    font-weight: ${props => props.theme.fontWeights.semibold};
    color: ${props => props.theme.colors.primaryLightText};
    font-size: 10px;
    line-height: 1.5;
    
    background-color:${props => props.theme.colors.greenAccent}; ;
    border-radius:4px;

    @media screen and (min-width: 768px) {
      min-width: 68px;
      height: 35px;

      padding: 4px 8px;
      font-size: 18px;
   }
  }

  button{
    width: 14px;
    height: 14px;

    fill: #333333;
    background-color:#FAFAFA;
    border: none;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
   }

  }

  
`




const QuantityIngrid = styled.span`
  display: flex;
	justify-content: center;
	align-items: center;
  margin-right: 46px;

  min-width: 37px;
  height: 23px;
  padding: 0px 3px;

  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.primaryLightText};
  font-size: 10px;
  
  background-color:${props => props.theme.colors.greenAccent}; ;
  border-radius:4px;

   @media screen and (min-width: 768px) {
    min-width: 68px;
    height: 35px;
    margin-right: 110px;
    
    font-size: 18px;
   }
   @media screen and (min-width: 1440px) {
    margin-right: 174px;
    
    font-size: 18px;
   }
`

const DeletIngrid = styled.button`

  width: 14px;
  height: 14px;

  fill: #333333;
  background-color:#FAFAFA;
  border: none;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;

   }

`

export {
  TitleWrapper,
  Title,
  TitleRemoveWrap,
  IngredientsList,
 IngredientsItem,
 ItemTitleWrapper,
  IngredientsTitle, 
  MeasureWrapper,
  QuantityIngrid,
  DeletIngrid
};

