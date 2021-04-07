import styled from 'styled-components'
import { AInput } from '@P/antd';


const { Search } = AInput;

export const StyledSearch = styled(Search)`
  .ant-input-wrapper {
    width: 97%;
    margin: 0 10px 20px;

    .ant-input {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.textColor};
      font-size: 28px;
      font-weight: bold;
      padding: 0;
      
      &:focus {
        border-bottom: none;
        outline: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
      }

      &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${({ theme }) => theme.foregroundColor};
      }
      
      &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${({ theme }) => theme.foregroundColor};
      }
      
      &::-ms-input-placeholder { /* Microsoft Edge */
        color: ${({ theme }) => theme.foregroundColor};
      }
    }
  
    .ant-input-group-addon {
      background-color: transparent;
      border-radius: none;
      
      > .ant-input-search-button {
        background-color: transparent;
        border: none;

        > span {
          color: ${({ theme }) => theme.textColor};
        }
      }
    }
  }
`;
