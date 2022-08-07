import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <ThemeProvider attribute="class" defaultTheme="system">
      <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Ubuntu;
  }

  * {
    box-sizing: border-box;
  }
`}</style>


      <div className="min-h-screen dark:bg-neutral-900 transition-colors duration-500 ">
        <Navbar />

        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
