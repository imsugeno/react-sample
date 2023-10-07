import React, { memo, useState} from "react";

type FizzProps = {
    isFizz: boolean;
};

// Fizzは通常の関数コンポーネント
// isFizzがtrueのときはFizzと表示し、それ以外は何も表示しない
// isFizzの変化に関わらず、親が再描画されるとFizzも再描画される
const Fizz = (props: FizzProps) => {
    const { isFizz } = props;
    console.log('Fizzが再描画されました, isFizz=$(isFizz)');
    return <span>{isFizz ? 'Fizz' : ''}</span>
};

type BuzzProps = {
    isBuzz: boolean;
};

// Buzzはメモ化された関数コンポーネント
// isBuzzがtrueのときはBuzzと表示し、それ以外は何も表示しない
// 親コンポーネントが再描画されても、isBuzzが変化しない限りBuzzは再描画されない
const Buzz = memo<BuzzProps>((props) => {
    const { isBuzz } = props;
    console.log('Buzzが再描画されました, isBuzz=$(isBuzz)');
    return <span>{isBuzz ? 'Buzz' : ''}</span>
});

export const Parent = () => {
    const [count, setCount] = useState(0);
    const isFizz = count % 3 === 0;
    const isBuzz = count % 5 === 0;

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <p>{count}</p>
            <Fizz isFizz={isFizz} />
            <Buzz isBuzz={isBuzz} />
        </div>
    )
};