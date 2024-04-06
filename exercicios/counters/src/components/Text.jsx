import React, {memo} from "react";

const Text = memo(() => {
   console.log('Text');
   return <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, commodi! Perferendis possimus ex consequuntur modi quibusdam, reprehenderit, fugiat, porro deleniti recusandae earum ratione minima dolores enim hic dolore dolorem ut.</p>
})

export default Text