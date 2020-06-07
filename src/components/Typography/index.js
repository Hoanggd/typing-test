import styled from 'styled-components/macro';

export const H1 = styled.h1`
  font-size: 6rem;
  letter-spacing: -1.5px;
  font-weight: 400;
  color: ${props => props.theme.title};
`

export const H2 = styled.h2`
  font-size: 3.75rem;
  letter-spacing: -0.5px;
  font-weight: 400;
  color: ${props => props.theme.title};
`

export const H3 = styled.h3`
  font-size: 3rem;
  letter-spacing: 0;
  font-weight: 400;
  color: ${props => props.theme.title};
`

export const H4 = styled.h4`
  font-size: 2.125rem;
  letter-spacing: 0.25;
  font-weight: 400;
  color: ${props => props.theme.title};
`

export const H5 = styled.h5`
  font-size: 1.5rem;
  color: ${props => props.theme.title};
`

export const H6 = styled.h6`
  font-size: 1.25rem;
  letter-spacing: 0.15px;
  font-weight: 500;
  color: ${props => props.theme.title};
`

export const Subtitle1 = styled.p`
  font-size: 1rem;
  letter-spacing: 0.15px;
  color: ${props => props.theme.title};
`

export const Subtitle2 = styled.p`
  font-size: .875rem;
  letter-spacing: 0.1px;
  font-weight: 500;
  color: ${props => props.theme.title};
`

export const Body1 = styled.p`
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: ${props => props.theme.primaryText};
`

export const Body2 = styled.p`
  font-size: .875rem;
  letter-spacing: 0.24px;
  color: ${props => props.theme.primaryText};
`

export const Caption = styled.p`
  font-size: .75rem;
  letter-spacing: 0.4px;
  color: ${props => props.theme.primaryText};
`
