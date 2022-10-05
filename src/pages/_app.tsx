import type { AppProps } from "next/app";

import "$styles/vendor/bootstrap.css";
import "$styles/globals.css";
import "$styles/homepage.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;