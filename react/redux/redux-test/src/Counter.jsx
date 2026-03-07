import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/counterSlice';

function Counter() {

    const count = useSelector((state) => state.counter.count);

    console.log(count)

    const dispatch  = useDispatch();

    // console.log(count)
  return (
    <div>
        <h2>Counter: {count}</h2>

        <button onClick={() => dispatch(increment())} >
            Increment
        </button>

        <button onClick={() => dispatch(decrement())}>
            Decrement
        </button>
    </div>
  )
}

export default Counter