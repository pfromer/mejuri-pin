import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../public/index.css';
import Theme from '../utilities/theme';
import { wrapper } from '../utilities/store'

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return <Theme>
        <Component {...pageProps} />
    </Theme>
}
export default wrapper.withRedux(MyApp);