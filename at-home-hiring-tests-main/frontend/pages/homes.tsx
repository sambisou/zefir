import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { HomeList } from '../components/HomeList';
import { Layout } from '../components/Layout';
import { AnimatedLoader } from '../components/AnimatedLoader';

const Homes: NextPage = () => {
  const [homes, setHomes] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetch('api/home')
      .then((res) => res.json())
      .then((data: Home[]) => setHomes(data));
    setLoading(false);
  }, [homes]);

  if (isLoading) return <AnimatedLoader />
  if (!homes) return <p>No home to show, please reload the page!</p>

  return (
    <Layout>
      <HomeList homes={homes} />
    </Layout>
  );
};


export default Homes;
