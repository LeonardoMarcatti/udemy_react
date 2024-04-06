import {fetchEvent} from '../../util/http.js'
import {useQuery} from '@tanstack/react-query'

const useFetchDetails = (id) => {
   const {data} = useQuery({
      queryKey: ['events', id],
      //signal é um objeto que é automaticamente recebido pela função
      queryFn: ({signal}) => fetchEvent({id, signal}), enabled: id != null,
      staleTime: 10000
    })

    return {data}
}

export default useFetchDetails