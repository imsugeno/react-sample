import React, { useState, useRef, useImperativeHandle } from "react";

const Child = React.forwardRef((props, ref) => {
    const [message, setMessage] = useState<string | null>(null);

    // useImperativeHandleを使って、親のrefから参照できる値を指定
    useImperativeHandle(ref, () => ({
        showMessage: () => {
            const date = new Date();
            const message = `現在時刻は${date.toLocaleString()}です`;
            setMessage(message);
        },
    }))

    return <div>{message !== null ? <p>{message}</p> : null}</div>
})

export const ParentUseImperativeHandle = () => {
    // Childコンポーネントのrefを保持する
    const childRef = useRef<{ showMessage: () => void } | null>(null);

    const onClick = () => {
        if (childRef.current !== null) {
            // Childコンポーネントのrefを使って、ChildコンポーネントのshowMessageを呼び出す
            childRef.current.showMessage();
        }
    }

    return (
        <div>
            <Child ref={childRef} />
            <button onClick={onClick}>ボタン</button>
        </div>
    )
}