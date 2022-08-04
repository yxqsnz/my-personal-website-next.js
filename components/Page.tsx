import Head from "next/head";
import Navbar from "./Navbar";

const Page = ({ children }: { children: React.ReactNode }) => (
  <div className="transition-colors duration-300 dark:bg-neutral-900">
    <Head>
      <title>Yxqsnz&apos;s website</title>
      <meta name="description" content="Just testing :>" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />

    <main> {children} </main>
  </div>
);

export default Page;
