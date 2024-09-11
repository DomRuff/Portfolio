import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import img1 from '../../assets/images/1.png';
import img2 from '../../assets/images/2.png';
import img3 from '../../assets/images/3.png';
import img4 from '../../assets/images/4.png';
import img5 from '../../assets/images/5.png';
import img6 from '../../assets/images/6.png';

const Projects = () => {

    const images = [img1, img2, img3, img4, img5, img6];


    return(

        <Section nopadding id='#projects'>
            <SectionDivider />
            <SectionTitle main>Projekte</SectionTitle>
            <GridContainer>
                {projects.map(({id, image, title, description, tags, source, visit}) => (
                    <BlogCard key={id}>
                        <Img src={images[id]} />
                        <TitleContent>
                            <HeaderThree title>{title}</HeaderThree>
                            <Hr />
                        </TitleContent>
                        <CardInfo>{description}</CardInfo>
                        <div>
                            <Hr />
                            <TitleContent>Technologien</TitleContent>
                            <TagList>
                                {tags.map((tag, i) => (
                                    <Tag key={i}>{tag}</Tag>
                                ))}
                            </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks href={source}>Source</ExternalLinks>
                            {id===4 ? <ExternalLinks href={visit}>Try it</ExternalLinks> : null}
                        </UtilityList>
                    </BlogCard>
                ))}
            </GridContainer>
        </Section>
    );
};


export default Projects;