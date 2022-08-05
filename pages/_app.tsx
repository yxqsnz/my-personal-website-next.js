import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen dark:bg-neutral-900">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
