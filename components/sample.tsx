'use client';

import { useState } from 'react';

import menuApi from '@/services/module/menu/index.ts';

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

  const clickAdd = async () => {
    await menuApi.setMenuList();
  };

  return (
    <>
      <button type="button" onClick={getData}>
        click get
      </button>
      <button type="button" onClick={clickAdd}>
        click add
      </button>

      <p>{data}</p>
    </>
  );
}
