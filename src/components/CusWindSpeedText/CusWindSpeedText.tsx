import PropTypes from 'prop-types';
import { ReactComponent as WindSpeedIcon } from '@A/img/airFlow.svg';
import { StyledWindSpeedText } from './style';


export function CusWindSpeedText({ text = 0 }: any) {
  return (
    <StyledWindSpeedText>
      <WindSpeedIcon /> { text?.toFixed(1) } mph
    </StyledWindSpeedText>
  )
};

CusWindSpeedText.prototype = {
  text: PropTypes.number
};
