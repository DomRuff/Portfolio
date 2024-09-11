import React from 'react';
import { DiStreamline , DiReact, DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  {

    return (

        <Section id='#tech'>
            <SectionDivider />
            <br />
            <SectionTitle>Technologien</SectionTitle>
            <SectionText>
                Ich habe mit einer Reihe von Technologien in der Web- und Softwareentwicklung gearbeitet. Von Frontend bis Backend oder auch Machine Learning, habe ich Erfahrung in vielen Bereichen.
            </SectionText>
            <List>
                <ListItem>
                    <DiReact size="3rem" />
                    <ListContainer>
                        <ListTitle>Frontend</ListTitle>
                        <ListParagraph>
                            Erfahrung mit <br />
                            React.js, Angular, Vue.js <br />
                        </ListParagraph>
                    </ListContainer>
                </ListItem>

                <ListItem>
                    <DiStreamline  size="3rem" />
                    <ListContainer>
                        <ListTitle>Backend</ListTitle>
                        <ListParagraph>
                            Erfahrung mit <br />
                            Spring Boot, ASP.NET<br />
                            RESTful APIs,<br />
                            MySQL, MongoDB, SQL Server, PostgreSQL
                        </ListParagraph>
                    </ListContainer>
                </ListItem>

                <ListItem>
                    <DiCode  size="3rem" />
                    <ListContainer>
                        <ListTitle>Entwicklung</ListTitle>
                        <ListParagraph>
                            Erfahrung mit <br />
                            Java, C#, Python, <br />
                            HTML5, <br />
                            CSS, SCSS, TailwindCSS, <br />
                            JavaScript, TypeScript
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
            </List>
        </Section>
    )
};


export default Technologies;