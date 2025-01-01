export const fetchDataHelper = async (dispatch, setLoading, setData, setError, endpoint) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(`${endpoint}/index.json`);
      const data = await response.json();
      const { folders } = data
      const promises = folders.map(folder =>
        fetch(`${endpoint}/${folder}/info.json`).then(res => res.json())
      );
      const results = await Promise.all(promises);
      dispatch(setData(results));
    } catch (error) {
      dispatch(setError(error.toString()));
    } finally {
      dispatch(setLoading(false));
    }
  };