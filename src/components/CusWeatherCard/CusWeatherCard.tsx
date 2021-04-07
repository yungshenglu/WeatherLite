import { useState, useEffect } from 'react';
import dayjs from 'dayjs'
import AntSkeleton from '@C/AntSkeleton';
import CusInputSearch from '@C/CusInputSearch';
import CusDigestText from '@C/CusDigestText';
import CusCurrentWeather from '@C/CusCurrentWeather';
import CusPressureText from '@C/CusPressureText';
import CusWindSpeedText from '@C/CusWindSpeedText';
import CusHumidityText from '@C/CusHumidityText';
import CusRefreshText from '@C/CusRefreshText';
import CusBarChart from '@C/CusBarChart';
import CusPieChart from '@C/CusPieChart';
import {
  StyledWeatherCard,
  StyledMetaBlock
} from './style'


export function CusWeatherCard() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [lastRefresh, setLastRefresh] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [todayData, setTodayData] = useState<any>(null);
  const [minTempList, setMinTempList] = useState<any>([]);
  const [maxTempList, setMaxTempList] = useState<any>([]);
  const [humidityList, setHumidityList] = useState<any>([]);
  const [showMinTempChart, setShowMinTempChart] = useState(true);
  const [showMaxTempChart, setShowMaxTempChart] = useState(false);
  const [showHumidityChart, setShowHumidityChart] = useState(false);

  useEffect(() => {
    if (weatherData) {
      let maxTemp: any = [];
      let minTemp: any = [];  
      let humidity: any[] = [];
      let humidityTotal = 0;
      for (let i = 0; i < weatherData.length; ++i) {
        const date: string = weatherData[i]['applicable_date'];
        const label: string = `${date.split('-')[1]}/${date.split('-')[2]}`;

        maxTemp.push({ 
          label: label,
          value: weatherData[i]['max_temp']
        });
        minTemp.push({ 
          label: label,
          value: weatherData[i]['min_temp']
        });
        humidity.push({
          label: label,
          value: weatherData[i]['humidity']
        });
        humidityTotal += weatherData[i]['humidity'];
      }
      setMaxTempList(maxTemp);
      setMinTempList(minTemp);

      // Processing humidity data
      humidity = humidity?.map((item: any) => {
        return { 
          label: item.label,
          value: item.value / humidityTotal * 100
        };
      });
      setHumidityList(humidity);
    }

    const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
    setLastRefresh(now);
  }, [weatherData]);

  // Event handler
  const handleFetchData = (data: any, isLoading: boolean) => {
    setLoading(isLoading);
    setWeatherData(data?.consolidated_weather);
    setTodayData(data?.consolidated_weather[0]);
  };

  const handleMaxTempChart = () => {
    setShowMaxTempChart(!showMaxTempChart);
    setShowMinTempChart(false);
    setShowHumidityChart(false);
  };

  const handleMinTempChart = () => {
    setShowMinTempChart(!showMinTempChart);
    setShowMaxTempChart(false);
    setShowHumidityChart(false);
  };

  const handleHumidityChart = () => {
    setShowHumidityChart(!showHumidityChart);
    setShowMinTempChart(false);
    setShowMaxTempChart(false);
  };

  return (
    <div>
      <StyledWeatherCard>
        {/* 地區 */}
        <CusInputSearch
          onFetchData={handleFetchData}
        />
        {/* 氣象描述 */}
        <CusDigestText>
          {
            isLoading
            ? (
                <AntSkeleton
                  active={true}
                  rounded={true}
                  title={true}
                  paragraph={false}
                  width='small'
                />
              )
            : todayData?.weather_state_name
          }
        </CusDigestText>
        {/* 當前氣象 (氣溫) */}
        <CusCurrentWeather
          currTemp={todayData?.the_temp}
          minTemp={todayData?.min_temp}
          maxTemp={todayData?.max_temp}
          weatherType={todayData?.weather_state_abbr}
          onMinTempChart={handleMinTempChart}
          onMaxTempChart={handleMaxTempChart}
        />
        <StyledMetaBlock>
          {/* 氣壓 */}
          <CusPressureText
            text={todayData?.air_pressure}
          />
          {/* 風速 */}
          <CusWindSpeedText 
            text={todayData?.wind_speed}
          />
          {/* 濕度 */}
          <CusHumidityText 
            text={todayData?.humidity} 
            onClick={handleHumidityChart}
          />
        </StyledMetaBlock>
        {/* 最後更新時間 */}
        <CusRefreshText text={lastRefresh} />
      </StyledWeatherCard>
      <StyledWeatherCard>
        <CusBarChart
          visible={showMinTempChart ? true: false}
          data={maxTempList}
          title="Min Temperature"
        />
        <CusBarChart
          visible={showMaxTempChart ? true: false}
          data={minTempList}
          title="Max Temperature"
        />
        <CusPieChart 
          visible={showHumidityChart ? true: false} 
          data={humidityList} 
          title="Humidity"
        />
      </StyledWeatherCard>
    </div>
  );
};
