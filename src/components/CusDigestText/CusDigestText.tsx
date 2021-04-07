import PropTypes from 'prop-types';
import { StyledDigestText } from './style';


export function CusDigestText({ children }: any) {
  return (
    <StyledDigestText>
      { children }
    </StyledDigestText>
  );
};

CusDigestText.prototype = {
  children: PropTypes.node
};
