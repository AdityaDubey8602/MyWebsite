import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxSubTitle, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Open Source Projects' },
  { number: 500, text: 'Linkedin Connections', },
];

const diffData = [
  { number: "Two", text: "Development Internships" }
];

const anotherData = [
  { title: "Ecell Member", text: "Got first position in One Dollor Venture." }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
      {diffData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
      {anotherData.map((card, index) => (
        <Box key={index}>
          <BoxSubTitle>{card.title}</BoxSubTitle>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;