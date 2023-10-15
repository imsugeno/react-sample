import React, { useState, useRef } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const UPLOAR_DELAY = 5000;

export const ImageUploader = () => {
    // 隠されたinput要素にアクセスするためのref
    const inputImageRef = useRef<HTMLInputElement | null>(null);
    // 選択されたファイルデータを保持するref
    const fileRef = useRef<File | null>(null);
    const [message, setMessage] = useState<string | null>('')

    // 「画像をアップロード」というテキストがクリックされた時のコールバック
    const onClickText = () => {
        if (inputImageRef.current !== null) {
            // inputのDOMにアクセスして、クリックイベントを発火させる
            inputImageRef.current.click();
        }
    }
    // ファイルが選択された後に呼ばれるコールバック
    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files !== null && files.length > 0) {
            // fileRef.currentに選択されたファイルデータを保持する
            // fileRef.currentが変化しても再描画はされない
            fileRef.current = files[0];
        }
    }
    // アップロードボタンがクリックされた時のコールバック
    const onClickUpload = async () => {
        if (fileRef.current !== null) {
            // ファイルデータを送信する
            await sleep(UPLOAR_DELAY);
            setMessage(`${fileRef.current.name}をアップロードしました`);
        }
    }

    return (
        <div>
            <p style={{ textDecoration: 'underline' }} onClick={onClickText}>
                画像をアップロード
            </p>
            <input
                type="file"
                ref={inputImageRef}
                onChange={onChangeImage}
                style={{ visibility: 'hidden' }}
            />
            <br />
            <button onClick={onClickUpload}>アップロード</button>
            {message !== null && <p>{message}</p>}
        </div>
    );
}