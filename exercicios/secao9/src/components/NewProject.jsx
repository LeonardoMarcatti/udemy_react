import React, {memo} from "react";
import Input from './UI/Input'
import TextArea from './UI/TextArea'
import Button from "./UI/Button";

const NewProject = memo(function NewProject() {
   return <div className="flex flex-col w-1/2">
      <ol className="flex flex-row justify-end">
         <li className="ml-2">
            <Button type="button" className="px-6 py-2 rounded-md text-stone-50 bg-lime-800 hover:bg-lime-950">Save</Button>
         </li>
         <li  className="ml-2">
            <Button type="button" className="px-6 py-2 rounded-md text-stone-50 bg-orange-800 hover:bg-orange-950">Cancel</Button>
         </li>
      </ol>
      <div className="">
         <Input type="text" label="Title" data="title" />
         <TextArea label="Description" data="description" />
         <Input type="date" label="Date" data="dueDate" />
      </div>
   </div>
})

export default NewProject