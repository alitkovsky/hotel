'use client';

import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('@components/Header'), { ssr: false });

import Header from '@components/Header';

const Home = () => {
  return (
    <>
      <DynamicHeader />
    </>
  )
}

export default Home;