import { useState } from "react";

type CounterProps = {
    initialValue: number;
};

const CounterUseState = (props: CounterProps) => {
    const { initialValue } = props;
    // カウントを保持する１つの状態をuseState()で宣言する。引数には初期値を指定する。
    // countが現在の状態、setCountが状態を更新するための関数。
    const [count, setCount] = useState<number>(initialValue);

    return (
        <div>
            {/* setCountを呼ぶことで状態を更新する。 */}
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
        </div>
        )
}

export default CounterUseState;