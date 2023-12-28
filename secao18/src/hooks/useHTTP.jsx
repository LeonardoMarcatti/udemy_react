import { useState, useEffect, useCallback } from "react"

const sendHTTPRequest = async (url, config) => {
   const response = await fetch(url, config)
   const data = await response.json()

   if (!response.ok) {
      throw new Error(response.message || 'Something went wrong')
   }
   console.log(response);
   return data;
}

const useHTTP = (url, config, initialData) => {
   const [errorState, setErrorState] = useState()
   const [isLoading, setIsLoading] = useState(false)
   const [data, setData] = useState(initialData)

   const clearData = () => setData(initialData)

   const sendRequest = useCallback(async (payload) => {
      setIsLoading(true)
      try {
         const data = await sendHTTPRequest(url, {...config, body: payload})
         setData(data)
         
      } catch (error) {
         setErrorState(error.message || 'Something went wrong')
      }
      setIsLoading(false)
   }, [url, config])

   useEffect(() => {
      if ((config && (config.method == 'get' || !config.method)) || !config) {
         sendRequest()
      }
   }, [sendRequest, config])

   return {data, isLoading, errorState, sendRequest, clearData}
}

export {useHTTP}