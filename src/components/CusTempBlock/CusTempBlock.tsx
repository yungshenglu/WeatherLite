import PropTypes from 'prop-types';
import { ReactComponent as UpIcon } from '@A/img/up.svg';
import { ReactComponent as DownIcon } from '@A/img/down.svg';
import { TEMP_DEGREE } from '@U/hardcode';
import { 
  StyledTempBlock, 
  StyledDegreeBlock, 
  StyledDegreeText, 
  StyledMinMaxTempText 
} from './style';


export function CusTempeBlock({ 
  currTemp = 0, 
  minTemp = 0,
  maxTemp = 0,
  degreeMode = 0,
  onMinTempChart,
  onMaxTempChart
}: any) {
  const degreeText = TEMP_DEGREE.find(item => item.key === degreeMode)?.text;

  return (
    <StyledTempBlock>
      {/* 當天氣溫 */}
      { currTemp?.toFixed(1) }
      <StyledDegreeBlock>
         {/* 氣溫單位 */}
        <StyledDegreeText>
          { degreeText }
        </StyledDegreeText>
         {/* 當天最低氣溫 */}
        <StyledMinMaxTempText
          onClick={onMaxTempChart}
        >
          <UpIcon /> { maxTemp?.toFixed(1) }
        </StyledMinMaxTempText>
         {/* 當天最高氣溫 */}
        <StyledMinMaxTempText
          onClick={onMinTempChart}
        >
          <DownIcon /> { minTemp?.toFixed(1) }
        </StyledMinMaxTempText>
      </StyledDegreeBlock>
    </StyledTempBlock>
  );
};

CusTempeBlock.prototype = {
  currTemp: PropTypes.number,
  minTemp: PropTypes.number,
  maxTemp: PropTypes.number,
  digestAbbr: PropTypes.string,
  degreeMode: PropTypes.number,
  onMinTempChart: PropTypes.func,
  onMaxTempChart: PropTypes.func
};
