import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import AntNotification from '@C/AntNotification';
import useLocation from '@H/useLocation';
import useWeather from '@H/useWeather';
import { StyledSearch } from './style'

export function CusInputSearch({ onFetchData }: any) {
  const [searchQuery, setSearchQuery] = useState('Taipei');

  const [{ locationData, isLocationLoading, isLocationError }]: any = useLocation(searchQuery);
  
  const woeid = useMemo(() => {
    return  locationData 
      ? locationData[0].woeid
      : '';
  }, [locationData]);

  const [{ weatherData, isWeatherLoading, isWeatherError }]: any = useWeather(woeid);

  useEffect(() => {
    if (isLocationError || isWeatherError) {
      AntNotification({
        message: '系統錯誤',
        description: '目前連線異常，請稍後再試。'
      });
    }
  }, [isLocationError, isWeatherError])

  useEffect(() => {
    onFetchData(weatherData, isLocationLoading || isWeatherLoading);
  }, [weatherData, onFetchData]);

  // Event handler
  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <StyledSearch
      placeholder='Location'
      size='large'
      defaultValue={searchQuery}
      onSearch={handleSearch}
    />
  );
};

CusInputSearch.prototype = {
  onFetchData: PropTypes.func
};
