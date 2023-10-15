import React, { useContext } from "react";

type User = {
    id: number;
    name: string;
};

// ユーザーデータを保持するContextを作成する
const UserContext = React.createContext<User | null>(null);

const GrandChild = () => {
    // useContextを使って、ユーザーデータを取得する
    const user = useContext(UserContext);

    return user !== null ? <p>hello {user.name}</p> : null;
}

const Child = () => {
    const now = new Date();

    return (
        <div>
            <p>Current: {now.toLocaleString()}</p>
            <GrandChild />
        </div>
    )
}

export const ContextParent = () => {
    const user: User = {
        id: 1,
        name: "Alice"
    }
    return (
        // Contextに値を渡す
        <UserContext.Provider value={user}>
            <Child />
        </UserContext.Provider>
    )
}