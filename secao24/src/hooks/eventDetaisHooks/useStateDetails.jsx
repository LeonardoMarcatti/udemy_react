import {useState}from 'react'

const useStateDetails = () => {
   const [deleting, setDeleting] = useState(false)
   const showModal = () => setDeleting(true)
   const hideModal = () => setDeleting(false)

   return {showModal, hideModal, deleting}
}

export default useStateDetails