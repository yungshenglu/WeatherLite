import { useState } from 'react';
import PropTypes from 'prop-types';
import CusPieSlice from '@C/CusPieSlice';
import CusChartTitle from '@C/CusChartTitle';
import { PIE_CHART_COLOR } from '@U/hardcode';
import { StyledPieChartSvg } from './style';


export function CusPieChart({ 
  visible, 
  data,
  title
}: any) {
  const [radius, setRadius] = useState(80);

  const getXY = (percent: number, radius: number) => {
    const x = Math.cos((2 * Math.PI * percent) / 100) * radius;
    const y = Math.sin((2 * Math.PI * percent) / 100) * radius;
    return { x, y };
  };

  let tempPercent = 0;
  let tempTextPercent = 0;
  let prevMiddlePercent = 0;
  const pathDataList = data.map((item: any) => {
    const start = getXY(tempPercent, radius);
    tempPercent += item.value;

    const end = getXY(tempPercent, radius);
    const largeArcFlag = item.value > 50 ? 1 : 0;

    tempTextPercent += prevMiddlePercent + item.value / 2;
    prevMiddlePercent = item.value / 2;

    return {
      label: item.label,
      value: item.value,
      d: `
        M ${start.x} ${start.y}
        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}
        L 0 0
      `,
      textPos: {
        x: getXY(tempTextPercent, radius / 2).x,
        y: getXY(tempTextPercent, radius / 2).y,
      },
    };
  });

  return visible 
    ? (
        <>
          <CusChartTitle title={title} />
          <StyledPieChartSvg
            viewBox="-100 -100 200 200"
          >
            {
              pathDataList.map((item: any, id: number) => (
                <CusPieSlice
                  label={item.label}
                  value={item.value}
                  d={item.d}
                  textPos={item.textPos}
                  color={PIE_CHART_COLOR[id]}
                />
              ))
            }
          </StyledPieChartSvg>
        </>
      )
    : null;
};

CusPieChart.prototype = {
  visible: PropTypes.bool,
  data: PropTypes.array,
  title: PropTypes.string
};
