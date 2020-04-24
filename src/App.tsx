import React from "react";
import GlobalStyle from "./styles/global";

import SignUp from "./pages/signup";

const App: React.FC = () => {
    return (
        <>
            <SignUp />
            <GlobalStyle />
        </>
    );
};

export default App;
