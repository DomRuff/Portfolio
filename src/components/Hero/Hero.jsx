import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import CV from '../../assets/CV/Lebenslauf_Public.pdf';

const Hero = (props) => {

  return (

    <Section id='#hero' row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Dominik Ruff <br />
                Softwareentwickler
            </SectionTitle>
            <SectionText>
                B.Sc. Informatik mit baldigen M.Sc. Informatik. <br />
                Erfahrung in der Full-Stack Softwareentwicklung von Webandwendungen. <br />
            </SectionText>
            <a href={CV} target='_blank' rel='noopener noreferrer'>
                <Button>Kontakt</Button>
            </a>
        </LeftSection>
    </Section>
  
);
}

export default Hero;