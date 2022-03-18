import type { NextPage } from 'next';
import { getRandomHomes } from '../business/getRandomHomes';

import { HomeList } from '../components/HomeList';
import { Layout } from '../components/Layout';

interface Props { homes: Home[] }

const Index: NextPage<Props> = ({ homes }: Props) => {
  <Layout>
    <HomeList homes={homes} />
  </Layout>
};

export async function getStaticProps() {
  return {
    props: {
      home: getRandomHomes()
    }
  };
}

export default Index;