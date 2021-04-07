import PropTypes from 'prop-types';
import { ReactComponent as HumidityIcon } from '@A/img/humidity.svg';
import { StyledHumidityText } from './style';


export function CusHumidityText({ 
  text = 0,
  onClick
}: any) {
  return (
    <StyledHumidityText onClick={onClick}>
      <HumidityIcon /> { text } %
    </StyledHumidityText>
  )
};

CusHumidityText.prototype = {
  text: PropTypes.number,
  onClick: PropTypes.func
};
