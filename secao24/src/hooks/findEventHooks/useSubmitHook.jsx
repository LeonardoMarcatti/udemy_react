
const useSubmitHook = (searchElement, setSearch) => {
   const handleSubmit = (event) => {
      event.preventDefault();
      setSearch(searchElement.current.value)
    }

    return handleSubmit
}

export default useSubmitHook