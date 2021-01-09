import { useState, useEffect } from 'react';
import axios from 'axios';

const INITIAL_STATE = {
  data: null,
  complete: false,
  pending: false,
  error: false,
  success: false,
};

function useFetch(fn){
  const [state, setState] = useState({
    ...INITIAL_STATE,
  });
  const [req, setReq] = useState();

  useEffect(() => {
    if (!req) return;
    setState({
      ...INITIAL_STATE,
      pending: true,
    });
    axios({ ...req, url: req.url })
      .then((res) =>
        setState({
          data: res.data,
          pending: false,
          error: false,
          complete: true,
          success: true,
        })
      )
      .catch((error) => {
        
        setState({
          data: null,
          pending: false,
          error: error.response ? error.response.data : error,
          complete: true,
          success: false,
        });
      });
  }, [req]);

  return { state, hit: (args) => setReq(fn(args)) };
}

export default useFetch;