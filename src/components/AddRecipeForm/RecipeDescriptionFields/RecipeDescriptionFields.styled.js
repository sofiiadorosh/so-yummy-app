import styled from 'styled-components';
export const MainWrap = styled.div`
@media screen and (min-width: 768px) {
  margin-left:32px;
 
}
`;
export const InputDescriptionWrap = styled.div`
  position: relative;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
  
  }
`;

export const LastInputDescriptionWrap = styled.div`
  position: relative;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const InputDescription = styled.input`
  padding-bottom: 18px;
  color:#000000;
  font-family:'Poppins';
  font-weight:400;
  font-size:14px;
  letter-spacing:-0.02em;
  width: 343px;
  height: 43px;
  border: none;
  border-bottom: 1px solid grey;
  background: transparent;
  @media screen and (min-width: 768px) {
    width: 393px;
  }
  
`;

export const UnderLane = styled.div`
padding-bottom: 18px;
  width: 343px;
  border: none;
  border-bottom: 1px solid grey;
  background: transparent;
  @media screen and (min-width: 768px) {
    padding-bottom: 14px;
    width: 393px;
  }
`;
