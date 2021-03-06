import { AppProps } from 'next/app';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { theme } from 'theme';
import 'assets/scss/global-styles.scss'; // global styles

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <GeistProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </GeistProvider>
    );
};

export default App;
