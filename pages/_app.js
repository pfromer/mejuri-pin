import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Theme from '../Theme';
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {
    return <Theme>
        <Component {...pageProps} />
    </Theme>
}
export default MyApp;