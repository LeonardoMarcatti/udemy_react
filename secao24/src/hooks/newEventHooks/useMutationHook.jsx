import {useMutation} from '@tanstack/react-query' //useQuery é usado para pegar dados. Para enviar usamos useMutation
import { useNavigate } from 'react-router-dom';
import {createNewEvent, queryClient} from '../../util/http.js'

const useMutationHook = () => {
   const navigate = useNavigate();
   const {mutate, isPending, isError, error} = useMutation({
      mutationFn: createNewEvent,     
      onSuccess: () => {
         queryClient.invalidateQueries({ //Necessário para reiniciar a função que recolhe os dados e atualiza a página
            queryKey: ['events']
         }) 
      navigate('/events')
      }
  })

  return {mutate, isPending, isError, error}
}

export default useMutationHook