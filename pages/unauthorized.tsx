import { useRouter } from 'next/router';
import React from 'react';
import Layout from '@/components/Layout';

const Unauthorized = () => {
  const router = useRouter();
  const { message } = router.query;
  return (
    <Layout title="Página não Autorizada">
      <div className=''>
        <div className="text-xl lg:text-2xl font-semibold">Acesso não permitido</div>
      {message && <div className="text-red-700 text-lg lg:text-xl">{message}</div>}
      </div>
      
    </Layout>
  );
};

export default Unauthorized;