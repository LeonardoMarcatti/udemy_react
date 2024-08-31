import { useRef } from "react"

const useSaveProject = (onSaveProject) => {
   const titleRef = useRef('')
   const dateRef = useRef('')
   const descriptionRef = useRef('')

   const clearData = () => {
      titleRef.current.value = ''
      dateRef.current.value = ''
      descriptionRef.current.value = ''
   }

   const handleData = () => {
      const data =  {
         title: titleRef.current.value.trim(),
         date: dateRef.current.value.trim(),
         description: descriptionRef.current.value.trim(),
         id:  Math.random(),
         tasks: []
      }

      if (data.title == '' || data.date == '' || data.description == '') {
         alert('No empty values!')
         return null
      }

      onSaveProject(data)
      clearData()
   }

   return {handleData, titleRef, dateRef, descriptionRef}
}

export default useSaveProject