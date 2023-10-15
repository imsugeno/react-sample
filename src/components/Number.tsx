import React, { useState, useLayoutEffect } from 'react';

export const Number = () => {
    const [count, setCount] = useState(0);
    const onClickZero = () => setCount(0);

    useLayoutEffect(() => {
    if (count === 0) setCount(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
    }, [count])
    return (
    <div>
        <p>{count}</p>
        <button onClick={onClickZero}>0にする</button>
    </div>
    );
};