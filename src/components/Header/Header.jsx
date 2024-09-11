import React from 'react';
import { Link } from 'react-scroll';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Span, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div2>
      <li>
        <Link to="#projects" smooth={true} duration={50}>
          <NavLink>
            Projekte
          </NavLink>
        </Link>
      </li>
      <li>
        <Link to="#tech" smooth={true} duration={50}>
          <NavLink>
            Technologien
          </NavLink>
        </Link>
      </li>
      <li>
        <Link to="#education" smooth={true} duration={50} >
          <NavLink>
            Bildung
          </NavLink>
        </Link>
      </li>
    </Div2>

    <Div3 style={{}}>
      <SocialIcons href="https://github.com/DomRuff">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/dominik-ruff/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;