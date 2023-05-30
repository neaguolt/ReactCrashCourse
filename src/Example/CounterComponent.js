import {increment, decrement} from './counterSlice'
import { useSelector, useDispatch } from 'react-redux';

const CounterComponent = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch= useDispatch();
    
    return (
        <div>
            <button onClick={()=> dispatch(increment())}>
                Increment
            </button>
            <p>Counter:{counter}</p>
            <button onClick={()=> dispatch(decrement())}>
                Decrement
            </button>
        </div>
    )
}


export default CounterComponent;