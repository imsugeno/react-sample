// Hello はクリックするとアラートを出すテキストを返します
const Hello = () => {
    const onClick = () => {
        alert('Hello');
    }
    const text = 'Click me';

    return (
        <div onClick={onClick}>{text}</div>
    )
};

export default Hello;