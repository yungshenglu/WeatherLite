import { useState, useEffect, useRef, useCallback } from 'react';
import Layout from '@L/index';
import CusWeatherCard from '@C/CusWeatherCard';
import AntNotification from '@C/AntNotification';


export function Home() {
  // const [{ data, isLoading, isError, hasMorePost }]: any = useFetchPostList(beforePostId)

  // useEffect(() => {
  //   if (isError) {
  //     AntNotification({
  //       message: '系統錯誤',
  //       description: '目前連線異常，請稍後再試。'
  //     });
  //   }
  // }, [isError]);

  // Render
  return (
    <Layout>
      <CusWeatherCard />
    </Layout>
  );
}
