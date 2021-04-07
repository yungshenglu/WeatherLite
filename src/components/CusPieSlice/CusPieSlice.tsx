import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export function CusPieSlice({
  label,
  value,
  d,
  textPos,
  color,
}: any) {
  return (
    <g key={label}>
      <path 
        d={d} 
        fill={color} 
      />
      <text
        x={textPos.x}
        y={textPos.y}
        fill="#000"
        fontSize="6"
        textAnchor="middle"
        transform={`rotate(90 ${textPos.x}, ${textPos.y})`}
      >
        { label }: { `${value.toFixed(0)}%` }
      </text>
    </g>
  );
};

CusPieSlice.prototype = {
  label: PropTypes.number,
  value: PropTypes.number,
  d: PropTypes.string,
  textPos: PropTypes.object,
  color: PropTypes.string
};
