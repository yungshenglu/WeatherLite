import useAxios from 'axios-hooks';


// GET: 取得該地天氣資訊
export default function useWeather(query: string) {
  const [{ data, loading, error }, refetch] = useAxios({
      url: `http://localhost:9527/api/location=${query}`,
      method: 'GET',
    }
  );

  return [{ weatherData: data, isLoading: loading, isError: error !== null }, refetch]
}