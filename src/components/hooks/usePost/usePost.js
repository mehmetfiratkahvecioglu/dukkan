import {useState} from 'react';
import axios from 'axios';

const usePost = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const post = (url, apiData) => {
    setLoading(true);
    axios
      .post(url, apiData)
      .then(response => {
        setLoading(false);
        setData(response.data);
      })
      .catch(err => {
        setError(err.message);

        setLoading(false);
      });
  };

  return {error, loading, data, post};
};

export default usePost;
