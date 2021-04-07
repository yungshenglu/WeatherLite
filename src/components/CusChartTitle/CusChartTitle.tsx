import PropTypes from 'prop-types';
import {
  StyledChartTitle
} from './style';


export function CusChartTitle({ title }: any) {
  return (
    <StyledChartTitle x="10" y="0">
      { title }
    </StyledChartTitle>
  );
}

CusChartTitle.prototype = {
  title: PropTypes.string
}
