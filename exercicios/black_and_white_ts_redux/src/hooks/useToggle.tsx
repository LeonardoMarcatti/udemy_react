import { useAppSelector } from '../store/hooks';

interface Props {
   txt: string
   className: string
}

const useToggle = () => {
   const mode = useAppSelector(state => state.pageMode)

   let props: Props = {
      txt: '',
      className: ''
    }

   if (mode) {
      props.txt = 'Black Mode'
      props.className = 'btn btn-danger'
    } else {
      props.txt = 'White Mode'
      props.className = 'btn btn-success'
    }
    return {mode, props}

}


export default useToggle
