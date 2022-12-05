import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-free/css/all.css";
import "@popperjs/core";
import "../styles/style.scss";
import "../styles/globals.scss";

if (process.browser) {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
