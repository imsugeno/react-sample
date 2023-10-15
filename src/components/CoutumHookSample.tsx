import React, { useState, useCallback, useDebugValue } from "react";

// input向けにコールバックと現在の入力内容をまとめたフック
const useInput = () => {
    // 現在の入力内容を保持するstate
    const [state, setState] = useState("");
    // inputが変化したらフック内の状態を更新
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
    }, []);

    // デバッグ用に値を出力する
    // 値は開発者ツールのComponentsタブに表示される
    useDebugValue(`Input: ${state}`);

    // 現在の入力内容とコールバック関数だけ返す
    return [state, onChange] as const
}

export const Input = () => {
    const [text, onChangeText] = useInput();
    return (
        <div>
            <input type="text" value={text} onChange={onChangeText} />
            <p>{text}</p>
        </div>
    )
}