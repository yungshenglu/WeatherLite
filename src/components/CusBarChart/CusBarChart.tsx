import PropTypes from 'prop-types';
import CusBarGroup from '@C/CusBarGroup';
import CusChartTitle from '@C/CusChartTitle';


export function CusBarChart({ 
  visible,
  data,
  title
}: any) {

  return visible
    ? (
        <>
          <CusChartTitle title={title} />
          <svg viewBox="40 40 300 300">
              <g className="chart" transform="translate(100, 60)">
                { 
                  data.map((item: any, id: number) => 
                    <g transform={`translate(0, ${id * 30})`}>
                      <CusBarGroup data={item} barHeight={30} />
                    </g>
                  ) 
                }
              </g>
          </svg>
        </>
      )
    : null;
};
//width="350" height="300"
CusBarChart.prototype = {
  visible: PropTypes.bool,
  data: PropTypes.array,
  title: PropTypes.string
};
