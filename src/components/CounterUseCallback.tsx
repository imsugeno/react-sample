import React, { useState, useCallback } from 'react'

type ButtonProps = {
    onClick: () => void;
}

// DecrementButtonは通常の関数コンポーネントでボタンを表示する
const DecrementButton = (props: ButtonProps) => {
    const { onClick } = props;
    console.log('DecrementButton rendered');

    return <button onClick={onClick}>-</button>;
}

// IncrementButtonはメモ化された関数コンポーネントでボタンを表示する
const IncrementButton = React.memo((props: ButtonProps) => {
    const { onClick } = props;
    console.log('IncrementButton rendered');

    return <button onClick={onClick}>+</button>;
});

// DoubuleButtonはメモ化した関数コンポーネントでボタンを表示する
const DoubleButton = React.memo((props: ButtonProps) => {
    const { onClick } = props;
    console.log('DoubleButton rendered');

    return <button onClick={onClick}>2x</button>;
})

export const ParentUseCallback = () => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount((c) => c - 1);
    }
    const increment = () => {
        setCount((c) => c + 1)
    }
    // useCallbackを使って関数をメモ化する
    const double = useCallback(() => {
        setCount((c) => c * 2);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <DecrementButton onClick={decrement} />
            <IncrementButton onClick={increment} />
            <DoubleButton onClick={double} />
        </div>
    )
}