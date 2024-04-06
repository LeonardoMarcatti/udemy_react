const useFormatDateHook = (data) => {
   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   const today  = new Date(`${data} 00:00:00`);
   return today.toLocaleDateString('en-US', options)
 }

 export default useFormatDateHook