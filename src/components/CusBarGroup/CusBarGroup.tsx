import PropTypes from 'prop-types';
import {
  StyledNameLabel,
  StyledValueLabel
} from './style';


export function CusBarGroup({ 
  data, 
  barHeight 
}: any) {
  let barPadding = 2
  let barColour = '#348AA7'
  let widthScale = (d: number) => d * 10

  let width = widthScale(data.value)
  let yMid = barHeight * 0.5

  return (
    <g className="bar-group">
      <StyledNameLabel
        className="name-label"
        x="-6" 
        y={yMid} 
        alignmentBaseline="middle"
      >
        { data.label }
      </StyledNameLabel>
      <rect 
        y={barPadding * 0.5} 
        width={width} 
        height={barHeight - barPadding} 
        fill={barColour} 
      />
      <StyledValueLabel 
        className="value-label"
        x={width- 8} 
        y={yMid} 
        alignmentBaseline="middle"
      >
        { data.value.toFixed(0) }
      </StyledValueLabel>
    </g>
  );
};

CusBarGroup.prototype = {
  data: PropTypes.object
};
