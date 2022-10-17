import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get(url)
    .then(({ data }) => setData(data))
    .catch((error) => setData(error))
  }, [url]);
  return { data };
};
