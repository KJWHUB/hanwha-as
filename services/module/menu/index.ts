import { getDoc, doc, setDoc } from 'firebase/firestore';

import db from '@/firebaseMySet';
import request from '@/services/config/axios.ts';

const getList = (params: any) =>
  request({
    url: '/menuList',
    method: 'GET',
    params
  });

// 메뉴 리스트 조회
const getMenuList = async () => {
  const docRef = doc(db, 'main', 'menu');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
    return docSnap.data().list;
  }
  // docSnap.data() will be undefined in this case
  console.log('No such document!');
  return [];
};

const setMenuList = async () => {
  try {
    const docRef = doc(db, 'main', 'menu');
    await setDoc(docRef, {
      list: [
        {
          id: 'MENU-001',
          text: 'Who We Are',
          path: '/whoweare',
          down: []
        },
        {
          id: 'MENU-002',
          text: 'Why We Exist',
          path: '/whyweexist',
          down: []
        },
        {
          id: 'MENU-003',
          text: 'What We Do',
          path: '/whatwedo',
          down: []
        },
        {
          id: 'MENU-004',
          text: 'IR',
          path: '/ir',
          down: []
        },
        {
          id: 'MENU-005',
          text: 'media',
          path: '/media',
          down: []
        },
        {
          id: 'MENU-006',
          text: 'esg',
          path: '/esg',
          down: []
        },
        {
          id: 'MENU-007',
          text: 'careers',
          path: '/careers',
          down: []
        }
      ]
    });
  } catch (error) {
    console.log(error);
  }
};

const menuApi = {
  getList,
  getMenuList,
  setMenuList
};

export default menuApi;
