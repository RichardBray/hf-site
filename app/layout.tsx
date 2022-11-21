import Layout from "components/Layout";
import { Ubuntu } from "@next/font/google";

import "$styles/vendor/bootstrap.css";
import "$styles/footer.css";
import "$styles/globals.css";

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ubuntu.className}>
      <head>
        <title>HaxeFlixel.com</title>
        <meta
          name="description"
          content="HaxeFlixel is a 2D Game Engine that lets you create cross-platform games easier with free, open source technology!"
        />
        <meta name="keywords" content="gamedev, game development, cross-platform, haxe, flixel" />
        <link rel="icon" href="/images/favicon.ico" />
        <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>

      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
