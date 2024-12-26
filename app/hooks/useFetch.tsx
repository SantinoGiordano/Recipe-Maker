type Callback = () => void;

const useFetch = () => {
  const fetchCsvdata = async (filePath: string, callback: Callback) => {};

  return { fetchCsvdata };
};

export default useFetch;
