import PropTypes from 'prop-types';
import { StyledLocationText } from './style';


export function CusLocationText({ children }: any) {
  return (
    <StyledLocationText>
      { children }
    </StyledLocationText>
  );
};

CusLocationText.prototype = {
  children: PropTypes.node
};
