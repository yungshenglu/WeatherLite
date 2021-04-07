import PropTypes from 'prop-types';
import { ReactComponent as RefeshIcon } from '@A/img/refresh.svg';
import { StyledRefreshText } from './style';


export function CusRefreshText({ text }: any) {
  return (
    <StyledRefreshText>
      Last Updated: { text } <RefeshIcon />
    </StyledRefreshText>
  );
};

CusRefreshText.prototype = {
  text: PropTypes.string
};
