import React from "react";
import GlobalStyle from "./styles/global";

import SignIn from "./pages/signin";
import { AuthProvider } from "./hooks/Auth";

const App: React.FC = () => {
    return (
        <>
            <AuthProvider>
                <SignIn />
            </AuthProvider>
            <GlobalStyle />
        </>
    );
};

export default App;
