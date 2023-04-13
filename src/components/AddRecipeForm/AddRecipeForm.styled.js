import styled from 'styled-components';
// import { IoCloseOutline } from 'react-icons/io5';

export const Wrap = styled.div`
  padding-top: 50px;
  padding-bottom: 72px;
  @media screen and (min-width: 1440px) {
  padding-top:0px
  
  } 
`;

export const Title = styled.h2`
  margin-bottom: 72px;
 
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
`;

export const MainRecipe = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
@media screen and (min-width: 1440px) {
 gap: 121px;
 flex-direction: row;
 
} 
`;

export const Form = styled.form`

`;

export const Description = styled.div`
@media screen and (min-width: 768px) {
 
    display: flex;
    
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    
    display: flex;
    
    width: 100%;
  } 
`;

export const ImgUploadWrap = styled.div`
  margin-bottom: 32px;
   display:flex;
   justify-content: center;
   @media screen and (min-width: 768px) {
 margin-bottom:0px;
   }
  
`;

export const InputUpload = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;





export const SelectOption = styled.option`
cursor: pointer;
border: none;
background-color: transparent;
box-shadow: none; 
border-color:transparent;
`;

export const MainWrapIngredients = styled.div`
  margin-top: 44px;
  width: 100%;
  @media screen and (min-width: 768px) {
   margin-top: 104px;
  }
`;

export const WrapIngredients = styled.div`
 
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;



export const InputIngredientsWrap = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputIngredients = styled.input`
  margin-right: 14px;
  max-width: 194px;
  height: 53px;
  padding-left: 16px;
  border: none;
  border-radius: 6px;
background-color:#D9D9D9;
`;

export const SelectIngredients = styled.select`
  height: 53px;
  border: none;
  background-color:#D9D9D9;
  border-radius: 6px;
  min-width:84px;

`;

export const SelectOptionIngredients = styled.option`
  height: 53px;
  border: none;
  min-width:84px;
  display:flex;
  background-color:#fff;
`;

export const WrapPreparation = styled.div`
  margin-top: 44px;
  width: 100%;
  display: flex;
  flex-direction: column;
    @media screen and (min-width: 768px) {
    margin-top:104px;
  }
`;

export const TitlePreparation = styled.h2`
  margin-bottom: 24px;

`;


export const WrapButtonAdd = styled.div`
  margin-right: auto;
`;

export const ImageInput = styled.img`
width:279px;
height:268px;
@media screen and (min-width: 1440px) {
    
  width:357px;
  height:344px;
} 
`