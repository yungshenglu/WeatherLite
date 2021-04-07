import useAxios from 'axios-hooks';


// GET: 取得該地點的 WOEID
export default function useLocation(query: string) {
  const [{ data, loading, error }, refetch] = useAxios({
      url: `http://localhost:9527/api/woeid=${query}`,
      method: 'GET',
    }
  );

  return [{ locationData: data, isLoading: loading, isError: error !== null }, refetch]
}