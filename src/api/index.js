import axios from 'axios';

const $http = axios.create( {
  baseURL: 'http://localhost:3000',
  timeout: 9000
});

// 商家信息
export const getSeller =  (redata) => $http.get('/api/seller',{params: redata}).then( rsdata => rsdata.data.data).catch( err => err)

// 商品列表
export const getGoods = (redata) => $http.get('/api/goods', { params: redata }).then( rsdata => rsdata.data.data).catch(err => err);

// 评价
export const getRatings = (redata) => $http.get('/api/ratings', { params: redata }).then( rsdata => rsdata.data).catch(err => err);
