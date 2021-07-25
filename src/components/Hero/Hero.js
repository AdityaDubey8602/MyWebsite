import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Aditya's Portfolio
      </SectionTitle>
      <SectionText>
        I am a Flutter Developer and a Front-end Developer with Flutter, Html5, CSS3, Javascript, Python and Bootstrap, as my tech stack.
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/drive/folders/1vsOQffXI9DPZbmMgv1urmqiE4_4tX6ES?usp=sharing'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;