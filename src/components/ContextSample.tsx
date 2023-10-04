import React from "react";

// Titleを渡すためのContextを作成
const TitleContext = React.createContext('');

// Titleコンポーネントの中でContextの値を参照
const Title = () => {
    // Consumerを使ってContextの値を参照
    return (
        <TitleContext.Consumer>
            { /* Consumer直下に関数を置いて、Contextの値を参照 */ }
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            { /* HeaderからTitleへは何も渡さない */ }
            <Title />
        </div>
    )
}

// Pageコンポーネントの中でContextに値をセット
const Page = () => {
    const title = 'React Book';

    return (
        // ProviderでContextの値をセット
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    )
}

export default Page;