// import {useMutation} from '@tanstack/react-query'
// import {updateEvent, queryClient} from '../../util/http.js'
import { useNavigate } from 'react-router-dom';

const useSubmitHook = (params, submit) => {
   const navigate = useNavigate();
   const handleClose = () => navigate('../')   

   // const {mutate} = useMutation({
   //    mutationFn: updateEvent,
   //    //onMutate é um optimistic update. Os dados são mudados instantanemante e caso haja um erro postarior os dados voltam ao que eram automaticamente.
   //    onMutate: async (data) => {
   //       const newEvent = data.event
   //       // Usado para cancelar outros dados que são enviados e não receber dados de resposta antigos
   //       await queryClient.cancelQueries({queryKey: ['events', params.id]}) 
   //       //Precisamos dos dados antigos caso aconteça alguma falha no back end
   //       const oldData = queryClient.getQueryData(['events', params.id])

   //       queryClient.setQueryData(['events', params.id], newEvent)
   //       return {oldData}
   //    },

   //    onError: (error, data, context) => {
   //       queryClient.setQueryData(['events', params.id], context.oldData)
   //    },

   //    //Ao término da mudança fazemos a invalidação das queries para temos certeza de que os dados entre o front e o back estão sincronizados
   //    onSettled: () => {
   //       queryClient.invalidateQueries(['events', params.id])
   //    }

   // })

   const handleSubmit = (formData) => {
      submit(formData, {method: 'put'})
   }

   return {handleClose, handleSubmit}

}

export default useSubmitHook