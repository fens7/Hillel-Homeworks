import { useDispatch, useSelector } from 'react-redux';
import { store } from '../engine/store';
import { counterSelector } from '../components/Counter/selector';
import { increment, decrement } from '../components/Counter/slice';

function ButtonInc() {
    const dispatch = useDispatch();
    const handleClick = () => dispatch(increment())
    return (
        <button onClick={handleClick} id="increment">+</button>
    )
}

function ButtonDec() {
    const dispatch = useDispatch();
    const handleClick = () => dispatch(decrement())
    return (
        <button onClick={handleClick} id="decrement">-</button>
    )
}

function Counter() {
    const value = useSelector(counterSelector.value);
    return (
        <span id="value">{value}</span>
    )
}


function CounterPage() {

    return(
        <div style={{textAlign: 'center'}}>
            <p>
                Clicked: <Counter/>
                <ButtonInc/>
                <ButtonDec/>
            </p>
        </div>
    )
}

export default CounterPage