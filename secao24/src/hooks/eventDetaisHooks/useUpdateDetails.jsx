import {useMutation} from '@tanstack/react-query'
import {deleteEvent, queryClient} from '../../util/http.js'
import { useNavigate } from 'react-router-dom';

const useUpdateDetails = () => {
   const navigate = useNavigate()
   const {mutate, isPending: isDeleting, isError: errorDeleting, error: deleteError} = useMutation({
      mutationFn: deleteEvent,
      onSuccess: () => {
         queryClient.invalidateQueries({
            queryKey: ['events'],
            refetchType: 'none' //Como ainda estamos na página de detalhes precisamos impedir que os dados sejam coletados novamente 
         })
         navigate('/events')
      }
   })

   return {mutate, isDeleting, errorDeleting, deleteError}
}

export default useUpdateDetails