import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Lki6lCI2EkM00lWI4IYg_muOB-otziaeFJ5RoWG9tozBaoqshHXYdDUS3wcbzmea33vOSkEiDBYDSdziwQL8wqBsxAHysfuWq6ZF2mxAospKopXpTYn-I_KUbWePXnYx',
  },
});
