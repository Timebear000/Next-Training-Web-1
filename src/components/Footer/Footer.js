import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:111-111-1111">111-111-111</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:contact:timebear000@gmail.com">timebear000@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <Slogan>Innovating one project at a time</Slogan>
      <SocialContainer>
      <SocialIcons>
        <AiFillGithub herf="https://github.com" size="3rem">
        </AiFillGithub>
      </SocialIcons>

      <SocialIcons>
        <AiFillLinkedin herf="https://github.com" size="3rem">
        </AiFillLinkedin>
      </SocialIcons>

      <SocialIcons>
        <AiFillInstagram herf="https://github.com" size="3rem">
        </AiFillInstagram>
      </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
