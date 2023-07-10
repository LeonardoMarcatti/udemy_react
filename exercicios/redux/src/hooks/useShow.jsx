import { useSelector, useDispatch} from "react-redux";
import {showActions} from '../store/store'

const useShow = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.show.show)
  const toggleShow = () => dispatch(showActions.toggleShow())

  return {show, toggleShow}
}

export default useShow;