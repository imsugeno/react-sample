import { useReducer } from "react";

// Reducerが受け取るactionの型を定義
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET';

// 現在の状態とactionに基づいて新しい状態を返す
const reducer = (count: number, action: Action): number => {
    switch (action) {
        case 'DECREMENT':
            return count - 1;
        case 'INCREMENT':
            return count + 1;
        case 'DOUBLE':
            return count * 2;
        case 'RESET':
            return 0;
        default:
            throw new Error();
    }
};

type CounterProps = {
    initialValue: number;
};

const CounterUseReducer = (props: CounterProps) => {
    const { initialValue } = props;
    const [count, dispatch] = useReducer(reducer, initialValue);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch('DECREMENT')}>-</button>
            <button onClick={() => dispatch('INCREMENT')}>+</button>
            <button onClick={() => dispatch('DOUBLE')}>*</button>
            <button onClick={() => dispatch('RESET')}>RESET</button>
        </div>
    )
}

export default CounterUseReducer