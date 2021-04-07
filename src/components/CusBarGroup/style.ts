import styled from 'styled-components'


export const StyledNameLabel = styled.text`
  fill: ${({ theme }) => theme.textColor };
  font-weight: 300;
  font-size: 0.8rem;
  text-anchor: end;
`;

export const StyledValueLabel = styled.text`
  fill: #fff;
  font-weight: 900;
  font-size: 0.7rem;
  text-anchor: end;
`;
