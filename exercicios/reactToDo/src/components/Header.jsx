import React, {memo} from "react";

const Header = memo(function header({onCreateProject}) {
   return <header className='w-full px-4 bg-zinc-600 flex flex-row flex-nowrap justify-between'>
         <h1 className='text-4xl'>React ToDo</h1>
         <button type="button" className='px-4 py-2 bg-zinc-700 rounded-md text-white' onClick={onCreateProject}>Add Project</button>
      </header>
})


export default Header