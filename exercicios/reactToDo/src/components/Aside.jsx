import React, {memo} from "react";

const Aside = memo(function Aside() {
   return <aside className='px-2 py-4 bg-zinc-100 border-r-4 border-stone-200'>
         <h2 className='text-2xl text-center border-b-2 border-stone-400'>Your Projects</h2>
      </aside>
});

export default Aside