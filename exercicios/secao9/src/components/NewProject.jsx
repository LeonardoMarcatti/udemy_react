import React, {memo, useRef} from "react";
import Input from './UI/Input'
import TextArea from './UI/TextArea'
import Modal from "./Modal";

const NewProject = memo(function NewProject({onHandleCancel, onHandleSaveProject}) {
   const titleRef = useRef()
   const descriptionRef = useRef()
   const dateRef = useRef()
   const modalRef = useRef()
   const errorModalRef = useRef()

   const clearFields = () => {
      titleRef.current.value = ''
      descriptionRef.current.value = ''
      dateRef.current.value = ''
   }

   const handleSave = () => {
      const title = titleRef.current.value
      const description = descriptionRef.current.value
      const date = dateRef.current.value

      if (title.trim() === '' || description.trim() === '' || date.trim() === '') {
         errorModalRef.current.open()
         return null;
      }

      onHandleSaveProject({title, description, date})
      clearFields()
      modalRef.current.open()
   }

   return <div className="flex flex-col w-1/2">
         <Modal ref={modalRef} error={false}>
               <h3 className="text-xl text-center">Success!</h3>
               <p className="text-center">Project added!</p>
         </Modal>
         <Modal ref={errorModalRef} error={true}>
            <h2 className="text-2xl text-center">Error!</h2>
            <p className="text-center">Check all data fields!</p>
         </Modal>
      <ol className="flex flex-row justify-end">
         <li className="ml-2">
            <button type="button" className="px-6 py-2 rounded-md text-stone-50 bg-lime-800 hover:bg-lime-950" onClick={handleSave}>Save</button>
         </li>
         <li  className="ml-2">
            <button type="button" className="px-6 py-2 rounded-md text-stone-50 bg-orange-800 hover:bg-orange-950" onClick={onHandleCancel}>Cancel</button>
         </li>
      </ol>
      <div className="">
         <Input type="text" label="Title" data="title" ref={titleRef} />
         <TextArea label="Description" data="description" ref={descriptionRef} />
         <Input type="date" label="Date" data="dueDate" ref={dateRef} />
      </div>
   </div>
})

export default NewProject