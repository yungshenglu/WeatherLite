import styled from 'styled-components'


export const StyledWindSpeedText = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textColor };
  font-size: 16x;
  font-weight: 300;
  margin-bottom: 10px;

  svg {
    height: auto;
    width: 25px;
    margin-right: 10px;
  }
`;
