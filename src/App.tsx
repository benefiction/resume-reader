import { Footer } from '@components/Footer';
import React from 'react';
interface AppProps {}

export const App = ({}: AppProps) => {
    return (
        <div>
            <h1>Hello World</h1>
            <Footer />
        </div>
    );
};
