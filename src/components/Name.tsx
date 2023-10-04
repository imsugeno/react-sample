import React from "react";

// 名前を入力するためのテキストボックスを返す
const Name = () => {
    // input要素のonchnageイベントに対するコールバック関数
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    return (
        <div style={{padding: '16px', backgroundColor: 'grey'}}>
            <label htmlFor="name">名前</label>
            <input id="name" className="input-name" type="text" onChange={onChange} />
        </div>
    );
}

export default Name;