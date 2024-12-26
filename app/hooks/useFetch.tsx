type Callback = () => void;

const useFetch = () => {
  const fetchCsvdata = async (filePath: string, callback: Callback) => {
    const response = await fetch(filePath);
    const reader = response.body!.getReader;
    const result = await reader.read()
    const decoder = new TextDecoder('utf-8');
    const csvString = decoder.decode(result.value!)
  };




  return { fetchCsvdata };
};

export default useFetch;
