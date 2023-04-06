import styled from 'styled-components';


const ListTitle = styled.div`

  
  /* width: 100vh; */
  height: 38px;
  display: flex;

  align-item: center;
  padding: 10px 10px;
  align-items: center;
  margin-bottom: 32px;
  background-color:${props => props.theme.colors.greenAccent}; ;
  border-radius:8px;
  

  &>p{
    font-weight: ${props => props.theme.fontWeights.semibold};
    color: ${props => props.theme.colors.primaryLightText};
    /* font-size: ${props => props.theme.fontSizes[3]}px; */
  }


  @media screen and (min-width: 768px) {
    height: 58px;
    padding: 20px 20px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    height: 60px;
    padding: 20px 40px;
  }
`;

const ProductTitle = styled.p`

  font-size: 12px;
  margin-right: 167px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-right:318px;
  }

 @media screen and (min-width: 1440px) {
    margin-right: 750px;
 }

`

const NumberTitle = styled.p`
  margin-right: 24px;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-right:78px;
  }

 @media screen and (min-width: 1440px) {
    margin-right: 142px;
 }

`

const RemoveTitle = styled.p`
  
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }    

`


const ListIngrid = styled.ul`
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

// const ItemIngrid = styled.ul`
//   display: flex;
// `

const PicterIngrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;

  border-radius:8px;
  background-color: ${props => props.theme.colors.primaryGreenBackground};

  margin-right:10px;

  &>img{
    

    width: 40px;
    height: 40px;
    
  }

   @media screen and (min-width: 768px) {
    width: 93px;
    height: 93px;
    margin-right:16px;
  }
`

const NameIngrid = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.secondaryDarkText};
  font-size: 10px;

  width: 80px;
  margin-right: 77px;

   @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 100px;
    margin-right: 252px;
   }
  @media screen and (min-width: 1440px) {
    margin-right: 661px;
   }
`
const QuantityIngrid = styled.span`
  display: flex;
	justify-content: center;
	align-items: center;
  margin-right: 46px;

  width: 37px;
  height: 23px;

  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.primaryLightText};
  font-size: 10px;
  
  background-color:${props => props.theme.colors.greenAccent}; ;
  border-radius:4px;

   @media screen and (min-width: 768px) {
    width: 68px;
    height: 35px;
    margin-right: 110px;
    
    font-size: 18px;
   }
   @media screen and (min-width: 1440px) {
    width: 68px;
    height: 35px;
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
  ListTitle,
  ProductTitle,
  NumberTitle,
  RemoveTitle,
  ListIngrid,
  // ItemIngrid,
  PicterIngrid,
  NameIngrid,
  QuantityIngrid,
  DeletIngrid
};

