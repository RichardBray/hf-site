import { Html, Head, Main, NextScript } from "next/document";
import Layout from "$components/Layout";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="HaxeFlixel is a 2D Game Engine that lets you create cross-platform games easier with free, open source technology!"
        />
        <meta name="keywords" content="gamedev, game development, cross-platform, haxe, flixel" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/images/favicon.ico" />
        <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" />
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js" />
      </Head>
      <body>
        <Layout>
          <Main />
        </Layout>
        <NextScript />
      </body>
    </Html>
  );
}
