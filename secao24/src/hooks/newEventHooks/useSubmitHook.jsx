
const useSubmitHook = (mutate) => {
   const handleSubmit = (formData) => {
      mutate({event: formData})
    }

    return handleSubmit
}

export default useSubmitHook