import styled from 'styled-components'


export const StyledTempBlock = styled.div`
  display: flex;
  color: ${({ theme }) => theme.temperatureColor };
  font-size: 96px;
  font-weight: 300;
`;

export const StyledDegreeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: top;
`

export const StyledDegreeText = styled.div`
  display: flex;
  font-size: 42px;
  font-weight: normal;
  margin-bottom: 10px;
`

export const StyledMinMaxTempText = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 12px;
  margin: 0 5px 5px;

  svg {
    height: auto;
    width: 10px;
    margin-right: 10px;
  }
`;
