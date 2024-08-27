import React, {useRef} from "react";
import Input from "./UI/Input";
import TextArea from "./UI/TextArea";
import Button from "./UI/Button";
import Modal from "./Modal";

const saveClass = 'px-6 py-2 rounded-md text-gray-100 font-bold bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 hover:text-stone-100'

const cancelClass = 'px-6 py-2 rounded-md text-gray-100 font-bold bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 hover:text-stone-100'

const backClass = 'px-5 py-2 rounded-md text-gray-100 font-bold rounded-mx border-yellow-400 text-yellow-400 border-2 hover:border-white  hover:bg-gradient-to-t hover:from-yellow-600 hover:to-yellow-400 hover:bg-yellow-400 hover:text-stone-100'

const NewProject = ({getBack, onAdd, onCancel}) => {
   const titleRef = useRef('')
   const descriptionRef = useRef('')
   const dueDateRef = useRef('')
   const modalError = useRef()
   const modalSuccess = useRef()

   const clearFields = () => {
      titleRef.current.value = ''
      descriptionRef.current.value = ''
      dueDateRef.current.value = ''
      onCancel()
   }

   const handleSaveProject = () => {
      const title = titleRef.current.value
      const description = descriptionRef.current.value
      const dueDate = dueDateRef.current.value

      if (title.trim() == '' || description.trim() =='' || dueDate.trim() == '') {
         modalError.current.open()
         return null
      }
      
      onAdd({title, description, dueDate})
      clearFields()
      modalSuccess.current.open()
   }
   
   return (
      <>
         <Modal ref={modalError} btnText="Close">
            <h2 className="text-xl font-bold text-stone-900 my-4">Invalid Inputs</h2>
            <p className="text-stone-900 mb-4">Check all fields. You forgot something here!</p>
         </Modal>
         <Modal ref={modalSuccess} btnText="Close">
            <h2 className="text-xl font-bold text-stone-900 my-4">Success</h2>
            <p className="text-stone-900 mb-4">You have created a new project!</p>
         </Modal>
         <div className="w-[35rem] mt-16">
            <Button type="button" className={backClass} onClick={getBack}>
               <i class="fa-solid fa-left-long"></i> Voltar
            </Button>
            <menu className="flex items-center justify-end gap-4 my-4">
               <li>
                  <Button type="button" className={cancelClass} onClick={clearFields}>Cancel</Button>
               </li>
               <li>
                  <Button type="button" className={saveClass} onClick={handleSaveProject}>Save</Button>
               </li>
            </menu>
            <div>
               <Input type="text" id="title" name="title" label="Title" ref={titleRef}/>
               <TextArea id="description" name="description" label="Description" ref={descriptionRef}/>
               <Input type="date" id="date" name="date" label="Due Date" ref={dueDateRef}/>
            </div>
         </div>
      </>
   )
}

export default NewProject