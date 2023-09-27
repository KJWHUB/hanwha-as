import request from '@/services/config/axios.ts';

const getApi = (params: any) =>
  request({
    url: '/get',
    method: 'GET',
    params
  });

const postApi = (data: any) =>
  request({
    url: '/post',
    method: 'POST',
    data
  });

const putApi = (data: any) =>
  request({
    url: '/put',
    method: 'PUT',
    data
  });

const deleteApi = (id: any) =>
  request({
    url: `/delete/${id}`,
    method: 'DELETE'
  });

const sampleApi = {
  getApi,
  postApi,
  putApi,
  deleteApi
};

export default sampleApi;
