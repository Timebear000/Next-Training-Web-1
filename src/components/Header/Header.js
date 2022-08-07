import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems:"center" ,color:'white' , marginBottom:"20"}}>
          <DiCssdeck size="3rem"></DiCssdeck><Span>Proflio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Thechnologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
