import React from "react";
import GlobalStyle from "./styles/global";

import SignIn from "./pages/signin";

const App: React.FC = () => {
    return (
        <>
            <SignIn />
            <GlobalStyle />
        </>
    );
};

export default App;
