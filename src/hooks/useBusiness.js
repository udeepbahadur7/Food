import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';

function useBusiness() {
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const searchApi = async term => {
    try {
      setErrorMessage('');
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose',
        },
      });
      setBusinesses(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };
  useEffect(() => {
    searchApi('pasta');
  }, []);
  return [searchApi, errorMessage, businesses];
}

export default useBusiness;
