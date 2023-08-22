import request from '@/services/config/axios';

const getApi = (params: any) => {
  return request({
    url: '/get',
    method: 'GET',
    params
  });
};

const postApi = (data: any) => {
  return request({
    url: '/post',
    method: 'POST',
    data
  });
};

const putApi = (data: any) => {
  return request({
    url: '/put',
    method: 'PUT',
    data
  });
};

const deleteApi = (id: any) => {
  return request({
    url: `/delete/${id}`,
    method: 'DELETE'
  });
};

const sampleApi = {
  getApi,
  postApi,
  putApi,
  deleteApi
};

export default sampleApi;
