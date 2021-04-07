import styled from 'styled-components'


export const StyledRefreshText = styled.div`
  display: inline-flex;
  align-items: flex-end;
  position: absolute;
  right: 15px;
  bottom: 15px;
  color: #828282;
  font-size: 12px;
  margin-right: 10px;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  svg {
    height: 12px;
    width: 12px;
    cursor: pointer;
    margin-left: 10px;
  }
`;
