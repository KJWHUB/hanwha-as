'use client';

import { useState } from 'react';

import menuApi from '@/services/module/menu/index';

export default function SampleComponent() {
  const [data, setData] = useState('');

  const getData = async () => {
    try {
      const params = {};
      const res = await menuApi.getList(params);

      setData(res.toString());

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button onClick={getData}>click get</button>

      <p>{data}</p>
    </>
  );
}