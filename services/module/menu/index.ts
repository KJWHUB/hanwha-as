import request from '@/services/config/axios';

const getList = (params: any) => {
  return request({
    url: '/menuList',
    method: 'GET',
    params
  });
};

const menuApi = {
  getList
};

export default menuApi;
