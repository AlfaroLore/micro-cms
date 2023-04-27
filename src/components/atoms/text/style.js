import styled from 'styled-components';

const StyledHeading = styled.p.attrs(() => ({
  className: 'font-montserrat'
}))``;

export const StyledH1 = styled(StyledHeading).attrs(() => ({
  className: 'text-5xl font-light uppercase'
}))``;

export const StyledH2 = styled(StyledHeading).attrs(() => ({
  className: 'text-4xl font-bold'
}))``;

export const StyledH3 = styled(StyledHeading).attrs(() => ({
  className: 'text-2xl font-bold'
}))``;

export const StyledH4 = styled(StyledHeading).attrs(() => ({
  className: 'text-lg font-bold'
}))``;

export const StyledParagraph = styled.p.attrs(() => ({
  className: 'text-base font-avenirRoman'
}))``;

export const StyledLink = styled.p.attrs(() => ({
  className: 'text-base text-awnLightBlue font-montserratMedium'
}))``;

export const StyledSmall = styled(StyledHeading).attrs(() => ({
  className: 'text-sm font-bold font-montserrat'
}))``;
