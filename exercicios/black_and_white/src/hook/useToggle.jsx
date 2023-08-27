import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../store/store'

const useToggle = () => {
  const dispatch = useDispatch()
  const status = useSelector(state => state.status)
  const toggleStatus = () => dispatch(toggle())

  return {status, toggleStatus}
}

export default useToggle;