import Layout from "components/Layout";

import "$styles/vendor/bootstrap.css";
import "$styles/footer.css";
import "$styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
