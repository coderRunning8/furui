
export default ctx => {
  // 测试
  ctx.$axios.defaults.baseURL = 'http://116.62.63.151:8110';
  // 生产
  // ctx.$axios.defaults.baseURL = 'http://furise.com:8110';
  // ctx.$axios.defaults.baseURL = 'http://47.98.146.53:8110';
  // 习久福
  // ctx.$axios.defaults.baseURL = 'http://192.168.0.154:8888';
};
