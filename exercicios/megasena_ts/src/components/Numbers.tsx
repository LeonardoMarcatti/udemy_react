import {useAppSelector} from '../store/hook';

const Numbers = () => {
   const sortedNumbers = useAppSelector(state => state.numbers.value)

   return (
      <div>
         <h1>{sortedNumbers.toString()}</h1>
      </div>
   )
}

export default Numbers