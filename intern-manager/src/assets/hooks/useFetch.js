import fetchApi from "../fetchApi";

const useFetch = (endpoint, method = 'GET', options) => {
  let data = null;
  let error = null;
  const execute = async (body) => {
    const res = await fetchApi(endpoint, {
      ...options,
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: method !== 'GET' ? JSON.stringify(body) : null,
    });

    if (res.err) {
      error = res.err;
    }

    if (res) {
      data = res;
    }

    return {
      data,
      error
    };
  }

  return {
    execute,
  };
};

export default useFetch;