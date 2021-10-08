import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../app/counterSlice';
import styles from './Counter.module.css';

export const Counter = () => {
  // const [count, setCount] = useState(2);
  const count = useSelector((state) => state.counter.count);

  const [incrementAmount, setIncrementAmount] = useState(2);
  const incrementAmountNumber = Number(incrementAmount); // make sure that input value is in Number format

  const dispatch = useDispatch();

  return (
    <div className={styles.counterContainer}>
      <h3>The count is: {count}</h3>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className={styles.button}
          aria-label='Decrement by amount'
          onClick={() => dispatch(incrementByAmount(incrementAmountNumber))}
        >
          Increment by:
        </button>
        <input
          type='number'
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
    </div>
  );
};
