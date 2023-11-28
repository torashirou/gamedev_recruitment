const fetchApi = async (endpoint, options) => {
  const res = await fetch(endpoint, options);

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  try {
    const json = await res.json();
    return json;
  } catch(err) {
    console.warn('Response is not a JSON');
    // throw new Error(err);
    return {};
  }
}

export default fetchApi;