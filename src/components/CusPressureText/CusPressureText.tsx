import PropTypes from 'prop-types';
import { ReactComponent as PressureIcon } from '@A/img/pressure.svg';
import { StyledPressureText } from './style';


export function CusPressureText({ 
  text = 0,
  onClick
}: any) {
  return (
    <StyledPressureText onClick={onClick}>
      <PressureIcon /> { text?.toFixed(0) } mbar
    </StyledPressureText>
  )
};

CusPressureText.prototype = {
  text: PropTypes.number,
  onClick: PropTypes.func
};
