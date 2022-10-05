import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";

import type { ReactNode } from "react";

type ReactProps = {
    children?: ReactNode
}

export default function Layout({ children }: ReactProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
