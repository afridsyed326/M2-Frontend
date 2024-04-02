"use client";
//REDUX-TOOLKIT
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";


interface ProviderProp {
    children: React.ReactNode;
}

export function Provider({ children }: ProviderProp): any {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    );
}