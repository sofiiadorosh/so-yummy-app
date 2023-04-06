import SocialLinks from './SocialLinks/SocialLinks';
import FooterNavigation from './FooterNavigation/FooterNavigation';
import {
  LeafsOnFooter,
  FooterBlock,
  FooterContainer,
  SocialLinksWrapper,
  DownTextWrapper,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterBlock>
      <FooterContainer>
        <FooterNavigation />
        <SocialLinksWrapper>
          <SocialLinks />
        </SocialLinksWrapper>
      </FooterContainer>
      <DownTextWrapper>
        <span>© 2023 All Rights Reserved.</span>
        <span> Terms of Service</span>
      </DownTextWrapper>
      <LeafsOnFooter></LeafsOnFooter>
    </FooterBlock>
  );
};
