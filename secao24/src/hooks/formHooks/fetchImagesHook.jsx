import {useQuery} from '@tanstack/react-query'
import {fetchSelectableImages} from '../../util/http.js'

const useFetchImages = () => {
   const {data, isPending, isError} = useQuery({queryKey: ['images'], queryFn: fetchSelectableImages})
   return {data, isPending, isError}
}

export default useFetchImages