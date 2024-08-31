import React, {memo} from "react";
import Input from './UI/Input'
import TextArea from './UI/TextArea'
import useSaveProject from "../hooks/useSaveProject";

const Form = memo(function Form({onSaveProject, onCancelProject}) {
   const {handleData, titleRef, dateRef, descriptionRef} = useSaveProject(onSaveProject)

   return <div className='w-full h-full flex flex-col justify-start items-center'>
            <h2 className='w-1/2 text-4xl text-center mb-10 border-b-2 border-stone-400'>Create Project</h2>
            <div className='w-full flex flex-col justify-center items-center'>
               <Input type="text" id="title" name="title" label="Title" ref={titleRef} />
               <Input type="date" id="date" name="date" label="Date" ref={dateRef} />
               <TextArea id="description" name="description" label="Description" ref={descriptionRef} />
               <span className='w-1/2 text-right mt-4'>
                  <button type="button" className='px-4 py-2 bg-green-300 rounded-md ml-2 hover:bg-green-400' onClick={handleData}>Save</button>
                  <button type="button" className='px-4 py-2 bg-red-300 rounded-md ml-2 hover:bg-red-400' onClick={onCancelProject}>Cancel</button>
               </span>
            </div>
         </div>
})

export default Form