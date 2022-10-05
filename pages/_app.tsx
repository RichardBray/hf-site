import type { AppProps } from "next/app";

import "$styles/vendor/bootstrap.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
