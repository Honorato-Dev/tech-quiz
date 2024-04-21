import { useRouter } from 'next/router';
import React from 'react';
import Layout from '@/components/Layout';

const Unauthorized = () => {
  const router = useRouter();
  const { message } = router.query;
  return (
    <Layout title="Página não Autorizada">
      <div className="text-xl">Not allowed access</div>
      {message && <div className="text-red">{message}</div>}
    </Layout>
  );
};

export default Unauthorized;
