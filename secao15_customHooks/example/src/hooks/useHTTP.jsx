import {useState, useCallback} from "react";

const useHTTP = (appyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestSetup) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestSetup.url, {
          method: requestSetup.method ? requestSetup.method : 'get',
          headers: requestSetup.headers ? requestSetup.headers : {},
          body: requestSetup.body? JSON.stringify(requestSetup.body) : null
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      appyData(data)
      
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, [appyData]);

  return {isLoading, error, sendRequest}
}

export default useHTTP;