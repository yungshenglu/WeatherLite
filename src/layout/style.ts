import styled from 'styled-components'


export const StyledLoayout = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.mainBackgroundColor };
`;
