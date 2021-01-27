import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../public/index.css';
import Theme from '../utilities/theme';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '../redux/store';
import { useStore } from "react-redux";
import { Provider } from 'react-redux';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    const store = useStore((state) => state);
    return (
        <Provider store={store}>
            <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
                <Theme>
                    <Component {...pageProps} />
                </Theme>
            </PersistGate>
        </Provider>
    );
}

export default wrapper.withRedux(MyApp);