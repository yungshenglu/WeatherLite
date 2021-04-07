import PropTypes from 'prop-types';
import CusTempBlock from '@C/CusTempBlock';
import CusWeatherIcon from '@C/CusWeatherIcon';
import { StyledCurrentWeather } from './style';


export function CusCurrentWeather({ 
  currTemp = 0,
  minTemp = 0,
  maxTemp = 0,
  weatherType = '',
  onMinTempChart,
  onMaxTempChart
}: any) {
  return (
    <StyledCurrentWeather>
      {/* 氣溫區塊 (當天氣溫/最低氣溫/最高氣溫) */}
      <CusTempBlock
        currTemp={currTemp}
        minTemp={minTemp}
        maxTemp={maxTemp}
        onMinTempChart={onMinTempChart}
        onMaxTempChart={onMaxTempChart}
      />
      {/* 氣象圖示 */}
      <CusWeatherIcon
        weatherType={weatherType}
      />
    </StyledCurrentWeather>
  );
};

CusCurrentWeather.prototype = {
  currTemp: PropTypes.number,
  minTemp: PropTypes.number,
  maxTemp: PropTypes.number,
  weatherType: PropTypes.string,
  onMinTempChart: PropTypes.func,
  onMaxTempChart: PropTypes.func
};
