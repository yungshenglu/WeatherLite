import PropTypes from 'prop-types';
import { StyledRefreshText } from './style';


export function CusRefreshText({ text }: any) {
  return (
    <StyledRefreshText>
      Last Updated: { text }
    </StyledRefreshText>
  );
};

CusRefreshText.prototype = {
  text: PropTypes.string
};
