import Navbar from "$components/Navbar";
import Footer from "$components/Footer";
import Head from "next/head";

import type { ReactNode } from "react";

type ReactProps = {
  children?: ReactNode;
};

export default function Layout({ children }: ReactProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
