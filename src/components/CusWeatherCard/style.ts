import styled from 'styled-components'


export const StyledWeatherCard = styled.div`
  position: relative;
  min-width: 360px;
  min-height: 400px;
  background-color: ${({ theme }) => theme.backgroundColor };
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  box-sizing: border-box;
  padding: 30px 15px 10px;
`;

export const StyledMetaBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid ${({ theme }) => theme.dividerColor };
  padding-top: 20px;
  margin-bottom: 30px;
`;
