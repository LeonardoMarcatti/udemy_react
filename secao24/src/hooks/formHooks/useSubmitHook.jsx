import { useState } from 'react';

const useSubmitHook = (onSubmit, inputData) => {
   const [selectedImage, setSelectedImage] = useState(inputData?.image);
   const handleSelectImage = (image) => setSelectedImage(image)

   const handleSubmit = (event) =>  {
      event.preventDefault();
  
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
  
      onSubmit({ ...data, image: selectedImage });
    }

    return {handleSubmit, handleSelectImage, selectedImage}
}

export default useSubmitHook